"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

const SERVICE_LINKS = [
  "Corte y peinado",
  "Tintes y baños de color",
  "Mechas",
  "Tratamiento del cabello",
  "Servicios de estética",
];

export function Footer() {
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="Chaure Estilistes"
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu peluquería de confianza en Les Corts, Barcelona. Renovamos tu
              look con criterio y buen gusto.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-foreground">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleNav(l.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-foreground">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("servicios")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-foreground">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Figols+47+Les+Corts+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    Carrer de Fígols, 47
                    <br />
                    Les Corts, 08028 Barcelona
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34934090383"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  934 090 383
                </a>
              </li>
              <li>
                <a
                  href="mailto:chaurestilistes@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  chaurestilistes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Chaure Estilistes · Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso Legal
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Big watermark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="select-none pointer-events-none overflow-hidden text-center"
      >
        <div className="font-[family-name:var(--font-display)] text-[16vw] sm:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary/10 to-primary/0">
          Chaure
        </div>
      </motion.div>
    </footer>
  );
}
