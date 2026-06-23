# Chaure Estilistes — Web

Web profesional para **Chaure Estilistes** (peluquería en Les Corts, Barcelona) construida con Next.js 16, TypeScript, Tailwind CSS 4 y Framer Motion.

## Requisitos previos

- **Node.js 18.18+** (recomendado 20+)
- **npm**, **pnpm** o **bun** (cualquiera de los tres funciona)

## Cómo ejecutar en local

1. **Descomprime el ZIP** en una carpeta de tu ordenador.

2. **Instala las dependencias** (elige uno de los gestores):

   ```bash
   # Con npm
   npm install

   # Con pnpm
   pnpm install

   # Con bun (el más rápido, recomendado)
   bun install
   ```

3. **Arranca el servidor de desarrollo**:

   ```bash
   # Con npm
   npm run dev

   # Con pnpm
   pnpm dev

   # Con bun
   bun run dev
   ```

4. **Abre tu navegador** en:

   ```
   http://localhost:3000
   ```

La página se recargará automáticamente cada vez que edites un archivo.

## Estructura del proyecto

```
chaure-estilistes/
├── public/
│   └── images/              # Fotos originales de la peluquería
├── src/
│   ├── app/
│   │   ├── globals.css      # Tema lila + animaciones
│   │   ├── layout.tsx       # Layout raíz + metadatos SEO
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── site/            # Componentes de la web
│       │   ├── aurora-background.tsx
│       │   ├── scroll-progress.tsx
│       │   ├── navbar.tsx
│       │   ├── hero.tsx
│       │   ├── about.tsx
│       │   ├── why-us.tsx
│       │   ├── services.tsx
│       │   ├── gallery.tsx
│       │   ├── testimonials.tsx
│       │   ├── contact.tsx
│       │   └── footer.tsx
│       └── ui/              # Componentes shadcn/ui
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Secciones de la web

1. **Hero** — Título "Chaure estilistes" con animación palabra por palabra y collage de fotos flotantes
2. **Quiénes somos** — Texto descriptivo + grid de 4 fotos + features
3. **Por qué escogernos** — 4 tarjetas con contadores animados (9+ años, 1000+ clientes, etc.)
4. **Servicios** — 5 cards (corte, color, mechas, tratamientos, estética) con modal de detalle
5. **Galería** — Masonry con lightbox y navegación
6. **Testimonios** — Marquee infinito con opiniones
7. **Contacto** — Tarjetas de info + Google Maps embebido con la dirección real
8. **Footer** — Watermark "Chaure" + enlaces

## Datos de la peluquería

- **Dirección:** Carrer de Fígols, 47, Les Corts, 08028 Barcelona
- **Teléfono:** 934 090 383
- **Email:** chaurestilistes@gmail.com
- **Marcas:** Montibello y Nashi Argan

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servir el build de producción
npm run lint     # Comprobar calidad del código con ESLint
```

## Personalización rápida

- **Colores:** Editar las variables CSS en `src/app/globals.css` (sección `:root`)
- **Textos:** Cada componente en `src/components/site/` tiene sus textos al inicio del archivo
- **Imágenes:** Sustituye los archivos en `public/images/` manteniendo los nombres
- **Mapa:** Ya configurado con la dirección real. Para cambiarlo, edita el `src` del iframe en `src/components/site/contact.tsx`

## Construir para producción

```bash
npm run build
npm run start
```

El build se servirá por defecto en `http://localhost:3000`.

---

Hecho con ❤️ para Chaure Estilistes.
