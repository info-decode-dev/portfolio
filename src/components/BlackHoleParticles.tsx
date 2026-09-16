"use client";

/**
 * Particles on the OUTER rim of the black hole (left arc),
 * away from the blank core. All values are fixed strings.
 */
const PARTICLES = [
  { top: "97.9%", left: "39.8%", size: "2px", opacity: "0.7", twinkle: "2.4s", spin: "42s", delay: "0s", delay2: "0s", jx: "-2px", jy: "1px" },
  { top: "97.2%", left: "34.7%", size: "1.5px", opacity: "0.45", twinkle: "2.95s", spin: "55s", delay: "1.2s", delay2: "-3.6s", jx: "-1px", jy: "-2px" },
  { top: "94.2%", left: "29.4%", size: "2.5px", opacity: "0.8", twinkle: "2.4s", spin: "38s", delay: "0.4s", delay2: "-1.2s", jx: "2px", jy: "0px" },
  { top: "92.2%", left: "23.6%", size: "1.5px", opacity: "0.55", twinkle: "3.5s", spin: "61s", delay: "2s", delay2: "-6s", jx: "-3px", jy: "2px" },
  { top: "88.2%", left: "19.0%", size: "2px", opacity: "0.65", twinkle: "2.95s", spin: "44s", delay: "0.8s", delay2: "-2.4s", jx: "1px", jy: "-1px" },
  { top: "84.5%", left: "14.2%", size: "1.5px", opacity: "0.4", twinkle: "2.4s", spin: "57s", delay: "2.8s", delay2: "-8.4s", jx: "0px", jy: "3px" },
  { top: "79.4%", left: "10.9%", size: "3px", opacity: "0.75", twinkle: "3.5s", spin: "40s", delay: "1.1s", delay2: "-3.3s", jx: "-2px", jy: "-3px" },
  { top: "74.9%", left: "6.9%", size: "1.5px", opacity: "0.5", twinkle: "2.95s", spin: "52s", delay: "2.4s", delay2: "-7.2s", jx: "3px", jy: "1px" },
  { top: "69.2%", left: "4.8%", size: "2px", opacity: "0.7", twinkle: "2.4s", spin: "46s", delay: "0.5s", delay2: "-1.5s", jx: "-1px", jy: "2px" },
  { top: "63.6%", left: "2.4%", size: "2.5px", opacity: "0.6", twinkle: "3.5s", spin: "58s", delay: "1.7s", delay2: "-5.1s", jx: "2px", jy: "-2px" },
  { top: "57.6%", left: "1.8%", size: "1.5px", opacity: "0.45", twinkle: "2.95s", spin: "43s", delay: "3.1s", delay2: "-9.3s", jx: "-3px", jy: "0px" },
  { top: "51.7%", left: "0.2%", size: "2px", opacity: "0.8", twinkle: "2.4s", spin: "50s", delay: "0.2s", delay2: "-0.6s", jx: "1px", jy: "3px" },
  { top: "45.7%", left: "0.9%", size: "1.5px", opacity: "0.55", twinkle: "3.5s", spin: "56s", delay: "2.6s", delay2: "-7.8s", jx: "0px", jy: "-1px" },
  { top: "39.7%", left: "1.5%", size: "2.5px", opacity: "0.65", twinkle: "2.95s", spin: "39s", delay: "1.4s", delay2: "-4.2s", jx: "-2px", jy: "2px" },
  { top: "34.1%", left: "3.8%", size: "2px", opacity: "0.5", twinkle: "2.4s", spin: "48s", delay: "0.9s", delay2: "-2.7s", jx: "3px", jy: "-3px" },
  { top: "28.2%", left: "5.3%", size: "1.5px", opacity: "0.75", twinkle: "3.5s", spin: "54s", delay: "2.9s", delay2: "-8.7s", jx: "-1px", jy: "1px" },
  { top: "23.2%", left: "8.7%", size: "3px", opacity: "0.6", twinkle: "2.95s", spin: "41s", delay: "1.6s", delay2: "-4.8s", jx: "2px", jy: "0px" },
  { top: "18.0%", left: "11.9%", size: "1.5px", opacity: "0.45", twinkle: "2.4s", spin: "59s", delay: "0.6s", delay2: "-1.8s", jx: "-3px", jy: "3px" },
  { top: "14.3%", left: "16.7%", size: "2px", opacity: "0.7", twinkle: "3.5s", spin: "45s", delay: "3.4s", delay2: "-10.2s", jx: "1px", jy: "-2px" },
  { top: "9.9%", left: "20.8%", size: "2.5px", opacity: "0.55", twinkle: "2.95s", spin: "53s", delay: "1.9s", delay2: "-5.7s", jx: "0px", jy: "2px" },
  { top: "6.9%", left: "26.1%", size: "1.5px", opacity: "0.8", twinkle: "2.4s", spin: "37s", delay: "2.2s", delay2: "-6.6s", jx: "-2px", jy: "-1px" },
  { top: "4.1%", left: "31.5%", size: "2px", opacity: "0.5", twinkle: "3.5s", spin: "60s", delay: "0.3s", delay2: "-0.9s", jx: "3px", jy: "1px" },
  { top: "2.7%", left: "37.3%", size: "1.5px", opacity: "0.65", twinkle: "2.95s", spin: "47s", delay: "2.7s", delay2: "-8.1s", jx: "-1px", jy: "-3px" },
  { top: "1.4%", left: "39.7%", size: "2.5px", opacity: "0.7", twinkle: "2.4s", spin: "42s", delay: "1s", delay2: "-3s", jx: "2px", jy: "0px" },
] as const;

export function BlackHoleParticles() {
  return (
    <div className="blackhole-particles" aria-hidden>
      <div className="blackhole-ring">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="blackhole-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              ["--twinkle-dur" as string]: p.twinkle,
              ["--spin-dur" as string]: p.spin,
              ["--jitter-x" as string]: p.jx,
              ["--jitter-y" as string]: p.jy,
              animationDelay: `${p.delay}, ${p.delay2}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
