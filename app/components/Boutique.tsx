"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { photos } from "../lib/photos";

type Product = {
  num: string;
  name: string;
  italic: string;
  duration: string;
  price: string;
  unit?: string;
  badge?: string;
  body: string;
  includes: string[];
  image: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    num: "01",
    name: "Le rituel privé",
    italic: "auto-maquillage conscient",
    duration: "3h · privé",
    price: "245",
    badge: "Signature",
    body: "Un cours intime à mon studio ou chez vous. On apprend votre visage, vos angles, votre lumière. Vous repartez avec un rituel à vous, sans dépendance, sans recette.",
    includes: ["Analyse morpho-couleur", "Routine signature", "Kit de départ", "Suivi 30 jours"],
    image: photos.bRitual,
    featured: true,
  },
  {
    num: "02",
    name: "L'expérience boudoir",
    italic: "photoshoot signature",
    duration: "4h · studio",
    price: "590",
    body: "Maquillage, coiffure, direction artistique, séance photo intime. Une expérience de soi à offrir ou s'offrir, dans un cocon de velours.",
    includes: ["Maquillage & coiffure", "Direction artistique", "20 photos retouchées", "Galerie privée"],
    image: photos.bBoudoir,
  },
  {
    num: "03",
    name: "Portrait corpo",
    italic: "image de marque",
    duration: "2h · studio ou domicile",
    price: "320",
    body: "Pour les artistes, entrepreneures, créatrices. Une image qui vous ressemble — affirmée, contemporaine, jamais clichée.",
    includes: ["Maquillage léger", "12 photos retouchées", "3 ambiances", "Livraison 7 jours"],
    image: photos.bCorpo,
  },
  {
    num: "04",
    name: "L'atelier collectif",
    italic: "auto-maquillage en groupe",
    duration: "2h30 · max 6 personnes",
    price: "95",
    unit: " /personne",
    badge: "Nouveau",
    body: "Un cercle de femmes, des miroirs, du thé. On apprend ensemble, on rit, on se voit autrement. Idéal pour célébrer, lancer, ou simplement être.",
    includes: ["Tutoriel collectif", "Pochette souvenir", "Photo de groupe", "Code privilège futurs services"],
    image: photos.bAtelier,
  },
  {
    num: "05",
    name: "La routine signature",
    italic: "coaching trimestriel",
    duration: "Membre · 3 mois",
    price: "180",
    unit: " /mois",
    body: "Un suivi en continu — saisons, événements, transitions. Un appel mensuel, des recommandations sur mesure, des essais en studio.",
    includes: ["1 session privée par mois", "Routine évolutive", "Whatsapp prioritaire", "Tarif membre sur services"],
    image: photos.bSignature,
  },
];

export default function Boutique() {
  const [active, setActive] = useState(0);
  const current = products[active];

  return (
    <section
      id="boutique"
      className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12 bg-noir-soft overflow-hidden"
    >
      <div className="aurora absolute -top-40 -right-40 w-[55vw] h-[55vw] rounded-full opacity-25 pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-12 gap-6 items-end mb-12 md:mb-20"
        >
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="text-rose text-xl">✦</span>
              <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
                Boutique de coaching
              </span>
              <span className="hidden md:block flex-1 h-px bg-ivoire/15" />
              <span className="hidden md:inline font-serif italic text-ivoire-dim text-sm">
                cinq expériences à choisir
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,8vw,7rem)] leading-[0.92] text-ivoire">
              Choisissez votre
              <br />
              <span className="italic font-serif text-rose">métamorphose.</span>
            </h2>
          </div>
          <p className="md:col-span-4 font-serif italic text-base md:text-lg text-ivoire-dim">
            Chaque expérience est pensée comme un objet — fini, soigné, livré avec attention. Aucun forfait standard.
          </p>
        </motion.div>

        {/* Desktop: split view (gallery selector + detail) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Selector */}
          <div className="col-span-5 sticky top-32 self-start">
            <ul className="space-y-2">
              {products.map((p, i) => (
                <li key={p.num}>
                  <button
                    onClick={() => setActive(i)}
                    data-cursor="choisir"
                    className={`group w-full text-left flex items-center gap-5 px-5 py-5 border transition-all duration-500 ${
                      active === i
                        ? "border-rose/60 bg-rose/[0.04]"
                        : "border-ivoire/10 hover:border-ivoire/30"
                    }`}
                  >
                    <span
                      className={`font-serif italic text-lg transition-colors ${
                        active === i ? "text-rose" : "text-ivoire-dim"
                      }`}
                    >
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-display text-2xl xl:text-3xl transition-colors ${
                            active === i ? "text-ivoire" : "text-ivoire/70"
                          }`}
                        >
                          {p.name}
                        </span>
                        {p.badge && (
                          <span className="text-[9px] uppercase tracking-[0.28em] text-rose-soft border border-rose/40 px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <span className="block font-serif italic text-rose-soft/80 text-sm mt-0.5">
                        {p.italic}
                      </span>
                    </div>
                    <span
                      className={`font-display text-xl transition-colors ${
                        active === i ? "text-rose" : "text-ivoire-dim"
                      }`}
                    >
                      {p.price}$
                    </span>
                    <span
                      className={`h-px transition-all duration-500 ${
                        active === i ? "w-8 bg-rose" : "w-0 bg-rose"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Detail */}
          <motion.article
            key={current.num}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-7 border border-ivoire/10 bg-noir-deep/60 backdrop-blur-sm overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-deep via-noir-deep/40 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.32em] text-ivoire/80 bg-noir/70 backdrop-blur-sm px-3 py-1.5">
                  {current.duration}
                </span>
                {current.featured && (
                  <span className="text-[10px] uppercase tracking-[0.32em] text-noir bg-rose px-3 py-1.5">
                    ★ Coup de cœur
                  </span>
                )}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-4xl xl:text-6xl text-ivoire leading-[0.92]">
                  {current.name}
                </h3>
                <p className="font-serif italic text-rose-soft text-lg mt-1">
                  — {current.italic}
                </p>
              </div>
            </div>

            <div className="p-8 xl:p-10">
              <p className="font-serif text-lg leading-relaxed text-ivoire/85 max-w-xl">
                {current.body}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {current.includes.map((inc) => (
                  <div key={inc} className="flex items-start gap-3">
                    <span className="text-rose mt-1.5 text-[10px]">◆</span>
                    <span className="font-sans text-sm text-ivoire/85">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hairline my-8" />

              <div className="flex items-end justify-between">
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-[0.32em] text-ivoire-dim">
                    Investissement
                  </span>
                  <span className="font-display text-5xl text-ivoire">
                    {current.price}<span className="text-rose">$</span>
                    {current.unit && (
                      <span className="font-serif italic text-ivoire-dim text-base ml-2">
                        {current.unit}
                      </span>
                    )}
                  </span>
                  <span className="block font-serif italic text-ivoire-dim text-sm mt-1">
                    Taxes en sus · paiement en 2× possible
                  </span>
                </div>
                <a
                  href="#contact"
                  data-cursor="réserver"
                  className="inline-flex items-center gap-3 bg-rose text-noir px-6 py-4 font-sans text-[11px] uppercase tracking-[0.32em] hover:bg-rose-soft transition-colors duration-500"
                >
                  Réserver
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Mobile/tablet: stacked cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4 sm:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.num} product={p} index={i} />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-8 border-t border-ivoire/10"
        >
          {[
            { n: "+40", l: "Femmes accompagnées" },
            { n: "98%", l: "Repeat clients" },
            { n: "5★", l: "Avis Google" },
            { n: "2026", l: "Édition signature" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-rose">
                {s.n}
              </span>
              <span className="block mt-2 font-sans text-[10px] uppercase tracking-[0.32em] text-ivoire-dim">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.06 }}
      data-cursor="voir"
      className="group border border-ivoire/10 bg-noir-deep/60 backdrop-blur-sm overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/90 via-noir/40 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="text-[9px] uppercase tracking-[0.3em] text-ivoire/80 bg-noir/70 backdrop-blur-sm px-2.5 py-1">
            {product.duration}
          </span>
          {product.badge && (
            <span className="text-[9px] uppercase tracking-[0.3em] text-noir bg-rose px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="block font-serif italic text-rose-soft text-sm">
            № {product.num}
          </span>
          <h3 className="font-display text-2xl text-ivoire leading-[0.95] mt-0.5">
            {product.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="font-serif italic text-rose-soft text-sm mb-3">
          — {product.italic}
        </p>
        <p className="font-serif text-[15px] leading-relaxed text-ivoire/85">
          {product.body}
        </p>
        <ul className="mt-4 space-y-1.5">
          {product.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-2">
              <span className="text-rose mt-1 text-[8px]">◆</span>
              <span className="font-sans text-[12px] text-ivoire/85">
                {inc}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-5 border-t border-ivoire/10 flex items-end justify-between">
          <div>
            <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-ivoire-dim">
              dès
            </span>
            <span className="font-display text-3xl text-ivoire">
              {product.price}<span className="text-rose">$</span>
              {product.unit && (
                <span className="font-serif italic text-ivoire-dim text-xs ml-1">
                  {product.unit}
                </span>
              )}
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-rose text-noir px-4 py-2.5 font-sans text-[10px] uppercase tracking-[0.28em] hover:bg-rose-soft transition-colors"
          >
            Réserver →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
