"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { MobilePreview } from "@/components/MobilePreview";
import { WebPreview } from "@/components/WebPreview";

const ease = [0.22, 1, 0.36, 1] as const;

type Project = (typeof site.projects)[number];
type PreviewMode = "mobile" | "web";

export function Work() {
  const [preview, setPreview] = useState<{
    title: string;
    src: string;
    mode: PreviewMode;
  } | null>(null);

  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section id="work" className="section-pad relative py-24 md:py-32">
      <div className="mb-14 flex flex-col gap-6 md:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="min-w-0 shrink lg:max-w-[58%]">
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] text-text">
            Projects that
            <br />
            ship product
          </h2>
        </div>
        <p className="max-w-sm shrink-0 text-sm leading-relaxed text-muted md:text-base lg:pb-1">
          From fashion portfolios to cybersecurity-adjacent product UI — focused
          on clarity, speed, and craft.
        </p>
      </div>

      <ul className="border-t border-line">
        {site.projects.map((project, index) => {
          const previewMode =
            "preview" in project &&
            "previewSrc" in project &&
            project.previewSrc
              ? (project.preview as PreviewMode)
              : null;

          const rowClass =
            "group grid w-full gap-4 py-8 text-left md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:py-10";

          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.65, ease, delay: index * 0.06 }}
              className="border-b border-line"
            >
              {previewMode ? (
                <button
                  type="button"
                  className={rowClass}
                  onClick={() => {
                    if (!("previewSrc" in project) || !project.previewSrc) return;
                    setPreview({
                      title: project.title,
                      src: project.previewSrc,
                      mode: previewMode,
                    });
                  }}
                >
                  <ProjectRow
                    project={project}
                    index={index}
                    actionLabel={
                      previewMode === "mobile"
                        ? "Preview mobile →"
                        : "Preview web →"
                    }
                  />
                </button>
              ) : project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <ProjectRow
                    project={project}
                    index={index}
                    actionLabel="Open live →"
                  />
                </a>
              ) : (
                <div className={rowClass}>
                  <ProjectRow
                    project={project}
                    index={index}
                    actionLabel={project.client}
                  />
                </div>
              )}
            </motion.li>
          );
        })}
      </ul>

      <MobilePreview
        open={preview?.mode === "mobile"}
        title={preview?.title ?? ""}
        src={preview?.mode === "mobile" ? preview.src : ""}
        onClose={closePreview}
      />
      <WebPreview
        open={preview?.mode === "web"}
        title={preview?.title ?? ""}
        src={preview?.mode === "web" ? preview.src : ""}
        onClose={closePreview}
      />
    </section>
  );
}

function ProjectRow({
  project,
  index,
  actionLabel,
}: {
  project: Project;
  index: number;
  actionLabel: string;
}) {
  return (
    <>
      <span className="eyebrow text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="display text-2xl text-text transition-colors group-hover:text-accent md:text-4xl">
            {project.title}
          </h3>
          <span className="text-xs tracking-wide text-muted">
            {project.status}
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.stack.map((item) => (
            <span key={item} className="text-xs text-muted/80">
              {item}
            </span>
          ))}
        </div>
      </div>

      <span className="hidden text-sm text-muted transition-all group-hover:translate-x-1 group-hover:text-accent md:inline">
        {actionLabel}
      </span>
    </>
  );
}
