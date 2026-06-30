# Prevención del Embarazo Adolescente

<p align="center">
  <img src="preview.png" alt="Vista previa del sitio Prevención del Embarazo Adolescente" width="820" />
</p>

<p align="center">
  Sitio web educativo sobre la prevención del embarazo adolescente.<br/>
  Proyecto académico de la Universidad Privada del Norte (UPN), Facultad de Salud — 2026.
</p>

<p align="center">
  <a href="https://prevencionembarazo-upn.netlify.app/"><b>Ver el sitio en línea</b></a>
</p>

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y uso](#instalación-y-uso)
- [Despliegue](#despliegue)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Edición del contenido](#edición-del-contenido)
- [Autoría](#autoría)
- [Licencia](#licencia)

## Descripción

Aplicación web informativa y de orientación sobre la prevención del embarazo adolescente, dirigida a adolescentes y jóvenes. Centraliza información clara y verificable sobre salud sexual y reproductiva en una interfaz responsiva y accesible.

Sitio publicado: https://prevencionembarazo-upn.netlify.app/

## Características

- Información sobre el embarazo adolescente: definición, causas y consecuencias.
- Métodos anticonceptivos y guía de uso correcto del preservativo.
- Sección sobre infecciones de transmisión sexual (ITS), mitos y consentimiento.
- Encuesta interactiva de autoevaluación.
- Apartado de proyecto de vida con almacenamiento local en el navegador.
- Recursos de ayuda y preguntas frecuentes.

## Tecnologías

| Herramienta | Uso |
| --- | --- |
| React 19 + TypeScript | Interfaz de usuario |
| Vite | Entorno de desarrollo y empaquetado |
| Tailwind CSS v4 | Estilos y diseño |
| Motion | Animaciones |
| Lucide / Radix UI | Iconos y componentes accesibles |

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/JheissonLoor/prevencion_embarazo_adolescente.git
cd prevencion_embarazo_adolescente

# Instalar dependencias
npm install

# Iniciar el entorno de desarrollo
npm run dev
```

Scripts disponibles:

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en http://localhost:8080 |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza localmente la versión de producción |
| `npm run lint` | Analiza el código con ESLint |

## Despliegue

El proyecto está desplegado en Netlify e incluye el archivo `netlify.toml`. La configuración de publicación es:

- Comando de construcción: `npm run build`
- Directorio de publicación: `dist`

## Estructura del proyecto

```
src/
  main.tsx           Punto de entrada de la aplicación
  App.tsx            Componente raíz que compone las secciones
  components/site/   Secciones del sitio (inicio, encuesta, métodos, etc.)
  components/ui/     Componentes de interfaz reutilizables
  lib/content.ts     Textos y datos editables del sitio
  hooks/             Hooks reutilizables
  assets/            Imágenes e ilustraciones
  styles.css         Estilos globales y variables de diseño
```

## Edición del contenido

El contenido del sitio (secciones, métodos, encuesta y fuentes) está centralizado en `src/lib/content.ts`, lo que permite actualizar la información sin modificar los componentes. Los contactos oficiales marcados como "Dato pendiente de verificación" deben reemplazarse por información oficial antes de su difusión.

## Autoría

Autor y desarrollo: **Jheisson Loor**

Proyecto académico elaborado por estudiantes de la Facultad de Salud de la Universidad Privada del Norte:

- López Romero Angie Ariana
- Sánchez Capristano Anyeli
- Gamarra Rodríguez Lalesca
- Aguillar Llamoctanta Mirian
- Cervera Cruz Dany Yoseri
- Arrascue Monsalve María Seidy

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

---

El contenido de este sitio es educativo y no reemplaza la orientación de un profesional de salud.
