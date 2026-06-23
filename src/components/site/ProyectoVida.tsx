import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { Save, Trash2 } from "lucide-react";
import { PROYECTO_VIDA } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Decor";

const KEY = "upn-mi-meta";

export function ProyectoVida() {
  const [meta, setMeta] = useState("");
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v) setSaved(v);
    } catch {}
  }, []);

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!meta.trim()) return;
    localStorage.setItem(KEY, meta.trim());
    setSaved(meta.trim());
    setMeta("");
  }

  function clear() {
    localStorage.removeItem(KEY);
    setSaved(null);
  }

  return (
    <section id="proyecto" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Proyecto de vida"
            title={<>Imagina <span className="text-grape">a dónde quieres llegar</span></>}
            subtitle="Pensar tu futuro te ayuda a tomar decisiones presentes con más claridad."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTO_VIDA.map((p, i) => {
            const Icon = (Icons[p.icon as keyof typeof Icons] ?? Icons.Sparkles) as React.ComponentType<{ className?: string }>;
            return (
              <Reveal key={p.title} delay={i * 0.04}>
                <article className="rounded-3xl bg-white p-5 soft-shadow transition-transform hover:-translate-y-1">
                  <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose-soft to-lilac text-grape">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <form onSubmit={save} className="mt-12 rounded-[2rem] bg-gradient-to-br from-rose-soft to-lilac p-6 soft-shadow sm:p-8">
            <label htmlFor="meta" className="text-lg font-bold text-ink">
              Escribe una meta personal
            </label>
            <p className="mt-1 text-sm text-ink/70">
              Solo se guarda en tu navegador. No se envía a ningún servidor.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                id="meta"
                value={meta}
                onChange={(e) => setMeta(e.target.value)}
                maxLength={140}
                placeholder="Ej. Terminar mis estudios y viajar con mis amistades."
                className="flex-1 rounded-2xl border-0 bg-white px-4 py-3 text-ink soft-shadow placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rose"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose to-grape px-5 py-3 font-semibold text-white chip-shadow">
                <Save className="h-4 w-4" /> Guardar
              </button>
            </div>
            {saved && (
              <div className="mt-5 flex items-start justify-between gap-3 rounded-2xl bg-white p-4 soft-shadow">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-grape">Mi meta</p>
                  <p className="mt-1 text-base text-ink">{saved}</p>
                </div>
                <button type="button" onClick={clear} aria-label="Borrar meta" className="rounded-full p-2 text-ink/50 hover:bg-rose-soft hover:text-rose">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
