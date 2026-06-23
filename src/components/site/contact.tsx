"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Instagram,
  Facebook,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Carrer de Fígols, 47",
    sub: "Les Corts, 08028 Barcelona",
    href: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Figols+47+Les+Corts+Barcelona",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "934 090 383",
    sub: "Llámanos para cualquier consulta",
    href: "tel:+34934090383",
  },
  {
    icon: Mail,
    label: "Email",
    value: "chaurestilistes@gmail.com",
    sub: "Escríbenos con tus dudas",
    href: "mailto:chaurestilistes@gmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun a Sáb",
    sub: "Consulta nuestro horario",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            Ponte en contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            ¿Alguna duda con tus <span className="text-gradient-lilac">servicios</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground"
          >
            Estaremos encantados de atenderte. Visítanos en nuestro salón de
            Les Corts o contáctanos por teléfono o email.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact info cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {CONTACT_INFO.map((info, i) => {
              const Wrapper = info.href ? "a" : "div";
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <Wrapper
                    {...(info.href
                      ? {
                          href: info.href,
                          target: info.href.startsWith("http")
                            ? "_blank"
                            : undefined,
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="block h-full rounded-3xl glass p-5 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="mt-1 font-semibold text-foreground leading-tight">
                      {info.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {info.sub}
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:col-span-2 rounded-3xl glass p-5 shadow-md flex items-center justify-between gap-4"
            >
              <div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Síguenos
                </div>
                <div className="mt-1 font-semibold text-foreground">
                  @chaurestilistes
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map - "Donde nos encontramos" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl glass p-6 sm:p-8 shadow-xl h-full flex flex-col">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
                    Donde nos <span className="text-gradient-lilac">encontramos</span>
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Carrer de Fígols, 47 · Les Corts, 08028 Barcelona
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Figols+47+Les+Corts+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Cómo llegar
                </a>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl shadow-md min-h-[420px] ring-1 ring-border">
                <iframe
                  title="Mapa de Chaure Estilistes en Les Corts, Barcelona"
                  src="https://maps.google.com/maps?q=Carrer%20de%20F%C3%ADgols%2C%2047%2C%2008028%20Barcelona%2C%20Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>
                    A 2 min del metro Les Corts (L3)
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Figols+47+Les+Corts+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-5 py-2.5 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors sm:hidden"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Cómo llegar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
