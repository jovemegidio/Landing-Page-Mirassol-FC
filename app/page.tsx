import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Players } from "@/components/players";
import { Stadium } from "@/components/stadium";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Players />
        <Stadium />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
