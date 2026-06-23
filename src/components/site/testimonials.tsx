"use client";

import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marta R.",
    role: "Cliente desde 2019",
    text: "Llevo años yendo a Chaure Estilistes y siempre salgo encantada. El trato es cercano y profesional, y el resultado del color y el corte es impecable. No imagino ir a otro sitio en Barcelona.",
    rating: 5,
  },
  {
    name: "Jordi M.",
    role: "Cliente desde 2021",
    text: "Me hicieron un Balayage que superó mis expectativas. Me asesoraron perfectamente sobre qué tono me favorecía y el resultado fue muy natural. El ambiente del salón es muy acogedor.",
    rating: 5,
  },
  {
    name: "Laura P.",
    role: "Novia 2023",
    text: "Hicieron mi peinado de novia y fue exactamente como lo soñé. Un recogido clásico con un toque moderno que aguantó toda la noche. ¡Mil gracias por hacerme sentir tan especial!",
    rating: 5,
  },
  {
    name: "Sergio T.",
    role: "Cliente desde 2020",
    text: "El mejor corte que me han hecho nunca. Se nota la experiencia y el cuidado por el detalle. Siempre me asesoran sobre cómo mantener el cabello entre citas. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Anna C.",
    role: "Cliente desde 2018",
    text: "Me hice un tratamiento de keratina y mi pelo quedó súper liso y brillante durante meses. El equipo conoce muy bien los productos que usa y se nota. Volveré sin duda.",
    rating: 5,
  },
  {
    name: "Carla V.",
    role: "Cliente desde 2022",
    text: "Un descubrimiento en Les Corts. Precios justos, profesionalidad y un trato humano que se echa de menos en otros sitios. Mis mechas artesanas quedaron preciosas.",
    rating: 5,
  },
];

// Enlace real al perfil de Google Maps de Chaure Estilistes
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/CHAURE+ESTILISTES/@41.3821882,2.1312542,15z/data=!4m5!3m4!1s0x0:0xfe270b81f59a2c32!8m2!3d41.3821882!4d2.1312542";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Header + Ver más button */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            Opiniones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            ¿Qué opinan nuestros <span className="text-gradient-lilac">clientes</span>?
          </motion.h2>

          {/* Rating summary + Ver más en Google */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 shadow-sm">
              {/* 4.8 / 5 → 4 estrellas llenas + 1 estrella al 80% */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-[oklch(0.78_0.13_310)] text-[oklch(0.78_0.13_310)]"
                  />
                ))}
                <span className="relative inline-block h-4 w-4 align-middle">
                  {/* Estrella base en gris */}
                  <Star className="absolute inset-0 h-4 w-4 text-muted-foreground/30" />
                  {/* Estrella lila recortada al 80% */}
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: "80%" }}
                    aria-hidden="true"
                  >
                    <Star className="h-4 w-4 fill-[oklch(0.78_0.13_310)] text-[oklch(0.78_0.13_310)]" />
                  </span>
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground">4.8</span>
              <span className="text-xs text-muted-foreground">en Google</span>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              Ver más reseñas
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Auto-scroll marquee (se mantiene igual) */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="w-[340px] sm:w-[400px] flex-shrink-0 rounded-3xl glass p-6 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[oklch(0.78_0.13_310)] text-[oklch(0.78_0.13_310)]"
                    />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/30" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                “{t.text}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA inferior para móvil / refuerzo */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mt-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          ¿Quieres leer todas las opiniones de nuestros clientes?
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Ver todas las reseñas en Google Maps
          <ExternalLink className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </section>
  );
}