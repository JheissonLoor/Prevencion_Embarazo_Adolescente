import { NAV, INTEGRANTES, FUENTES } from "@/lib/content";
import { HeartIcon } from "./Decor";

export function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-2xl font-black text-white">Prevenir<span className="text-rose">+</span></p>
          <p className="mt-1 font-hand text-xl text-rose-soft">Tú decides tu presente, tú construyes tu futuro</p>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Proyecto académico de la <strong className="text-white">Universidad Privada del Norte</strong> —
            Facultad de Salud · 2026. Tema: prevención del embarazo adolescente.
          </p>
          <p className="mt-4 max-w-md text-xs text-white/60">
            El contenido es educativo y no reemplaza la orientación de un profesional de salud.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-soft">Navegación</h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-white/75 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-soft">Integrantes</h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {INTEGRANTES.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <HeartIcon className="mt-1 h-3 w-3 shrink-0 text-rose" />
                <span className="text-white/80">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-soft">Fuentes consultadas</h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {FUENTES.map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-white/75 underline-offset-4 hover:text-white hover:underline">
                  {f.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/50">© 2026 UPN · Proyecto educativo sin fines de lucro.</p>
        </div>
      </div>
    </footer>
  );
}
