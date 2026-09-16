"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { getSkillIcon } from "@/components/skillIcons";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const skillGroups = [
    { label: "Frontend", items: site.skills.frontend },
    { label: "Animations & Interactions", items: site.skills.animations },
    { label: "Performance", items: site.skills.performance },
    { label: "Design", items: site.skills.design },
    { label: "Backend", items: site.skills.backend },
  ];

  return (
    <section id="about" className="section-pad relative z-10 py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-4"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="display text-[clamp(2.2rem,5vw,3.8rem)] text-text"
          >
            Interfaces that make
            <br />
            complexity feel simple
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-12 border-t border-line pt-8"
          >
            {site.experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="display text-xl text-text md:text-2xl">
                    {job.title}
                  </h3>
                  <span className="eyebrow">{job.period}</span>
                </div>
                <p className="mt-1 text-accent">{job.company}</p>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>
                        <HighlightText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="lg:pt-16"
        >
          <p className="eyebrow mb-8">Capabilities</p>
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-sm text-text">{group.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const Icon = getSkillIcon(skill);
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="eyebrow mb-6">Education</p>
            <div className="space-y-6">
              {site.education.map((edu) => (
                <div key={edu.title}>
                  <h3 className="text-sm text-text">{edu.title}</h3>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  <p className="mt-1 text-xs text-muted/70">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

const GISEC_URL = "https://gisec.ae/";

function HighlightText({ text }: { text: string }) {
  const parts = text.split(/(GISEC Cyber Security Event)/g);

  return (
    <>
      {parts.map((part, index) =>
        part === "GISEC Cyber Security Event" ? (
          <a
            key={`${part}-${index}`}
            href={GISEC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent! underline! decoration-accent underline-offset-2 transition-opacity hover:opacity-80"
          >
            GISEC Cyber Security Event
          </a>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
