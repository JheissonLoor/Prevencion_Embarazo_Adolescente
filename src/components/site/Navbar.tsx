import { useEffect, useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { NAV } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg soft-shadow" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2 text-lg font-black text-ink" style={{ fontFamily: "var(--font-display)" }}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose to-grape text-white">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <span className="truncate">Prevenir<span className="text-rose">+</span></span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "bg-rose-soft text-grape"
                    : "text-ink/70 hover:text-grape"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#ayuda"
          className="hidden rounded-full bg-gradient-to-r from-rose to-grape px-5 py-2.5 text-sm font-semibold text-white chip-shadow transition-transform hover:scale-[1.03] md:inline-block"
        >
          Necesito orientación
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink soft-shadow lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-3 rounded-3xl bg-white p-3 soft-shadow">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-rose-soft hover:text-grape"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#ayuda"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl bg-gradient-to-r from-rose to-grape px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Necesito orientación
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
