"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
};

const ITEMS: GalleryItem[] = [
  {
    src: "/images/hair-style-01.jpg",
    alt: "Corte de pelo moderno",
    span: "tall",
  },
  {
    src: "/images/curly-blond.jpg",
    alt: "Cabello rizado rubio visto por detrás",
    span: "normal",
  },
  {
    src: "/images/redhead.jpg",
    alt: "Mujer pelirroja con cabello largo y brillante",
    span: "wide",
  },
  {
    src: "/images/foil.jpg",
    alt: "Aplicación de mechas con papel de aluminio",
    span: "normal",
  },
  {
    src: "/images/long-hair.jpg",
    alt: "Cabello largo y suave",
    span: "tall",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? i : (i - 1 + ITEMS.length) % ITEMS.length));
  const next = () =>
    setActive((i) => (i === null ? i : (i + 1) % ITEMS.length));

  return (
    <section id="galeria" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            Galería
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Últimos <span className="text-gradient-lilac">trabajos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground"
          >
            Una muestra de los looks, colores y tratamientos que creamos a
            diario en nuestro salón de Les Corts.
          </motion.p>
        </div>

        {/* Masonry-like grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 [column-fill:_balance]">
          {ITEMS.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              onClick={() => setActive(i)}
              className="group relative mb-4 sm:mb-5 block w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-shadow"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.20_0.05_295_/_0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                <span className="text-sm font-medium text-white max-w-[80%]">
                  {item.alt}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur ring-1 ring-white/30 text-white">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={ITEMS[active].src}
                alt={ITEMS[active].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="mt-4 text-center text-sm text-white/80">
                {ITEMS[active].alt} · {active + 1} / {ITEMS.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}