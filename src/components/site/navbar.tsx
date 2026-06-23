"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // detect current section
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      const y = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "py-2"
            : "py-4"
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500",
              scrolled
                ? "glass shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <button
              onClick={() => handleNav("inicio")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[oklch(0.55_0.18_305_/_0.4)] blur-md group-hover:bg-[oklch(0.55_0.18_305_/_0.7)] transition-all" />
                <img
                  src="/images/logo.png"
                  alt="Chaure Estilistes"
                  className="relative h-11 w-auto"
                />
              </div>
              <div className="hidden sm:block leading-tight text-left">
                <div className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-foreground">
                  Chaure Estilistes
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Les Corts · Barcelona
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    "nav-underline text-sm font-medium tracking-wide transition-colors",
                    active === link.id
                      ? "text-primary active"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+34934090383"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                <span className="pulse-ring rounded-full">934 090 383</span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex items-center justify-center rounded-full bg-secondary/80 p-2.5 text-secondary-foreground hover:bg-secondary transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-background p-6 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/images/logo.png"
                  alt="Chaure Estilistes"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-secondary p-2"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    onClick={() => handleNav(link.id)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-left font-[family-name:var(--font-display)] text-lg font-semibold transition-colors",
                      active === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-border space-y-3">
                <a
                  href="tel:+34934090383"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Llamar · 934 090 383
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("contacto");
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary"
                >
                  <Calendar className="h-4 w-4" />
                  Pedir cita
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
