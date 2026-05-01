"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 50, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 50, mass: 0.4 });

  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor]") as HTMLElement | null;
      if (interactive) {
        setHover(true);
        const lbl = interactive.getAttribute("data-cursor");
        setLabel(lbl);
      } else {
        setHover(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, visible]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
        style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-rose"
          style={{
            width: hover ? 6 : 5,
            height: hover ? 6 : 5,
            boxShadow: "0 0 16px rgba(226,65,138,0.9)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[199] hidden md:block"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/60 backdrop-blur-[1px] flex items-center justify-center"
          animate={{
            width: label ? 110 : hover ? 56 : 36,
            height: label ? 110 : hover ? 56 : 36,
            borderColor: hover ? "rgba(226,65,138,0.9)" : "rgba(226,65,138,0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-[11px] uppercase tracking-[0.2em] text-rose-soft"
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
