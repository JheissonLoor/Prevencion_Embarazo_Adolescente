import { Phone, MapPin, MessagesSquare } from "lucide-react";
import { AYUDA } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle, HeartIcon } from "./Decor";

export function Ayuda() {
  return (
    <section id="ayuda" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="¿Dónde buscar ayuda?"
            title={<>No estás <span className="text-rose">sola</span> ni <span className="text-grape">solo</span></>}
            subtitle="Pedir ayuda no es motivo de vergüenza. Buscar orientación es una decisión responsable."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AYUDA.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="h-full rounded-3xl bg-white p-6 soft-shadow">
                <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-2xl bg-rose-soft text-rose">
                  <HeartIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.text}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-lilac/70 px-3 py-1 text-xs font-semibold text-grape">
                  Dato pendiente de verificación
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid gap-4 rounded-[2rem] bg-gradient-to-br from-lilac/70 to-rose-soft/60 p-6 sm:p-8 md:grid-cols-3">
            {[
              { icon: Phone, t: "Línea oficial", s: "Espacio editable para contacto verificado" },
              { icon: MapPin, t: "Centro de salud", s: "Acude al más cercano a tu domicilio" },
              { icon: MessagesSquare, t: "Atención confidencial", s: "Tu información está protegida" },
            ].map((b) => (
              <div key={b.t} className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-grape">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-bold text-ink">{b.t}</p>
                  <p className="text-sm text-ink/70">{b.s}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
