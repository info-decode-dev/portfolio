"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { MobilePreview } from "@/components/MobilePreview";
import { WebPreview } from "@/components/WebPreview";
import { MeteorLayer, useMeteorPass } from "@/components/MeteorPass";
import { getSkillIcon } from "@/components/skillIcons";

const ease = [0.22, 1, 0.36, 1] as const;

type Project = (typeof site.projects)[number];
type PreviewMode = "mobile" | "web";

export function Work() {
  const [preview, setPreview] = useState<{
    title: string;
    src: string;
    mode: PreviewMode;
  } | null>(null);
  const { meteors, trigger } = useMeteorPass();

  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section id="work" className="section-pad relative z-10 bg-transparent py-24 md:py-32">
      <MeteorLayer meteors={meteors} />

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

          const actionLabel = previewMode
            ? previewMode === "mobile"
              ? "Preview mobile →"
              : "Preview web →"
            : project.href
              ? "Open live →"
              : project.client;

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
                    actionLabel={actionLabel}
                    onActionHover={trigger}
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
                    actionLabel={actionLabel}
                    onActionHover={trigger}
                  />
                </a>
              ) : (
                <div className={rowClass}>
                  <ProjectRow
                    project={project}
                    index={index}
                    actionLabel={actionLabel}
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
  onActionHover,
}: {
  project: Project;
  index: number;
  actionLabel: string;
  onActionHover?: () => void;
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
        <StackList stack={project.stack} />
      </div>

      {onActionHover ? (
        <span
          className="hidden rounded-full border border-transparent px-4 py-2 text-sm text-muted transition-all group-hover:border-line-strong group-hover:text-accent hover:border-accent hover:bg-accent-soft hover:text-accent md:inline-flex md:items-center"
          onMouseEnter={onActionHover}
        >
          {actionLabel}
        </span>
      ) : (
        <span className="hidden text-sm text-muted md:inline">{actionLabel}</span>
      )}
    </>
  );
}

function isStackGroup(
  item: string | { readonly label: string; readonly items: readonly string[] },
): item is { readonly label: string; readonly items: readonly string[] } {
  return typeof item === "object" && item !== null && "label" in item;
}

function StackList({ stack }: { stack: Project["stack"] }) {
  const grouped = stack.length > 0 && isStackGroup(stack[0]);

  if (grouped) {
    return (
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {stack.map((group) => {
          if (!isStackGroup(group)) return null;
          return (
            <div key={group.label}>
              <p className="text-xs tracking-wide text-text">{group.label}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((skill) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                    >
                      <Icon
                        className="h-3 w-3 shrink-0 text-muted"
                        aria-hidden
                      />
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {stack.map((item) => {
        if (isStackGroup(item)) return null;
        const Icon = getSkillIcon(item);
        return (
          <li
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
          >
            <Icon className="h-3 w-3 shrink-0 text-muted" aria-hidden />
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
