"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { triggerGiantMeteor } from "@/components/GiantMeteor";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const dimTimer = useRef<number | null>(null);
  const meteorTimer = useRef<number | null>(null);
  const restoreTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (dimTimer.current) {
      window.clearTimeout(dimTimer.current);
      dimTimer.current = null;
    }
    if (meteorTimer.current) {
      window.clearTimeout(meteorTimer.current);
      meteorTimer.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimers();
      if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
      const root = document.documentElement;
      root.removeAttribute("data-hire-hover");
      root.removeAttribute("data-hire-dim");
      root.removeAttribute("data-meteor-jerk");
      root.classList.remove("hire-restoring");
    };
  }, []);

  const startHireFocus = () => {
    const root = document.documentElement;
    if (restoreTimer.current) {
      window.clearTimeout(restoreTimer.current);
      restoreTimer.current = null;
    }
    root.classList.remove("hire-restoring");
    root.setAttribute("data-hire-hover", "true");
    root.removeAttribute("data-hire-dim");

    clearTimers();

    dimTimer.current = window.setTimeout(() => {
      root.setAttribute("data-hire-dim", "true");

      // 1s after low opacity → giant meteor
      meteorTimer.current = window.setTimeout(() => {
        triggerGiantMeteor();
      }, 1000);
    }, 3000);
  };

  const endHireFocus = () => {
    const root = document.documentElement;
    clearTimers();

    root.classList.add("hire-restoring");
    root.removeAttribute("data-hire-hover");
    root.removeAttribute("data-hire-dim");
    root.removeAttribute("data-meteor-jerk");

    restoreTimer.current = window.setTimeout(() => {
      root.classList.remove("hire-restoring");
      restoreTimer.current = null;
    }, 1400);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-pad fixed inset-x-0 top-0 z-40 flex items-center justify-between py-5 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,11,12,0.85), rgba(10,11,12,0.35), transparent)",
      }}
    >
      <a
        href="#top"
        className="hire-scene display nav-link-neon text-lg tracking-tight text-text"
      >
        {site.name.split(" ")[0]}
        <span className="text-accent">.</span>
      </a>

      <nav className="hire-scene hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="eyebrow nav-link-neon"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={`mailto:${site.email}`}
        className="hire-me-btn eyebrow nav-cta-neon rounded-full border border-line-strong px-4 py-2"
        onMouseEnter={startHireFocus}
        onMouseLeave={endHireFocus}
        onFocus={startHireFocus}
        onBlur={endHireFocus}
      >
        Hire me
      </a>
    </motion.header>
  );
}
