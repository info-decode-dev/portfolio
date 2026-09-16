"use client";

import { BlackHoleParticles } from "@/components/BlackHoleParticles";

/** Full black-hole atmosphere — bleeds below the hero into the next section. */
export function BlackHoleField() {
  return (
    <div className="blackhole-field" aria-hidden>
      <div className="blackhole-field-bg" />
      <div className="blackhole-glow" />
      <div className="blackhole-vignette" />
      <BlackHoleParticles />
    </div>
  );
}
