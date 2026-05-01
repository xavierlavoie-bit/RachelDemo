"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Manifeste", href: "#manifeste" },
  { label: "Services", href: "#services" },
  { label: "Carnet", href: "#gallery" },
  { label: "Signature", href: "#signature" },
  { label: "Boutique", href: "#boutique" },
  { label: "Studio", href: "#studio" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "bg-noir/70 backdrop-blur-xl border-b border-ivoire/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5">
          <a
            href="#top"
            data-cursor="accueil"
            className="font-display text-[18px] sm:text-[22px] tracking-[0.18em] text-ivoire"
          >
            R<span className="text-rose">·</span>STUDIO
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-sans text-[12px] uppercase tracking-[0.28em] text-ivoire-dim hover:text-ivoire transition-colors"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-cursor="réserver"
            className="hidden md:inline-flex items-center gap-3 rounded-full border border-rose/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-rose-soft hover:bg-rose hover:text-noir transition-all duration-500"
          >
            Réserver
            <span className="h-1 w-1 rounded-full bg-rose" />
          </a>

          <button
            onClick={() => setOpen(true)}
            data-cursor="menu"
            className="lg:hidden flex items-center gap-2 text-ivoire text-[10px] sm:text-[11px] uppercase tracking-[0.28em]"
          >
            <span className="flex flex-col gap-1">
              <span className="block w-5 h-px bg-ivoire" />
              <span className="block w-5 h-px bg-rose" />
            </span>
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-noir-deep lg:hidden flex flex-col items-center justify-center gap-6 sm:gap-7 px-6"
          >
            <div className="aurora absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full opacity-30 pointer-events-none" />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-ivoire text-[11px] uppercase tracking-[0.28em] hover:text-rose transition-colors"
            >
              Fermer ✕
            </button>
            <span className="absolute top-5 left-5 sm:top-6 sm:left-6 font-display text-[18px] tracking-[0.18em] text-ivoire">
              R<span className="text-rose">·</span>STUDIO
            </span>
            <div className="relative z-10 flex flex-col items-center gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="font-display text-4xl sm:text-5xl text-ivoire hover:text-rose transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 inline-flex items-center gap-3 bg-rose text-noir px-7 py-3.5 text-[11px] uppercase tracking-[0.32em]"
              >
                Réserver →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
