import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendLeadNotificationEmail } from '../src/lib/emailService';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, segment, mainChallenge, webhookUrl } = req.body || {};

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

    // 1. Send Email Notification via Hostinger SMTP to ciello.consultoria11@gmail.com
    const emailResult = await sendLeadNotificationEmail({
      fullName,
      email,
      phone,
      segment,
      mainChallenge,
    });

    let webhookStatus = 'not_configured';
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
          webhookDetails = `Webhook notificado com sucesso (${response.status})`;
        } else {
          webhookStatus = "failed";
          webhookDetails = `Webhook respondeu com erro ${response.status}`;
        }
      } catch (err: unknown) {
        webhookStatus = "failed";
        webhookDetails = `Erro no Webhook: ${err instanceof Error ? err.message : String(err)}`;
      }
    }

    return res.status(200).json({
      success: true,
      message: "Aplicação enviada e e-mail disparado com sucesso!",
      payload,
      emailStatus: emailResult,
      webhook: {
        status: webhookStatus,
        message: webhookDetails,
      },
    });
  } catch (error: unknown) {
    return res.status(500).json({
      success: false,
      message: "Erro interno ao processar a aplicação.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

