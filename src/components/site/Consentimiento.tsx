import { ShieldCheck } from "lucide-react";
import { CONSENTIMIENTO } from "@/lib/content";
import { Reveal } from "./Reveal";
import { HeartIcon } from "./Decor";

export function Consentimiento() {
  return (
    <section id="consentimiento" className="relative overflow-hidden bg-gradient-to-br from-grape via-grape to-rose py-20 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <HeartIcon className="h-3 w-3" /> Consentimiento
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Una relación saludable <br className="hidden sm:block" />
              <span className="font-hand text-rose-soft">se construye con respeto</span>
            </h2>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {CONSENTIMIENTO.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="flex items-start gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-rose-soft" />
                <p className="text-base text-white/95">{t}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
