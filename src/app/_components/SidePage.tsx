import Link from "next/link"
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  GlobeIcon
} from "@radix-ui/react-icons"

export default function SidePage() {
  return (
    <>
      <section className="mx-auto p-2 text-primary-foreground flex flex-col gap-2 space-y-4">
        <h1 className="font-bold text-2xl">Contato</h1>

        <article className="flex flex-col items-start justify-start space-y-2">
          <p className="text-justify text-base text-primary-foreground">
            Se você tem um projeto interessante, uma{' '}
            <span className="text-muted-foreground">ideia</span> inovadora ou apenas quer
            trocar experiências sobre o fascinante mundo do desenvolvimento,
            ficarei feliz em ouvir de você. Minha missão é criar{' '}
            <span className="text-muted-foreground">soluções</span> eficientes e impactantes, e
            estou pronto para contribuir para o sucesso do seu projeto.
          </p>

          <p className="text-justify text-base text-primary-foreground">
            Sinta-se à vontade para preencher o formulário abaixo ou me{' '}
            <span className="text-muted-foreground">contatar</span> através dos meios
            disponíveis. Estou ansioso para iniciar uma conversa e explorar as
            possibilidades de <span className="text-muted-foreground">trabalharmos</span>{' '}
            juntos.
          </p>
          <p className="text-justify text-base text-primary-foreground">
            Vamos construir algo incrível!
          </p>
        </article>

        <nav className="flex flex-col items-start justify-center space-y-2">
          <span className="text-xs">Desenvolvedor Front-End</span>
          <span className="text-xs">Joao Pessoa - PB</span>
          <Link href="mailto:wlymes@gmail.com" target="_blank" className="text-xs">wlymes@gmail.com</Link>
        </nav>
      </section>

      <section className="w-full p-2 space-y-2 flex-col items-center justify-center">
        <nav className="h-10 w-80 flex space-x-1.5 items-center justify-start">
          <Link href="https://www.linkedin.com/in/renovatt/" target="_blank" className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <LinkedInLogoIcon className="h-4 w-4 text-secondary" />
          </Link>

          <Link href="https://github.com/renovatt" target="_blank" className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <GitHubLogoIcon className="h-4 w-4 text-secondary" />
          </Link>

          <Link href="https://renovatt.dev.br/home" target="_blank" className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <GlobeIcon className="h-4 w-4 text-secondary" />
          </Link>

          <Link href="mailto:wlymes@gmail.com" target="_blank" className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <EnvelopeClosedIcon className="h-4 w-4 text-secondary" />
          </Link>
        </nav>
      </section>
    </>
  )
}
