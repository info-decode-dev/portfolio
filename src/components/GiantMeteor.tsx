"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EVENT = "hire-giant-meteor";
const ANGLE = 30;

export function triggerGiantMeteor() {
  window.dispatchEvent(new Event(EVENT));
}

type Flight = {
  token: number;
  travelX: number;
  travelY: number;
  trail: number;
  head: number;
  duration: number;
};

export function GiantMeteor() {
  const [flight, setFlight] = useState<Flight | null>(null);

  useEffect(() => {
    const onTrigger = () => {
      const rad = (ANGLE * Math.PI) / 180;
      const distance = Math.hypot(window.innerWidth, window.innerHeight) * 1.35;
      const duration = 1.65;

      document.documentElement.setAttribute("data-meteor-jerk", "true");

      setFlight({
        token: Date.now(),
        travelX: Math.cos(rad) * distance,
        travelY: Math.sin(rad) * distance,
        trail: Math.min(560, window.innerWidth * 0.42),
        head: 28,
        duration,
      });
    };

    window.addEventListener(EVENT, onTrigger);
    return () => {
      window.removeEventListener(EVENT, onTrigger);
      document.documentElement.removeAttribute("data-meteor-jerk");
    };
  }, []);

  const clearFlight = () => {
    document.documentElement.removeAttribute("data-meteor-jerk");
    setFlight(null);
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] overflow-hidden"
    >
      <AnimatePresence>
        {flight ? (
          <motion.div
            key={flight.token}
            className="absolute will-change-transform"
            style={{
              top: "4vh",
              left: 0,
              width: flight.trail,
              height: 64,
              marginLeft: -flight.trail,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: flight.travelX,
              y: flight.travelY,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: flight.duration, ease: "linear" },
              y: { duration: flight.duration, ease: "linear" },
              opacity: { duration: 0.15 },
            }}
            onAnimationComplete={clearFlight}
          >
            <div
              className="relative h-full w-full"
              style={{
                transform: `rotate(${ANGLE}deg)`,
                transformOrigin: "left center",
              }}
            >
              <span
                className="absolute inset-y-0 left-0 my-auto block w-full rounded-full"
                style={{
                  height: 36,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(232,144,58,0.15) 25%, rgba(255,248,230,0.45) 70%, rgba(255,255,255,0.75) 100%)",
                  filter: "blur(18px)",
                }}
              />
              <span
                className="absolute inset-y-0 left-0 my-auto block w-full rounded-full"
                style={{
                  height: 10,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(232,144,58,0.25) 20%, rgba(255,250,240,0.8) 65%, #ffffff 100%)",
                  filter: "blur(2px)",
                }}
              />
              <span
                className="absolute inset-y-0 left-0 my-auto block w-full rounded-full"
                style={{
                  height: 3,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 40%, #ffffff 100%)",
                }}
              />
              <span
                className="absolute right-0 top-1/2 block -translate-y-1/2 rounded-full"
                style={{
                  width: flight.head,
                  height: flight.head,
                  background:
                    "radial-gradient(circle, #ffffff 0%, #fff8ec 30%, #e8903a 65%, transparent 100%)",
                  boxShadow:
                    "0 0 24px 10px rgba(255,255,255,0.95), 0 0 60px 22px rgba(232,144,58,0.65), 0 0 120px 40px rgba(232,144,58,0.3)",
                }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
