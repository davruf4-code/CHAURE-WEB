"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-[oklch(0.45_0.20_295)] via-[oklch(0.65_0.18_305)] to-[oklch(0.78_0.13_310)]"
    />
  );
}
