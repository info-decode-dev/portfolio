"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

type Meteor = {
  id: number;
  startY: number;
  angle: number;
  duration: number;
  trail: number;
  head: number;
  glow: number;
  travelX: number;
  travelY: number;
  opacity: number;
};

let meteorId = 0;

function createMeteor(distance: number): Meteor {
  const sizeRoll = Math.random();
  const scale =
    sizeRoll < 0.45
      ? 0.45 + Math.random() * 0.25
      : sizeRoll < 0.8
        ? 0.75 + Math.random() * 0.35
        : 1.15 + Math.random() * 0.45;

  const angle = 22 + Math.random() * 18;
  const rad = (angle * Math.PI) / 180;
  const path = distance * (0.85 + Math.random() * 0.35);

  return {
    id: ++meteorId,
    startY: 2 + Math.random() * 55,
    angle,
    duration: 0.75 + Math.random() * 0.45,
    trail: (90 + Math.random() * 80) * scale,
    head: (3.5 + Math.random() * 2) * scale,
    glow: (10 + Math.random() * 10) * scale,
    travelX: Math.cos(rad) * path,
    travelY: Math.sin(rad) * path,
    opacity: 0.55 + Math.random() * 0.45,
  };
}

export function useMeteorPass() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const coolUntil = useRef(0);
  const timers = useRef<number[]>([]);

  const trigger = useCallback(() => {
    const now = Date.now();
    if (now < coolUntil.current) return;

    const count = 4 + Math.floor(Math.random() * 3); // 4–6
    const gap = 2000; // 2s between each meteor
    const distance =
      typeof window !== "undefined"
        ? Math.hypot(window.innerWidth, window.innerHeight) * 1.2
        : 1600;

    coolUntil.current = now + count * gap + 1200;

    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];

    for (let i = 0; i < count; i += 1) {
      const spawnTimer = window.setTimeout(() => {
        const meteor = createMeteor(distance);
        setMeteors((current) => [...current, meteor]);

        const removeTimer = window.setTimeout(() => {
          setMeteors((current) => current.filter((m) => m.id !== meteor.id));
        }, meteor.duration * 1000 + 80);

        timers.current.push(removeTimer);
      }, i * gap);

      timers.current.push(spawnTimer);
    }
  }, []);

  return { meteors, trigger };
}

export function MeteorLayer({ meteors }: { meteors: Meteor[] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[45] overflow-hidden"
    >
      <AnimatePresence>
        {meteors.map((meteor) => (
          <motion.div
            key={meteor.id}
            className="absolute will-change-transform"
            style={{
              top: `${meteor.startY}vh`,
              left: 0,
              width: meteor.trail,
              height: Math.max(14, meteor.head * 3),
              marginLeft: -meteor.trail,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: meteor.travelX,
              y: meteor.travelY,
              opacity: meteor.opacity,
            }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: meteor.duration, ease: "linear" },
              y: { duration: meteor.duration, ease: "linear" },
              opacity: { duration: 0.1 },
            }}
          >
            <div
              className="relative h-full w-full"
              style={{
                transform: `rotate(${meteor.angle}deg)`,
                transformOrigin: "left center",
              }}
            >
              <span
                className="absolute inset-y-0 left-0 my-auto block w-full rounded-full"
                style={{
                  height: Math.max(4, meteor.head * 1.1),
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(232,144,58,0.12) 35%, rgba(255,248,230,0.4) 75%, rgba(255,255,255,0.65) 100%)",
                  filter: `blur(${Math.max(3, meteor.head * 0.9)}px)`,
                  opacity: meteor.opacity,
                }}
              />
              <span
                className="absolute inset-y-0 left-0 my-auto block w-full rounded-full"
                style={{
                  height: Math.max(1.5, meteor.head * 0.35),
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(232,144,58,0.2) 30%, rgba(255,250,240,0.75) 70%, #ffffff 100%)",
                }}
              />
              <span
                className="absolute right-0 top-1/2 block -translate-y-1/2 rounded-full"
                style={{
                  width: meteor.head,
                  height: meteor.head,
                  background:
                    "radial-gradient(circle, #ffffff 0%, #fff8ec 40%, #e8903a 75%, transparent 100%)",
                  boxShadow: `0 0 ${meteor.glow * 0.45}px ${meteor.head * 0.4}px rgba(255,255,255,0.95), 0 0 ${meteor.glow}px ${meteor.head * 0.7}px rgba(232,144,58,0.5)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
