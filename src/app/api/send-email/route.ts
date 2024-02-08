import KoalaWelcomeEmail from "@/app/templates/KoalaWelcomeEmail";
import { FormSchemaType, formSchema } from "@/schemas";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(Resquest: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body: FormSchemaType = await Resquest.json();
  const { message, email, username, visitor } = formSchema.parse(body);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Renovatt <noreply@resend.dev>',
      to: 'wlymes@gmail.com',
      subject: 'Contato - Renovatt.dev',
      react: KoalaWelcomeEmail({ email, message, username, visitor })
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error });
    }

    return NextResponse.json({ message: 'Message sent successfully', status: "success", data });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error to send e-mail", status: "error", error })
  }
}