"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEnhanced(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={enhanced && !reducedMotion ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  const reducedMotion = useReducedMotion();
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEnhanced(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={enhanced && !reducedMotion ? { opacity: 0, y: 18 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.36), ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const subtleHover = {
  whileHover: { y: -5, scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};
