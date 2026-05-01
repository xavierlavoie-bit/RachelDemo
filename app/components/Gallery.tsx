"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photos } from "../lib/photos";

type Frame = {
  src: string;
  caption: string;
  meta: string;
  span: string;
  ratio: string;
  parallax: number;
};

const frames: Frame[] = [
  { src: photos.g1, caption: "Velours", meta: "Boudoir · 02", span: "md:col-span-5 md:row-span-2", ratio: "aspect-[3/4]", parallax: -30 },
  { src: photos.g2, caption: "Première ombre", meta: "Maquillage · 01", span: "md:col-span-4", ratio: "aspect-[4/3]", parallax: 20 },
  { src: photos.g3, caption: "Lumière cathédrale", meta: "Portrait · 03", span: "md:col-span-3 md:row-span-2", ratio: "aspect-[3/5]", parallax: -40 },
  { src: photos.g6, caption: "Rituel rose", meta: "Atelier · 04", span: "md:col-span-4", ratio: "aspect-[4/3]", parallax: 35 },
  { src: photos.g5, caption: "Silhouette", meta: "Corpo · 05", span: "md:col-span-5", ratio: "aspect-[5/3]", parallax: -20 },
  { src: photos.g8, caption: "Outils", meta: "Coulisses · 06", span: "md:col-span-3", ratio: "aspect-[3/4]", parallax: 15 },
  { src: photos.g7, caption: "Regard sang", meta: "Édito · 07", span: "md:col-span-4", ratio: "aspect-[4/5]", parallax: -25 },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="text-rose text-xl">✦</span>
              <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
                Carnet visuel
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,9vw,7rem)] leading-[0.92] text-ivoire">
              Le portfolio,
              <br />
              <span className="italic font-serif text-rose">comme un poème.</span>
            </h2>
          </div>
          <p className="font-serif italic text-base md:text-lg text-ivoire-dim max-w-sm md:text-right">
            Sept fragments d'un travail en cours.
            <br />
            <span className="text-[10px] md:text-[11px] not-italic uppercase tracking-[0.4em] text-rose-soft">
              Édition № 01 — 2026
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          {frames.map((f, i) => (
            <Tile key={i} frame={f} index={i} progress={scrollYProgress} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-ivoire/10"
        >
          <p className="font-serif italic text-ivoire-dim text-base md:text-lg text-center sm:text-left">
            Plus de 40 séances — boudoir, corpo, éditorial.
          </p>
          <a
            href="#contact"
            data-cursor="voir tout"
            className="group inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.32em] text-ivoire hover:text-rose transition-colors"
          >
            Demander le portfolio complet
            <span className="h-px w-12 bg-rose group-hover:w-20 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Tile({
  frame,
  index,
  progress,
}: {
  frame: Frame;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [0, frame.parallax]);

  return (
    <motion.figure
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="voir"
      className={`group relative overflow-hidden ${frame.span} ${frame.ratio} bg-noir-soft border border-ivoire/5`}
    >
      <Image
        src={frame.src}
        alt={frame.caption}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/85 via-noir/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
      <div className="absolute inset-0 mix-blend-multiply bg-rose/0 group-hover:bg-rose/10 transition-all duration-700" />

      <figcaption className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
        <div className="flex items-center justify-between">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.32em] text-ivoire/70">
            {frame.meta}
          </span>
          <motion.span
            className="text-rose text-sm"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
          >
            ✦
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <span className="block font-display text-2xl md:text-4xl text-ivoire transition-transform duration-700 group-hover:translate-y-0 translate-y-2">
            {frame.caption}
          </span>
          <div className="h-px w-0 bg-rose mt-2 transition-all duration-700 group-hover:w-full" />
        </div>
      </figcaption>
    </motion.figure>
  );
}
