"use client";

import { motion } from "framer-motion";

/**
 * Decorative animated lilac background blobs.
 * Purely cosmetic — pointer-events disabled, behind all content.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.985_0.012_320)] via-[oklch(0.97_0.025_318)] to-[oklch(0.96_0.018_315)]" />

      {/* floating lilac orbs */}
      <div
        className="aurora-blob animate-float-slow"
        style={{
          top: "-10%",
          left: "-8%",
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle at center, oklch(0.78_0.13_310 / 0.9), oklch(0.85_0.08_320 / 0.0))",
        }}
      />
      <div
        className="aurora-blob animate-float-medium"
        style={{
          top: "30%",
          right: "-12%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle at center, oklch(0.70_0.15_305 / 0.85), oklch(0.85_0.08_320 / 0.0))",
        }}
      />
      <div
        className="aurora-blob animate-float-fast"
        style={{
          bottom: "-15%",
          left: "25%",
          width: "45vw",
          height: "45vw",
          background:
            "radial-gradient(circle at center, oklch(0.82_0.10_315 / 0.75), oklch(0.85_0.08_320 / 0.0))",
        }}
      />

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.45_0.20_295) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45_0.20_295) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* top sheen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.18_305_/_0.5)] to-transparent"
      />
    </div>
  );
}
