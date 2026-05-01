"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Studio() {
  return (
    <section id="studio" className="relative py-24 md:py-44 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="aurora absolute -bottom-40 right-1/4 w-[40vw] h-[40vw] rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-rose text-xl">✦</span>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-ivoire-dim">
              Le studio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.92] text-ivoire"
          >
            Mascouche.
            <br />
            <span className="italic font-serif text-rose">À domicile.</span>
            <br />
            Toujours intime.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 font-serif text-lg md:text-xl leading-relaxed text-ivoire/85 max-w-2xl"
          >
            Le studio est un cocon — bougies, velours, lumière dorée. À domicile,
            j'apporte la même atmosphère pour que vous soyez chez vous, dans
            votre histoire.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          <Stat label="Studio" value="Mascouche" sub="QC, Canada" />
          <Stat label="Disponible" value="À domicile" sub="Grand Montréal" />
          <Stat label="Sessions" value="2026" sub="Prises en cours" />
          <Stat label="Réponse" value="< 24h" sub="Toujours" />
        </motion.div>
      </div>

      {/* CTA */}
      <div id="contact" className="max-w-[1400px] mx-auto mt-20 md:mt-44">
        <div className="hairline mb-12 md:mb-20" />
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <p className="font-serif italic text-rose-soft text-base md:text-lg mb-4 md:mb-6">
              ⟢ Prête à devenir votre propre œuvre ?
            </p>
            <h3 className="font-display text-[clamp(2.25rem,7vw,6rem)] leading-[0.92] text-ivoire">
              Écrivons ensemble
              <br />
              le <span className="italic font-serif text-rose">prochain</span> chapitre.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-3 md:gap-4 w-full"
          >
            <Magnetic strength={0.25}>
              <a
                href="mailto:bonjour@rachelstudio.ca"
                data-cursor="écrire"
                className="group flex items-center justify-between gap-4 bg-rose text-noir px-5 md:px-8 py-4 md:py-5 hover:bg-rose-soft transition-colors duration-500"
              >
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] truncate">
                  bonjour@rachelstudio.ca
                </span>
                <span className="text-xl md:text-2xl">→</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="https://instagram.com"
                data-cursor="suivre"
                className="group flex items-center justify-between gap-4 border border-ivoire/20 px-5 md:px-8 py-4 md:py-5 hover:border-rose transition-colors duration-500"
              >
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-ivoire">
                  @rachel.studio
                </span>
                <span className="font-serif italic text-rose-soft text-sm md:text-base">
                  instagram
                </span>
              </a>
            </Magnetic>

            <a
              href="tel:+15145550101"
              data-cursor="appeler"
              className="text-center font-serif italic text-ivoire-dim hover:text-rose-soft transition-colors text-base md:text-lg"
            >
              ou par téléphone — 514 · 555 · 0101
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border-l border-rose/30 pl-4 md:pl-5">
      <span className="block font-sans text-[9px] md:text-[10px] uppercase tracking-[0.28em] md:tracking-[0.32em] text-ivoire-dim">
        {label}
      </span>
      <span className="block font-display text-2xl md:text-4xl text-ivoire mt-1 md:mt-2">
        {value}
      </span>
      <span className="block font-serif italic text-rose-soft text-xs md:text-sm mt-0.5 md:mt-1">
        {sub}
      </span>
    </div>
  );
}
