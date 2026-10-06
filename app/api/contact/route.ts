import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validação estrita via Zod
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors)[0]?.[0] || "Dados do formulário inválidos.";

      return NextResponse.json(
        { error: firstError, details: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validation.data;

    // 2. Envio do e-mail via Resend
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "asgc.devolp@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "ASGC Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Contato - Portfólio] Mensagem de ${name}`,
      html: `
        <h2>Nova mensagem recebida via Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      `,
    });

    if (error) {
      console.error("Erro retornado pelo SDK do Resend:", error);
      return NextResponse.json(
        { error: "Falha no serviço de e-mail. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Erro crítico na API de Contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}