import { ContactForm } from "@/app/_components/ContactForm"
import { ModeToggle } from "@/app/_components/ModeToggle"
import SidePage from "@/app/_components/SidePage"

export default function Contact() {
  return (
    <section className="p-2 w-screen h-screen flex items-center justify-center">
      <div className="absolute right-2 top-2">
        <ModeToggle />
      </div>
      <article className="w-1/2 relative h-full flex items-center justify-center flex-col space-y-4 bg-primary">
        <div style={{ backgroundImage: "url('/bg-contact.jpg')" }} className="bg-side opacity-50 dark:opacity-20 mix-blend-overlay dark:mix-blend-normal absolute h-full w-full bg-center bg-no-repeat inset-0" />
        <section className="w-full max-w-md z-10">
          <SidePage />
        </section>
      </article >

      <article className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
        <section className="w-full max-w-md">
          <ContactForm />
        </section>
      </article>
    </section >
  )
}
