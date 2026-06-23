"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Cortes modernos a tradicionales según tu estilo",
  "Tintes con y sin amoniaco, permanentes y semipermanentes",
  "Mechas artesanas, con gorro, Balayage y decoloraciones",
  "Tratamientos de keratina, alisado e hidratación",
  "Marcas profesionales: Montibello y Nashi Argan",
  "Asesoramiento con criterio y buen gusto",
];

export function About() {
  return (
    <section id="quienes-somos" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <motion.img
                    src="/images/drying.jpg"
                    alt="Estilista secando el cabello"
                    className="aspect-[3/4] w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <motion.img
                    src="/images/foil.jpg"
                    alt="Estilista aplicando mechas con papel de aluminio"
                    className="aspect-square w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <motion.img
                    src="/images/long-hair.jpg"
                    alt="Mujer tocando su cabello largo y brillante"
                    className="aspect-square w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <motion.img
                    src="/images/young-woman.jpg"
                    alt="Mujer joven con cabello hermoso en la peluquería"
                    className="aspect-[3/4] w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 rounded-2xl glass px-5 py-4 shadow-2xl"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Experiencia
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold text-gradient-lilac">
                +9 años
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                sirviendo a Les Corts
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
            >
              Quiénes somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Renovamos tu look con{" "}
              <span className="text-gradient-lilac">criterio y buen gusto</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                En <strong className="text-foreground">Chaure Estilistes</strong>{" "}
                encontrarás una gran variedad de servicios para renovar tu look.
                Te ofrecemos los mejores tratamientos y realizamos desde los
                cortes más modernos a los más tradicionales, según los gustos y
                el estilo de cada cliente.
              </p>
              <p>
                Cortes, tintes, baños de color, reflejos, mechas artesanas,
                mechas con gorro, decoloraciones, Balayage, moldeados,
                recogidos, peinados de novia, tratamientos de keratina,
                tratamientos de alisado con ácido hialurónico, tratamientos de
                hidratación, tratamientos reestructurantes, maquillaje,
                manicura básica y depilación facial.
              </p>
              <p>
                Trabajamos con marcas como{" "}
                <strong className="text-foreground">Montibello</strong> y{" "}
                <strong className="text-foreground">Nashi Argan</strong>.
                Te asesoramos con criterio y buen gusto, para que consigas la
                imagen que estás buscando. ¡Te esperamos!
              </p>
            </motion.div>

            {/* Feature list */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="mt-8 grid sm:grid-cols-2 gap-3"
            >
              {FEATURES.map((f) => (
                <motion.li
                  key={f}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-2.5 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
