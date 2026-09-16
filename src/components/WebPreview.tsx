"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lockPageScroll, unlockPageScroll } from "@/lib/scrollLock";

type WebPreviewProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  src: string;
};

function toEmbedSrc(src: string) {
  if (src.includes("figma.com")) {
    const url = new URL(src);
    url.searchParams.set("embedding", "true");
    url.searchParams.set("embed_host", "share");
    url.searchParams.set("scaling", "scale-down-width");
    url.searchParams.set("hide-ui", "1");
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url.toString())}`;
  }
  return src;
}

export function WebPreview({ open, onClose, title, src }: WebPreviewProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    lockPageScroll();
    window.addEventListener("keydown", onKey);

    return () => {
      unlockPageScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const embedSrc = src ? toEmbedSrc(src) : "";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} web preview`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-[min(88svh,900px)] w-full max-w-6xl flex-col"
          >
            <div className="mb-4 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="eyebrow mb-1">Web preview</p>
                <h3 className="display text-xl text-text">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-line-strong px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Close
              </button>
            </div>

            <div
              className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-line-strong bg-[#1a1d21]"
              style={{
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="min-w-0 flex-1 truncate rounded-full border border-line bg-bg-soft px-4 py-1.5 text-xs text-muted">
                  {title}
                </div>
              </div>

              <iframe
                title={`${title} web demo`}
                src={embedSrc}
                className="block min-h-0 w-full flex-1 border-0 bg-white"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen"
              />
            </div>

            <p className="mt-3 text-center text-xs text-muted">
              Desktop web view
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
