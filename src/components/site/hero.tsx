"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Scissors, ArrowRight, Star } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const titleWords = ["Chaure", "estilistes"];

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div style={{ y: textY }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              9 años de experiencia en Barcelona
            </motion.div>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
              {titleWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    i === 0
                      ? "text-gradient-lilac mr-4 inline-block"
                      : "text-foreground mr-4 inline-block"
                  }
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              ¿Estás pensando en un nuevo estilo para tu cabello? ¿Tienes ganas
              de lucir un nuevo look y sorprender a todo el mundo? En Chaure
              Estilistes encontrarás una gran variedad de servicios para
              renovar tu imagen con peluqueros profesionales certificados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contacto");
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                <Scissors className="h-4 w-4" />
                Pedir cita
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("servicios");
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/60 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-all hover:bg-primary/5 hover:-translate-y-0.5"
              >
                Ver servicios
              </a>
            </motion.div>

            {/* rating row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[oklch(0.78_0.13_310)] text-[oklch(0.78_0.13_310)]"
                  />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Clientes satisfechos
                </span>{" "}
                en Les Corts, Barcelona
              </div>
            </motion.div>
          </motion.div>

          {/* Right: image collage */}
          <motion.div
            style={{ y: imageY, opacity: overlayOpacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[440px] sm:h-[520px] lg:h-[600px]"
          >
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="h-[88%] w-[88%] rounded-full border border-dashed border-primary/20" />
            </motion.div>

            {/* Main image */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-[80%] w-[68%] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-background"
            >
              <img
                src="/images/redhead.jpg"
                alt="Mujer con cabello pelirrojo largo y brillante"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating top-left card */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-4 w-40 sm:w-48 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-background"
            >
              <img
                src="/images/hair-style-01.jpg"
                alt="Corte de pelo moderno"
                className="aspect-square w-full object-cover"
              />
            </motion.div>

            {/* Floating bottom-left card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute left-6 bottom-4 w-36 sm:w-44 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-background"
            >
              <img
                src="/images/curly-blond.jpg"
                alt="Cabello rizado rubio"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              className="absolute right-0 top-8 rounded-2xl glass px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Marcas
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    Montibello · Nashi Argan
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border border-primary/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
