"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="section-pad relative py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-bg-soft px-6 py-16 md:px-14 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(45,212,191,0.12), transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="display text-[clamp(2.4rem,7vw,5rem)] text-text"
          >
            Let&apos;s build something
            <br />
            worth shipping
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 max-w-lg text-base text-muted"
          >
            Open to senior frontend roles, product collaborations, and select
            freelance builds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="eyebrow">{site.phone}</p>
      </footer>
    </section>
  );
}
