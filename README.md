# Prevención del Embarazo Adolescente — UPN 2026

Sitio web educativo desarrollado como proyecto académico de la **Universidad Privada del Norte — Facultad de Salud**. Construido con React 19, TanStack Start, Vite, Tailwind v4, Motion y Lucide Icons.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir http://localhost:8080

## Compilar / Publicar

```bash
npm run build
```

- **Vercel / Netlify**: importa el repo. Build command `npm run build`.

## Imágenes

`src/assets/hero-teens.svg` y `src/assets/teen-thinking.svg` son **placeholders**.
Para usar las ilustraciones finales (PNG/JPG):

1. Copia la imagen en `src/assets/` (p. ej. `hero-teens.png`).
2. Cambia el import en el componente correspondiente
   (`src/components/site/Hero.tsx` y `src/components/site/QueEs.tsx`)
   a la nueva extensión, p. ej. `import heroImg from "@/assets/hero-teens.png";`.

## Estructura

```
src/
  routes/__root.tsx        SEO global + fuentes
  routes/index.tsx         Página principal (todas las secciones)
  components/site/         Navbar, Hero, secciones, footer
  components/ui/           shadcn primitives (acordeón, etc.)
  lib/content.ts           Todo el copy editable
  styles.css               Design tokens (paleta tríptico)
```

## Contenido

Edita `src/lib/content.ts` para actualizar textos, integrantes o fuentes. Los contactos oficiales (líneas telefónicas, MINSA, etc.) están marcados como **"Dato pendiente de verificación"** — reemplázalos por información oficial antes de publicar.

## Aviso

El contenido es **educativo** y no reemplaza la orientación de un profesional de salud.
