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

Las ilustraciones del sitio están en `src/assets/`. Para cambiarlas, reemplaza
el archivo correspondiente (manteniendo el mismo nombre) o sube uno nuevo y
actualiza el `import` en `src/components/site/Hero.tsx` y
`src/components/site/QueEs.tsx`.

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
