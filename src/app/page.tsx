import { NextResponse } from "next/server";
import { Resend } from "resend";
import KoalaWelcomeEmail from "./templates/KoalaWelcomeEmail";

export default async function Home() {

  const handleSendEmail = async () => {
    'use server'
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Renovatt <onboarding@resend.dev>',
      to: 'wlymes@gmail.com',
      subject: 'Dev.to - Server Actions',
      react: KoalaWelcomeEmail({ userFirstname: 'Will' })
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error });
    }
    console.log('send by server actions', data)
  }

  return (
    <section className="bg-zinc-600 p-2 w-screen h-screen flex items-center justify-center">
      <article className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-xl">Formulario E-mail Server Actions</h1>
        <form action={handleSendEmail} className="flex flex-col space-y-4">
          <label htmlFor="name" className="text-base text-white">Nome</label>
          <input placeholder="Digite seu nome" type="text" className="p-2 rounded font-bold outline-none" />
          <input type="submit" value="enviar" className="p-2 text-center bg-purple-500 rounded font-bold text-base capitalize" />
        </form>
      </article>
    </section>
  );
}
