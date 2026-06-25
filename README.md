# Prevención del Embarazo Adolescente

<p align="center">
  <img src="src/assets/hero-teens.png" alt="Prevención del Embarazo Adolescente" width="560" />
</p>

<p align="center">
  <strong>Sitio web educativo sobre la prevención del embarazo adolescente.</strong><br/>
  Proyecto académico · Universidad Privada del Norte (UPN) — Facultad de Salud · 2026
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
</p>

---

## 🔗 Demo

Sitio publicado en Netlify: **_(añade aquí la URL de tu despliegue)_**

## 📖 Sobre el proyecto

Sitio web informativo y de orientación sobre la prevención del embarazo adolescente, dirigido principalmente a adolescentes y jóvenes. Reúne en un solo lugar información clara y verificable sobre salud sexual y reproductiva, con un diseño moderno, accesible y fácil de navegar.

## ✨ Características

- **Información clara** sobre qué es el embarazo adolescente, sus causas y consecuencias.
- **Métodos anticonceptivos** explicados por tipo, y guía del uso correcto del preservativo.
- Secciones de **ITS**, **mitos y verdades** y **consentimiento**.
- **Encuesta interactiva** (quiz) para reforzar lo aprendido.
- **Proyecto de vida**: espacio para escribir una meta personal (se guarda en el navegador).
- **Recursos de ayuda** y **preguntas frecuentes**.
- Diseño **responsivo**, accesible y con animaciones suaves.

## 🛠️ Tecnologías

- **React 19** + **TypeScript**
- **Vite** (servidor de desarrollo y build)
- **Tailwind CSS v4**
- **Motion** (animaciones)
- **Lucide** (iconos) y **Radix UI** (componentes accesibles)

## 🚀 Puesta en marcha

> Requisitos: **Node.js 18+**

```bash
# Instalar dependencias
npm install

# Entorno de desarrollo (http://localhost:8080)
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview
```

## 📦 Despliegue en Netlify

El repositorio incluye `netlify.toml`. Para publicar:

1. Conecta el repositorio en [Netlify](https://www.netlify.com/).
2. **Build command:** `npm run build` — **Publish directory:** `dist`.
3. Despliega.

## 🗂️ Estructura del proyecto

```
src/
├── main.tsx          # Punto de entrada de la aplicación
├── App.tsx           # Componente raíz (renderiza todas las secciones)
├── components/
│   ├── site/         # Secciones: Hero, QueEs, Métodos, Encuesta, Footer…
│   └── ui/           # Componentes de interfaz reutilizables
├── lib/content.ts    # Todo el texto editable del sitio
├── hooks/            # Hooks reutilizables
├── assets/           # Imágenes e ilustraciones
└── styles.css        # Estilos globales y design tokens
```

## ✏️ Editar el contenido

Casi todo el texto del sitio vive en **`src/lib/content.ts`** (secciones, métodos, encuesta, fuentes e integrantes). Edítalo ahí para actualizar la información sin tocar los componentes.

> Los contactos oficiales (líneas telefónicas, MINSA, etc.) están marcados como **"Dato pendiente de verificación"**. Reemplázalos por información oficial antes de publicar.

## 👥 Equipo

Proyecto desarrollado por estudiantes de la **Facultad de Salud — UPN**:

- López Romero Angie Ariana
- Sánchez Capristano Anyeli
- Gamarra Rodríguez Lalesca
- Aguillar Llamoctanta Mirian
- Cervera Cruz Dany Yoseri
- Arrascue Monsalve María Seidy

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.

## ⚠️ Aviso

El contenido de este sitio es **educativo** y no reemplaza la orientación de un profesional de salud.
