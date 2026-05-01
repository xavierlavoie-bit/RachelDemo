"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Service = {
  num: string;
  title: string;
  italic?: string;
  description: string;
  details: string[];
  hue: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Maquillage",
    italic: "rituel",
    description:
      "Chaque trait est pensé comme une intention. Du nude lumineux au smoky liturgique, chaque visage devient une œuvre.",
    details: ["Mariée · soirée", "Éditorial · scène", "Cours privés"],
    hue: "from-rose/40",
  },
  {
    num: "02",
    title: "Coiffure",
    italic: "sculpture",
    description:
      "Coiffures sculptées pour se sentir entière — du chignon classique au volume dramatique en passant par les ondes vintage.",
    details: ["Coiffure mariée", "Mises en plis", "Stylisme éditorial"],
    hue: "from-rose-deep/50",
  },
  {
    num: "03",
    title: "Photo",
    italic: "icône",
    description:
      "Lumière et ombre. Boudoir intimiste, portraits corpos qui imposent — toujours avec une direction artistique pensée.",
    details: ["Boudoir", "Portrait corpo", "Branding visuel"],
    hue: "from-rose/60",
  },
  {
    num: "04",
    title: "Vidéo",
    italic: "narration",
    description:
      "Capsules cinématiques pour artistes, marques et moments précieux — le mouvement comme prolongement du regard.",
    details: ["Reels signature", "Behind the scenes", "Stories de marque"],
    hue: "from-rose-deep/40",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="text-rose text-xl">✦</span>
              <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
                Services
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,8vw,7rem)] leading-[0.92] text-ivoire">
              Quatre <span className="italic font-serif text-rose">disciplines</span>,
              <br />
              une seule signature.
            </h2>
          </div>
          <p className="font-serif italic text-base md:text-lg text-ivoire-dim max-w-sm md:text-right">
            Pensées comme des chapitres d'un même récit.
          </p>
        </motion.div>

        <div className="border-t border-ivoire/10">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 22 });
  const sy = useSpring(my, { stiffness: 220, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay: index * 0.08 }}
      className="group relative grid grid-cols-[auto_1fr] md:grid-cols-12 gap-x-4 gap-y-4 md:gap-6 items-start py-8 md:py-14 border-b border-ivoire/10 overflow-hidden"
      data-cursor="explorer"
    >
      {/* hover sweep */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      >
        <div className={`w-full h-full rounded-full bg-gradient-radial ${service.hue} to-transparent blur-3xl`}
          style={{
            background: `radial-gradient(closest-side, rgba(226,65,138,0.35), transparent 70%)`,
          }}
        />
      </motion.div>

      {/* fill bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-rose origin-left opacity-0 group-hover:opacity-100"
      />

      <div className="md:col-span-1 font-serif italic text-rose text-base md:text-lg pt-2 md:pt-0">
        {service.num}
      </div>

      <div className="md:col-span-4 relative">
        <h3 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] text-ivoire transition-transform duration-700 group-hover:translate-x-3">
          {service.title}
        </h3>
        <span className="block font-serif italic text-rose-soft text-xl md:text-3xl mt-0.5 md:mt-1">
          — {service.italic}
        </span>
      </div>

      <p className="col-span-2 md:col-span-4 font-serif text-base md:text-lg leading-relaxed text-ivoire/85">
        {service.description}
      </p>

      <ul className="col-span-2 md:col-span-3 flex flex-wrap md:flex-col gap-x-4 gap-y-2">
        {service.details.map((d) => (
          <li
            key={d}
            className="font-sans text-[10px] md:text-[12px] uppercase tracking-[0.24em] md:tracking-[0.28em] text-ivoire-dim flex items-center gap-2 md:gap-3"
          >
            <span className="h-px w-3 md:w-4 bg-rose/50" />
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
