'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/contact')
    }, 100);
  }, [router]);
  return (
    <section className="bg-primary w-screen h-screen flex items-center justify-center">
      <p className="text-secondary">Carregando..</p>
    </section>
  );
}
