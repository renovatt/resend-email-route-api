import { ContactForm } from "@/app/_components/ContactForm"
import { ModeToggle } from "@/app/_components/ModeToggle"
import SidePage from "@/app/_components/SidePage"

export default function Contact() {
  return (
    <section className="p-0 md:p-2 w-screen h-screen flex md:flex-row flex-col items-center justify-start md:justify-center">
      <div className="md:flex w-full justify-end items-center hidden md:absolute right-2 top-2">
        <ModeToggle />
      </div>
      <article className="w-full md:w-1/2 relative h-full flex items-center justify-center flex-col bg-primary">
        <div style={{ backgroundImage: "url('/bg-contact.jpg')" }} className="bg-side opacity-50 dark:opacity-20 mix-blend-overlay dark:mix-blend-normal absolute h-full w-full bg-center bg-no-repeat inset-0" />
        <section className="w-full max-w-md z-10">
          <div className="flex justify-end items-center absolute md:hidden right-2 top-2">
            <ModeToggle />
          </div>
          <SidePage />
        </section>
      </article >

      <article className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-4 mb-20">
        <section className="w-full max-w-md px-2 mb-14 md:m-0">
          <ContactForm />
        </section>
      </article>
    </section >
  )
}
