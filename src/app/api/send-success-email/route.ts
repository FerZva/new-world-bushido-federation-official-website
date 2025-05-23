import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const data = await resend.emails.send({
      from: "Store <onboarding@resend.dev>",
      to: email,
      subject: "Gracias por tu compra 🎉",
      html: `
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido procesado exitosamente. 🎁</p>
        <p>Si tienes preguntas, contáctanos respondiendo este correo.</p>
        <br/>
        <p>Atentamente,<br/>Tu Tienda Favorita 🛍️</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
