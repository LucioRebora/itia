import nodemailer from "nodemailer";

export async function sendLeadEmail(lead: {
    name: string;
    email: string;
    phone?: string | null;
    company?: string | null;
    message: string;
}) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"ITIA - Chatbot" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: lead.email,
        subject: `🤖 [CHATBOT ITIA] Nuevo lead: ${lead.name}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">Nuevo lead desde el chatbot</h2>
        <p style="margin-bottom: 10px;"><b>Nombre:</b> ${lead.name}</p>
        <p style="margin-bottom: 10px;"><b>Email:</b> ${lead.email}</p>
        <p style="margin-bottom: 10px;"><b>Teléfono:</b> ${lead.phone || "No especificado"}</p>
        <p style="margin-bottom: 10px;"><b>Empresa:</b> ${lead.company || "No especificada"}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <p style="margin-bottom: 5px;"><b>Necesidad:</b></p>
          <p style="white-space: pre-wrap;">${lead.message}</p>
        </div>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center;">Lead capturado automáticamente por el asistente virtual de ITIA.</p>
      </div>
    `,
    });
}
