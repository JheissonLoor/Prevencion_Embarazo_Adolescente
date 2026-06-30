# Prevención del Embarazo Adolescente

<p align="center">
  <img src="src/assets/hero-teens.png" alt="Prevención del Embarazo Adolescente" width="540" />
</p>

<p align="center">
  Sitio web educativo sobre la prevención del embarazo adolescente.<br/>
  Proyecto académico — Universidad Privada del Norte (UPN), Facultad de Salud, 2026.
</p>

<p align="center">
  <a href="https://prevencionembarazo-upn.netlify.app/">Ver el sitio en línea</a>
</p>

## Demo

Sitio publicado: https://prevencionembarazo-upn.netlify.app/

## Descripción

Sitio web informativo y de orientación sobre la prevención del embarazo adolescente, dirigido a adolescentes y jóvenes. Reúne información clara y verificable sobre salud sexual y reproductiva en un formato accesible y fácil de navegar.

## Contenido

- Qué es el embarazo adolescente, sus causas y consecuencias.
- Métodos anticonceptivos y uso correcto del preservativo.
- Infecciones de transmisión sexual (ITS), mitos y verdades, y consentimiento.
- Encuesta interactiva para reforzar lo aprendido.
- Proyecto de vida: una meta personal que se guarda en el navegador.
- Recursos de ayuda y preguntas frecuentes.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS v4
- Motion (animaciones) y Lucide (iconos)

## Ejecución en local

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

El sitio queda disponible en http://localhost:8080.

Para generar la versión de producción:

```bash
npm run build
```

## Despliegue

El sitio está desplegado en Netlify. El repositorio incluye `netlify.toml`; el comando de construcción es `npm run build` y el directorio de publicación es `dist`.

## Estructura del proyecto

```
src/
  main.tsx           Punto de entrada
  App.tsx            Componente raíz con todas las secciones
  components/site/   Secciones del sitio (inicio, encuesta, métodos, etc.)
  components/ui/     Componentes de interfaz
  lib/content.ts     Textos editables del sitio
  hooks/             Hooks reutilizables
  assets/            Imágenes
  styles.css         Estilos y variables de diseño
```

## Edición del contenido

Los textos del sitio se encuentran en `src/lib/content.ts`. Desde ese archivo se actualizan las secciones, los métodos, la encuesta y las fuentes sin modificar los componentes. Los contactos oficiales marcados como "Dato pendiente de verificación" deben reemplazarse por información oficial antes de su difusión.

## Equipo

Proyecto desarrollado por estudiantes de la Facultad de Salud de la Universidad Privada del Norte:

- López Romero Angie Ariana
- Sánchez Capristano Anyeli
- Gamarra Rodríguez Lalesca
- Aguillar Llamoctanta Mirian
- Cervera Cruz Dany Yoseri
- Arrascue Monsalve María Seidy

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo LICENSE.

## Aviso

El contenido de este sitio es educativo y no reemplaza la orientación de un profesional de salud.
