"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lockPageScroll, unlockPageScroll } from "@/lib/scrollLock";

const FRAME_WIDTH = 402;
const FRAME_HEIGHT = 874;
const BEZEL = 12;
const SHELL_WIDTH = FRAME_WIDTH + BEZEL * 2;
const SHELL_HEIGHT = FRAME_HEIGHT + BEZEL * 2;

type MobilePreviewProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  src: string;
};

export function MobilePreview({ open, onClose, title, src }: MobilePreviewProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const updateScale = () => {
      const availableWidth = window.innerWidth - 48;
      const availableHeight = window.innerHeight - 160;
      const next = Math.min(
        1,
        availableWidth / SHELL_WIDTH,
        availableHeight / SHELL_HEIGHT,
      );
      setScale(next);
    };

    lockPageScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      unlockPageScroll();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", updateScale);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
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
            aria-label={`${title} mobile preview`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-5"
          >
            <div
              className="flex items-center justify-between gap-4 px-1"
              style={{ width: SHELL_WIDTH * scale }}
            >
              <div>
                <p className="eyebrow mb-1">Mobile preview</p>
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
              className="relative"
              style={{
                width: SHELL_WIDTH * scale,
                height: SHELL_HEIGHT * scale,
              }}
            >
              <div
                className="absolute left-0 top-0 origin-top-left"
                style={{
                  width: SHELL_WIDTH,
                  height: SHELL_HEIGHT,
                  transform: `scale(${scale})`,
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[2.35rem] border border-line-strong bg-[#1a1d21]"
                  style={{
                    width: SHELL_WIDTH,
                    height: SHELL_HEIGHT,
                    padding: BEZEL,
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="absolute left-1/2 top-[18px] z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
                  <iframe
                    title={`${title} mobile demo`}
                    src={src}
                    width={FRAME_WIDTH}
                    height={FRAME_HEIGHT}
                    className="block rounded-[1.85rem] border-0 bg-white"
                    style={{
                      width: FRAME_WIDTH,
                      height: FRAME_HEIGHT,
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="fullscreen"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted">
              402 × 874 — mobile viewport
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
