import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { sendLeadNotificationEmail } from "./src/lib/emailService.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LeadApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  segment?: string;
  mainChallenge?: string;
  createdAt: string;
  emailStatus?: { success: boolean; messageId?: string; error?: string };
  webhookStatus?: 'success' | 'failed' | 'not_configured';
  webhookResponse?: string;
}

const leadsStore: LeadApplication[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Mentoria Meta Ousada API" });
  });

  // Get stored leads (for commercial testing/admin dashboard)
  app.get("/api/applications", (_req, res) => {
    res.json({ success: true, total: leadsStore.length, leads: leadsStore });
  });

  // Application submission endpoint
  app.post("/api/application", async (req, res) => {
    try {
      const { fullName, email, phone, segment, mainChallenge, webhookUrl } = req.body;

      if (!fullName || !email || !phone) {
        return res.status(400).json({
          success: false,
          message: "Nome completo, e-mail e WhatsApp são obrigatórios.",
        });
      }

      const payload = {
        event: "lead_application_submitted",
        source: "Landing Page Mentoria Meta Ousada",
        submittedAt: new Date().toISOString(),
        data: {
          fullName,
          email,
          phone,
          segment: segment || "Não informado",
          mainChallenge: mainChallenge || "Não informado",
        },
      };

      // Disparar e-mail para ciello.consultoria11@gmail.com
      const emailResult = await sendLeadNotificationEmail({
        fullName,
        email,
        phone,
        segment,
        mainChallenge,
      });

      let webhookStatus: 'success' | 'failed' | 'not_configured' = 'not_configured';
      let webhookDetails = "Nenhum webhook configurado.";

      if (webhookUrl && typeof webhookUrl === "string" && webhookUrl.trim().startsWith("http")) {
        try {
          const response = await fetch(webhookUrl.trim(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            webhookStatus = "success";
            webhookDetails = `Webhook (n8n) notificado com sucesso (Status: ${response.status})`;
          } else {
            webhookStatus = "failed";
            webhookDetails = `Webhook respondeu com erro HTTP ${response.status}`;
          }
        } catch (err: unknown) {
          webhookStatus = "failed";
          webhookDetails = `Erro ao disparar Webhook: ${err instanceof Error ? err.message : String(err)}`;
        }
      }

      const newLead: LeadApplication = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        fullName,
        email,
        phone,
        segment: segment || "",
        mainChallenge: mainChallenge || "",
        createdAt: new Date().toISOString(),
        emailStatus: emailResult,
        webhookStatus,
        webhookResponse: webhookDetails,
      };

      leadsStore.unshift(newLead);

      return res.json({
        success: true,
        message: "Aplicação enviada com sucesso e e-mail disparado!",
        lead: newLead,
        payload,
        emailStatus: emailResult,
        webhook: {
          status: webhookStatus,
          message: webhookDetails,
        },
      });
    } catch (error: unknown) {
      console.error("Erro na rota de aplicação:", error);
      return res.status(500).json({
        success: false,
        message: "Erro interno ao processar a aplicação.",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  });


  // Vite middleware in dev, static serving in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
