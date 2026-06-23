import { Navbar } from "@/components/site/Navbar";
import { ReadingProgress, BackToTop } from "@/components/site/Chrome";
import { Hero } from "@/components/site/Hero";
import { QueEs } from "@/components/site/QueEs";
import { Causas } from "@/components/site/Causas";
import { Consecuencias } from "@/components/site/Consecuencias";
import { Prevencion } from "@/components/site/Prevencion";
import { Metodos } from "@/components/site/Metodos";
import { ITS } from "@/components/site/ITS";
import { Mitos } from "@/components/site/Mitos";
import { Consentimiento } from "@/components/site/Consentimiento";
import { ProyectoVida } from "@/components/site/ProyectoVida";
import { Encuesta } from "@/components/site/Encuesta";
import { Ayuda } from "@/components/site/Ayuda";
import { FAQ } from "@/components/site/FAQ";
import { CTAFinal } from "@/components/site/CTAFinal";
import { Footer } from "@/components/site/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <Causas />
        <Consecuencias />
        <Prevencion />
        <Metodos />
        <ITS />
        <Mitos />
        <Consentimiento />
        <ProyectoVida />
        <Encuesta />
        <Ayuda />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
