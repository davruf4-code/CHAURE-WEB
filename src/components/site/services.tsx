"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Brush,
  ArrowUpRight,
  X,
  CheckCircle2,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  short: string;
  long: string;
  highlights: string[];
  image: string;
  icon: typeof Scissors;
};

const SERVICES: Service[] = [
  {
    id: "corte",
    title: "Corte y peinado",
    short:
      "Nuestros estilistas te asesorarán en el corte de pelo y el peinado que más te favorecen.",
    long:
      "¡Ven a cambiar de look! Nuestros estilistas en Les Corts te asesorarán en el corte de pelo y el peinado que más te favorecen. Cuidamos tu cabello y te ofrecemos diferentes posibilidades para que tu peinado refleje tu personalidad. Estamos especializados en cortes para hombre, mujer y niñ@s, y en todo tipo de peinados. Elige tu estilo y disfruta de semirecogidos y recogidos clásicos o actuales para acudir a un evento especial como el día de tu boda o disfrutar de un peinado diferente a diario.",
    highlights: [
      "Cortes para hombre, mujer y niños",
      "Semirecogidos y recogidos clásicos o actuales",
      "Peinados de novia y eventos especiales",
      "Asesoramiento personalizado",
    ],
    image: "/images/hair-style-02.jpg",
    icon: Scissors,
  },
  {
    id: "tintes",
    title: "Tintes y baños de color",
    short:
      "Conseguimos cualquier tono de color para tu pelo desde los más tradicionales a los más atrevidos.",
    long:
      "En Chaure Estilistes conseguimos cualquier tono de color para tu pelo desde los más tradicionales a los más atrevidos. Trabajamos con tintes con amoniaco y sin amoniaco y su duración depende del tipo de tinte: pueden ser tintes permanentes y semipermanentes. También realizamos baños de color, tratamiento para darle brillo al cabello potenciando su color. Con el baño de color se mantiene el tono original del cabello, realzando su brillo y color, aunque dependiendo del color de partida puede variar sobre ese tono original.",
    highlights: [
      "Tintes con y sin amoniaco",
      "Tintes permanentes y semipermanentes",
      "Baños de color para realzar el brillo",
      "Color tradicional y atrevido",
    ],
    image: "/images/redhead.jpg",
    icon: Palette,
  },
  {
    id: "mechas",
    title: "Mechas",
    short:
      "Somos especialistas en mechas en Les Corts y realizamos las principales técnicas.",
    long:
      "¿Quieres crear una nueva imagen de ti? Prueba con unas mechas en tu pelo. En Chaure Estilistes somos especialistas en mechas en Les Corts, y realizamos las principales técnicas: mechas artesanas, mechas con gorro, Balayage y decoloración total o parcial. Las mechas dan color a tu cabello sin teñirlo por completo, iluminan tu pelo, le dan volumen y suavizan las facciones de tu cara. ¡Te sorprenderá lo que unas mechas pueden cambiar tu imagen!",
    highlights: [
      "Mechas artesanas",
      "Mechas con gorro",
      "Balayage",
      "Decoloración total o parcial",
    ],
    image: "/images/foil.jpg",
    icon: Sparkles,
  },
  {
    id: "tratamiento",
    title: "Tratamiento del cabello",
    short:
      "Soluciones integrales para tu cabello con los tratamientos más avanzados.",
    long:
      "Muchas veces nos preguntamos qué tratamiento para el pelo es el ideal para recuperar su mejor aspecto. En Chaure Estilistes te ofrecemos soluciones integrales para tu cabello, los tratamientos más avanzados para que tu cabello luzca perfecto: tratamientos de keratina, tratamientos de alisado con ácido hialurónico, tratamientos de hidratación y tratamientos reestructurantes. ¡Consúltanos tu caso y encontraremos el tratamiento adecuado!",
    highlights: [
      "Tratamientos de keratina",
      "Alisado con ácido hialurónico",
      "Tratamientos de hidratación",
      "Tratamientos reestructurantes",
    ],
    image: "/images/long-hair.jpg",
    icon: Droplets,
  },
  {
    id: "estetica",
    title: "Servicios de estética",
    short:
      "Maquillaje, manicura básica y depilación facial con productos de la mejor calidad.",
    long:
      "En Chaure Estilistes te ofrecemos algunos tratamientos de estética. Maquillaje: nuestros profesionales te asesorarán en todo momento. Trabajamos con productos de la mejor calidad para que luzcas radiante. Manicura básica: cuida tus manos con nuestro servicio de manicura básica y haz que tus uñas destaquen. Depilación facial para vernos sin vello en el rostro. ¡Consúltanos sobre nuestros tratamientos de estética en Les Corts!",
    highlights: [
      "Maquillaje profesional",
      "Manicura básica",
      "Depilación facial",
      "Productos de la mejor calidad",
    ],
    image: "/images/young-woman.jpg",
    icon: Brush,
  },
];

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            Nuestros servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            ¿Qué <span className="text-gradient-lilac">ofrecemos</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground"
          >
            Desde los cortes más modernos a los tratamientos más avanzados, todo
            con marcas profesionales.
          </motion.p>
        </div>

        {/* Cards grid - bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => {
            const isLarge = i === 0 || i === 3; // make first and 4th larger
            return (
              <motion.button
                key={service.id}
                layoutId={`service-${service.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setSelected(service)}
                className={`group relative overflow-hidden rounded-3xl text-left shadow-lg hover:shadow-2xl transition-shadow ${
                  isLarge
                    ? "lg:col-span-3 lg:row-span-2 min-h-[420px] lg:min-h-[520px]"
                    : "lg:col-span-3 min-h-[280px]"
                }`}
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.20_0.05_295_/_0.95)] via-[oklch(0.22_0.05_295_/_0.6)] to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20 text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-2">
                    {service.short}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                    <span className="border-b border-white/40 pb-0.5">
                      Saber más
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`service-${selected.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative w-full max-w-3xl overflow-hidden rounded-3xl bg-background shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-background transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <selected.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
                      {selected.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {selected.long}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {selected.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 rounded-xl bg-secondary/60 p-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelected(null);
                        setTimeout(() => {
                          const el = document.getElementById("contacto");
                          if (el) {
                            const top =
                              el.getBoundingClientRect().top +
                              window.scrollY -
                              80;
                            window.scrollTo({ top, behavior: "smooth" });
                          }
                        }, 200);
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                    >
                      <Scissors className="h-4 w-4" />
                      Pedir cita
                    </a>
                    <a
                      href="tel:+34934090383"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                    >
                      Llamar ahora
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
