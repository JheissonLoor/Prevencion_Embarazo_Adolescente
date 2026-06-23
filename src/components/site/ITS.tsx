import { ShieldPlus, Activity, Eye, FlaskConical } from "lucide-react";
import { ITS_LIST } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle, HeartIcon } from "./Decor";

const POINTS = [
  { icon: Activity, title: "Pueden no presentar síntomas", text: "Muchas ITS son silenciosas; por eso la prueba es clave." },
  { icon: Eye, title: "Se transmiten por contacto sin protección", text: "Vaginal, anal u oral. El preservativo reduce el riesgo." },
  { icon: FlaskConical, title: "Tienen tratamiento y control", text: "Detectar a tiempo cambia totalmente el panorama." },
  { icon: ShieldPlus, title: "Prevención = información + chequeos", text: "Acude periódicamente a un centro de salud." },
];

export function ITS() {
  return (
    <section id="its" className="relative bg-lilac/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="ITS y protección"
            title={<>Conocer para <span className="text-grape">protegerte</span></>}
            subtitle="Las infecciones de transmisión sexual (ITS) se previenen con información, protección y controles periódicos."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="h-full rounded-3xl bg-white p-5 soft-shadow">
                <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-2xl bg-rose-soft text-rose">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-[2rem] bg-white/80 p-6 backdrop-blur soft-shadow sm:p-8">
            <h3 className="text-xl font-bold text-ink">ITS más frecuentes</h3>
            <p className="mt-1 text-sm text-ink/70">
              Información general, sin imágenes alarmantes. Acude a un profesional para diagnóstico y tratamiento.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {ITS_LIST.map((i) => (
                <li key={i.name} className="flex items-start gap-3 rounded-2xl bg-rose-soft/40 px-4 py-3">
                  <HeartIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{i.name}</p>
                    <p className="text-xs text-ink/65">{i.full}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
