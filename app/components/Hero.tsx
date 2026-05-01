"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

const word = "RACHEL";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const letterVariants: Variants = {
  hidden: { y: "110%", opacity: 0, rotate: 6 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: EASE },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center bg-noir pb-24 md:pb-0"
    >
      {/* Aurora blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="aurora absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full opacity-80 pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="aurora absolute -bottom-32 -right-32 w-[45vw] h-[45vw] rounded-full opacity-60 pointer-events-none"
      />

      {/* Vertical hairline */}
      <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ivoire/15 to-transparent" />
      <div className="hidden md:block absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ivoire/15 to-transparent" />

      {/* Top hairline marker */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
        className="absolute top-28 left-12 right-12 h-px bg-ivoire/15 origin-left hidden md:block"
      />

      {/* Side meta */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-ivoire-dim">
          Studio · Mascouche · QC
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-ivoire-dim">
          Édition № 01 · 2026
        </span>
      </motion.div>

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 px-5 sm:px-8 md:px-20 lg:px-24 pt-24 md:pt-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="font-serif italic text-rose-soft text-sm sm:text-base md:text-lg tracking-[0.18em] sm:tracking-[0.2em] mb-4 md:mb-6"
        >
          ⟢ artiste · maquilleuse · photographe ⟢
        </motion.p>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          aria-label={word}
          className="font-display leading-[0.85] tracking-[-0.02em] text-[clamp(4rem,19vw,18rem)] flex flex-wrap"
        >
          {word.split("").map((c, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
              <motion.span
                variants={letterVariants}
                className={`inline-block ${
                  i === 1 ? "italic font-serif text-rose" : "text-ivoire"
                }`}
              >
                {c}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-2 flex items-baseline gap-3 sm:gap-6"
        >
          <span className="font-serif italic text-xl sm:text-2xl md:text-4xl text-ivoire-dim whitespace-nowrap">
            studio beauté
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-rose/60 via-rose/20 to-transparent" />
          <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.32em] sm:tracking-[0.4em] text-ivoire-dim whitespace-nowrap">
            est. mascouche
          </span>
        </motion.div>

        <motion.div
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-8 md:mt-12 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
        >
          <p className="md:col-span-6 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-ivoire/85 max-w-xl">
            Une signature où le noir devient lumière, le maquillage devient
            rituel, et chaque portrait raconte une vérité{" "}
            <em className="text-rose-soft italic">à fleur de peau</em>.
          </p>

          <div className="md:col-span-3 md:col-start-9 flex flex-col gap-3 md:gap-4">
            <Magnetic>
              <a
                href="#signature"
                data-cursor="découvrir"
                className="group flex items-center justify-between gap-4 border border-ivoire/20 px-5 md:px-6 py-3.5 md:py-4 text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-ivoire hover:border-rose transition-colors duration-500"
              >
                <span>Découvrir la signature</span>
                <span className="h-px w-8 bg-rose group-hover:w-12 transition-all duration-500" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                data-cursor="réserver"
                className="flex items-center justify-between gap-4 bg-rose text-noir px-5 md:px-6 py-3.5 md:py-4 text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] hover:bg-rose-soft transition-colors duration-500"
              >
                <span>Prendre rendez-vous</span>
                <span>→</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-ivoire/10 bg-noir/40 backdrop-blur-sm overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-3 md:py-5">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <div key={repeat} className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12">
              {[
                "Maquillage",
                "Coiffure",
                "Photo",
                "Vidéo",
                "Boudoir",
                "Corpo",
                "Auto-maquillage conscient",
                "À domicile",
              ].map((s, i) => (
                <span key={`${repeat}-${i}`} className="flex items-center gap-8 md:gap-12">
                  <span className="font-display text-2xl md:text-5xl text-ivoire/90">
                    {s}
                  </span>
                  <span className="text-rose text-xl md:text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-ivoire-dim">
          défiler
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-rose to-transparent"
        />
      </motion.div>
    </section>
  );
}
