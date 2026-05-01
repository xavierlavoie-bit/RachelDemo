"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photos } from "../lib/photos";

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12 bg-noir-soft overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--ivoire) 1px, transparent 1px), linear-gradient(90deg, var(--ivoire) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16"
        >
          <span className="text-rose text-xl">✦</span>
          <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
            Signature de la maison
          </span>
          <div className="flex-1 h-px bg-ivoire/15" />
          <span className="hidden sm:inline font-serif italic text-ivoire-dim text-sm">
            Deux expériences singulières
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
          <SignatureCard
            num="i."
            kicker="Photoshoot"
            title="Boudoir"
            sub="& Corpo"
            tagline="L'intime devient icône."
            body="Une direction artistique sur-mesure. Lumière sculptée, silhouette honorée, regard apprivoisé. Que ce soit pour vous-même ou pour porter votre marque, chaque cliché est une page de votre récit."
            chips={["Direction artistique", "Maquillage inclus", "Galerie privée", "Studio · domicile"]}
            image={photos.signatureBoudoir}
          />
          <SignatureCard
            num="ii."
            kicker="Atelier"
            title="Auto-maquillage"
            sub="conscient"
            tagline="Apprendre à se voir avec douceur."
            body="Un cours intime où le geste devient méditation. On se regarde sans jugement, on apprend la main, on choisit ses ombres comme on choisit ses mots. Repartez avec votre rituel à vous."
            chips={["3 heures · privé", "Kit personnel", "Routine signature", "Suivi 30 jours"]}
            image={photos.signatureAtelier}
            mirror
          />
        </div>
      </div>
    </section>
  );
}

function SignatureCard({
  num,
  kicker,
  title,
  sub,
  tagline,
  body,
  chips,
  image,
  mirror,
}: {
  num: string;
  kicker: string;
  title: string;
  sub: string;
  tagline: string;
  body: string;
  chips: string[];
  image: string;
  mirror?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [mirror ? 4 : -4, mirror ? -2 : 2]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
      data-cursor="voir"
      className="group relative border border-ivoire/10 bg-noir-deep/60 backdrop-blur-sm p-6 sm:p-8 md:p-12 overflow-hidden hover:border-rose/40 transition-all duration-700"
    >
      {/* corner ornaments */}
      <Corners />

      <div className="absolute -right-8 -top-8 md:-right-10 md:-top-10 spin-slow opacity-40 group-hover:opacity-80 transition-opacity duration-700">
        <Seal />
      </div>

      <div className="flex items-center justify-between mb-6 md:mb-10">
        <span className="font-serif italic text-rose text-base md:text-lg">{num}</span>
        <span className="font-sans text-[10px] uppercase tracking-[0.32em] md:tracking-[0.4em] text-ivoire-dim">
          {kicker}
        </span>
      </div>

      <h3 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-ivoire">
        {title}
      </h3>
      <h3 className="font-serif italic text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-rose -mt-2 md:-mt-3">
        {sub}
      </h3>

      <motion.div
        style={{ y: imgY, rotate }}
        className="my-8 md:my-10 h-[280px] md:h-[380px] w-full overflow-hidden border border-ivoire/10 relative"
      >
        <Image
          src={image}
          alt={`${title} ${sub}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-noir-deep/60 via-transparent to-rose-deep/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/70 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 font-display text-5xl md:text-7xl text-ivoire/40 leading-none">
          {mirror ? "II" : "I"}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
          <span className="font-serif italic text-ivoire text-base md:text-lg drop-shadow-md">
            {tagline}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ivoire/70 whitespace-nowrap">
            № {mirror ? "02" : "01"}
          </span>
        </div>
      </motion.div>

      <p className="font-serif text-base md:text-lg leading-relaxed text-ivoire/85 max-w-md">
        {body}
      </p>

      <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="text-[10px] uppercase tracking-[0.28em] md:tracking-[0.3em] text-ivoire-dim border border-ivoire/15 px-3 py-1.5 rounded-full hover:border-rose hover:text-rose-soft transition-colors duration-500"
          >
            {c}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        data-cursor="réserver"
        className="mt-8 md:mt-10 inline-flex items-center gap-4 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-ivoire group-hover:text-rose transition-colors duration-500"
      >
        Réserver l'expérience
        <span className="h-px w-12 bg-rose group-hover:w-20 transition-all duration-500" />
      </a>
    </motion.article>
  );
}

function Corners() {
  return (
    <>
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-rose/60" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-rose/60" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-rose/60" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-rose/60" />
    </>
  );
}

function Seal() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      <defs>
        <path
          id="circlePath"
          d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
        />
      </defs>
      <text fill="currentColor" className="text-rose" style={{ fontSize: "10px", letterSpacing: "0.4em" }}>
        <textPath href="#circlePath">
          ✦ RACHEL · STUDIO · BEAUTÉ · MASCOUCHE · QC ✦ DEPUIS L'ART ·
        </textPath>
      </text>
      <circle cx="90" cy="90" r="3" fill="currentColor" className="text-rose" />
      <circle cx="90" cy="90" r="50" stroke="currentColor" className="text-rose/40" fill="none" strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
}
