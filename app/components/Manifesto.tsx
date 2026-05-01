"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photos } from "../lib/photos";

const lines = [
  "Le maquillage n'est pas un masque —",
  "c'est une révélation.",
  "Je crois aux femmes qui osent",
  "le rouge sang, le velours noir,",
  "les yeux comme des cathédrales.",
];

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section
      id="manifeste"
      ref={ref}
      className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="aurora absolute top-1/2 -translate-y-1/2 left-1/3 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 md:gap-6 mb-10 md:mb-16"
        >
          <span className="text-rose text-xl md:text-2xl">✦</span>
          <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
            Manifeste № 01
          </span>
          <div className="flex-1 h-px bg-ivoire/15" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-ivoire/10 mx-auto max-w-sm lg:max-w-none">
              <motion.div style={{ y: portraitY, scale: portraitScale }} className="absolute inset-0">
                <Image
                  src={photos.portraitRachel}
                  alt="Portrait — Rachel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/60 via-transparent to-noir/30" />
              <div className="absolute inset-0 bg-rose/10 mix-blend-overlay" />
              {/* corner accents */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-rose" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-rose" />
            </div>
            <div className="mt-5 flex items-baseline gap-3 justify-center lg:justify-start">
              <span className="font-display text-2xl text-rose">R.</span>
              <span className="font-serif italic text-ivoire-dim text-base">
                fondatrice · artiste · maquilleuse
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-8 space-y-1 md:space-y-3">
            {lines.map((line, idx) => {
              const start = 0.1 + idx * 0.07;
              const end = start + 0.16;
              return (
                <Line
                  key={idx}
                  text={line}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  accent={idx === 1 || idx === 4}
                />
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 md:mt-14 flex items-center gap-4 md:gap-6"
            >
              <div className="h-px w-12 md:w-16 bg-rose" />
              <span className="font-serif italic text-ivoire-dim text-base md:text-lg">
                — Rachel, depuis Mascouche
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  text,
  progress,
  start,
  end,
  accent,
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  accent?: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className={`font-display leading-[1.05] tracking-tight text-[clamp(1.75rem,5.2vw,4.75rem)] ${
        accent ? "italic font-serif text-rose" : "text-ivoire"
      }`}
    >
      {text}
    </motion.p>
  );
}
