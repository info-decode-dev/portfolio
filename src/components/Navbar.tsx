"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
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
      <a href="#top" className="display text-lg tracking-tight text-text">
        {site.name.split(" ")[0]}
        <span className="text-accent">.</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="eyebrow transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={`mailto:${site.email}`}
        className="eyebrow rounded-full border border-line-strong px-4 py-2 transition-colors hover:border-accent hover:text-accent"
      >
        Hire me
      </a>
    </motion.header>
  );
}
