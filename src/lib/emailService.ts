import nodemailer from 'nodemailer';

export interface LeadEmailData {
  fullName: string;
  email: string;
  phone: string;
  segment?: string;
  mainChallenge?: string;
}

export async function sendLeadNotificationEmail(lead: LeadEmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const user = process.env.SMTP_USER || 'contato@mentorads.me';
  const pass = process.env.SMTP_PASS || '@Lokura3001';
  const recipient = process.env.LEAD_RECIPIENT_EMAIL || 'ciello.consultoria11@gmail.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #c5a059;">
      <h2 style="color: #c5a059; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">🚀 Nova Aplicação Recebida!</h2>
      <p style="color: #cccccc; font-size: 14px;">Um novo potencial mentorado acabou de preencher a aplicação no site <strong>Mentoria Meta Ousada</strong>.</p>
      
      <div style="background-color: #262626; padding: 18px; border-radius: 8px; border-left: 4px solid #c5a059; margin: 20px 0;">
        <p style="margin: 6px 0; font-size: 15px;"><strong style="color: #c5a059;">Nome:</strong> ${lead.fullName}</p>
        <p style="margin: 6px 0; font-size: 15px;"><strong style="color: #c5a059;">E-mail:</strong> <a href="mailto:${lead.email}" style="color: #ffffff;">${lead.email}</a></p>
        <p style="margin: 6px 0; font-size: 15px;"><strong style="color: #c5a059;">WhatsApp:</strong> <a href="https://wa.me/${lead.phone.replace(/\D/g, '')}" style="color: #25d366; font-weight: bold;">${lead.phone} (Conversar no WhatsApp)</a></p>
        <p style="margin: 6px 0; font-size: 15px;"><strong style="color: #c5a059;">Segmento:</strong> ${lead.segment || 'Não informado'}</p>
        <p style="margin: 6px 0; font-size: 15px;"><strong style="color: #c5a059;">Maior Desafio:</strong> ${lead.mainChallenge || 'Não informado'}</p>
      </div>

      <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 30px;">
        Enviado automaticamente para ${recipient} | Mentoria Meta Ousada
      </p>
    </div>
  `;

  const createTransporter = (port: number, secure: boolean) => {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false
      }
    });
  };

  // 1. Try Port 465 (SSL)
  try {
    const transporter465 = createTransporter(465, true);
    const info = await transporter465.sendMail({
      from: `"Mentoria Meta Ousada" <${user}>`,
      to: recipient,
      replyTo: lead.email,
      subject: `🔥 Nova Aplicação Recebida: ${lead.fullName} (${lead.phone})`,
      text: `Nova Aplicação Recebida:\n\nNome: ${lead.fullName}\nEmail: ${lead.email}\nWhatsApp: ${lead.phone}\nSegmento: ${lead.segment || 'N/A'}\nDesafio: ${lead.mainChallenge || 'N/A'}`,
      html: htmlContent,
    });
    console.log("Email enviado com sucesso via Hostinger (Porta 465):", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err465: any) {
    console.warn("Falha na porta 465, tentando porta 587 (STARTTLS)...", err465?.message || err465);
    
    // 2. Fallback to Port 587 (TLS/STARTTLS)
    try {
      const transporter587 = createTransporter(587, false);
      const info587 = await transporter587.sendMail({
        from: `"Mentoria Meta Ousada" <${user}>`,
        to: recipient,
        replyTo: lead.email,
        subject: `🔥 Nova Aplicação Recebida: ${lead.fullName} (${lead.phone})`,
        text: `Nova Aplicação Recebida:\n\nNome: ${lead.fullName}\nEmail: ${lead.email}\nWhatsApp: ${lead.phone}\nSegmento: ${lead.segment || 'N/A'}\nDesafio: ${lead.mainChallenge || 'N/A'}`,
        html: htmlContent,
      });
      console.log("Email enviado com sucesso via Hostinger (Porta 587):", info587.messageId);
      return { success: true, messageId: info587.messageId };
    } catch (err587: any) {
      console.error("Erro ao enviar email via Hostinger (Portas 465 e 587):", err587);
      return { success: false, error: err587?.message || String(err587) };
    }
  }
}

