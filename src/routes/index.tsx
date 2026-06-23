import { createFileRoute } from "@tanstack/react-router";
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

const TITLE = "Prevención del embarazo adolescente | Información y orientación";
const DESC = "Conoce cómo prevenir el embarazo adolescente, los métodos anticonceptivos, la importancia del consentimiento y dónde buscar orientación. Proyecto educativo UPN 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Prevención del embarazo adolescente",
          author: { "@type": "Organization", name: "Universidad Privada del Norte" },
          inLanguage: "es",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
