"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-ivoire/10 px-4 sm:px-6 md:px-12 pt-16 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-[1400px] mx-auto"
      >
        <h4 className="font-display text-[clamp(3.5rem,18vw,16rem)] leading-[0.85] text-ivoire/90 break-all">
          Rach<span className="italic font-serif text-rose">e</span>l
        </h4>

        <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-8 md:gap-10 items-end">
          <p className="font-serif italic text-ivoire-dim text-lg max-w-sm">
            Studio Beauté · une maison d'art où le maquillage devient signature.
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ivoire-dim">
              Maison-mère
            </span>
            <span className="font-serif text-ivoire text-lg">Mascouche, QC</span>
            <span className="font-serif italic text-rose-soft text-sm">
              Service à domicile · grand Montréal
            </span>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ivoire-dim">
              Suivre
            </span>
            <a className="font-serif text-ivoire text-lg hover:text-rose transition-colors" href="https://instagram.com" data-cursor="instagram">
              instagram
            </a>
            <a className="font-serif text-ivoire text-lg hover:text-rose transition-colors" href="https://tiktok.com" data-cursor="tiktok">
              tiktok
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between gap-3 md:gap-4 pt-6 border-t border-ivoire/10 text-[9px] md:text-[10px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-ivoire-dim">
          <span>© 2026 Rachel Studio Beauté</span>
          <span className="font-serif italic normal-case tracking-normal text-rose-soft text-sm md:text-base">
            ⟢ fait avec intention ⟢
          </span>
          <span>tous droits réservés</span>
        </div>
      </motion.div>
    </footer>
  );
}
