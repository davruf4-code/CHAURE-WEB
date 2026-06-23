"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, BadgeCheck, Smile } from "lucide-react";

const STATS = [
  {
    icon: Award,
    value: 9,
    suffix: "+",
    label: "Años de experiencia",
    description: "Cuidando el cabello de nuestros clientes en Les Corts",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Clientes atendidos",
    description: "Personas que han confiado en nuestro equipo profesional",
  },
  {
    icon: BadgeCheck,
    value: 5,
    suffix: "",
    label: "Servicios principales",
    description: "Corte, color, mechas, tratamientos y estética",
  },
  {
    icon: Smile,
    value: 100,
    suffix: "%",
    label: "Peluqueros certificados",
    description: "Equipo profesional con formación continua",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    Math.round(v).toLocaleString("es-ES")
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            ¿Por qué escogernos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Qué nos <span className="text-gradient-lilac">caracteriza</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground"
          >
            Nuestra pasión por el cabello y la atención al detalle nos
            convierten en tu peluquería de confianza en Barcelona.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <stat.icon className="h-5 w-5" />
              </div>

              <div className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-foreground">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="mt-2 text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
