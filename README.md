# Lumina Blog

Blog oficial de [Lúmina W](https://luminaw.co) — studio de software en Medellín, Colombia. Publicamos sobre desarrollo de software, SaaS, seguridad y casos de estudio.

**URL:** [blog.luminaw.co](https://blog.luminaw.co)

## Stack

| Herramienta | Versión |
|---|---|
| [Astro](https://astro.build) | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | 4.x |
| [React](https://react.dev) | 19.x |
| [Decap CMS](https://decapcms.org) | — |

## Requisitos

- Node.js 20+
- npm

## Primeros pasos

```bash
npm install
npm run dev
```

| Comando | Acción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Vista previa del build local |

## Estructura

```
src/
├── components/ui/   # Button, Footer, Link, Loader, Navbar, PostCard
├── content/blog/    # Artículos en Markdown
├── layouts/         # Layout.astro, PostLayout.astro
├── pages/           # index.astro, blog/[slug].astro
├── scripts/         # cursor.ts, loader.ts
└── styles/          # global.css

public/
├── admin/           # Decap CMS (index.html + config.yml)
├── brand/           # Logo y favicon
├── icons/ui/        # SVG de redes sociales
└── images/          # Imágenes de posts y perfil
```

## Gestión de contenido

El blog usa [Decap CMS](https://decapcms.org) con autenticación por Netlify Identity.

Accede al panel en `/admin` una vez desplegado en Netlify.

Los artículos se crean en `src/content/blog/` como archivos Markdown con el siguiente frontmatter:

```yaml
---
title: 'Título del artículo'
date: 2026-04-12
description: 'Descripción breve para SEO (máx. 160 caracteres)'
category: 'Desarrollo de software'
cover: /images/banner.png
readTime: '5 min'
---
```

Categorías disponibles: `Bienvenida`, `Desarrollo de software`, `SaaS y producto`, `Seguridad`, `Casos de estudio`.

## Despliegue

El sitio está configurado para Netlify con Decap CMS. Conecta el repositorio en Netlify y activa Netlify Identity para habilitar el CMS.

## Formateo de código

```bash
npx prettier --write .
```

Configuración en [.prettierrc](.prettierrc). Requiere `prettier-plugin-astro` para formatear archivos `.astro`.
