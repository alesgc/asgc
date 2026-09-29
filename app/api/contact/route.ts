import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação básica dos campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // Envio do e-mail via Resend
    const data = await resend.emails.send({
      from: "ASGC Devolp Contact <onboarding@resend.dev>", // Remetente de testes padrão do Resend
      to: [process.env.CONTACT_RECIPIENT_EMAIL || "asgc.devolp@gmail.com"],
      replyTo: email, // Ao clicar em "Responder", vai direto para o visitante
      subject: `[Contato - Portfólio] Mensagem de ${name}`,
      html: `
        <h2>Nova mensagem recebida pelo Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar a mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}