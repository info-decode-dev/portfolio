type LenisLike = {
  stop: () => void;
  start: () => void;
};

let lenis: LenisLike | null = null;
let locks = 0;

export function registerLenis(instance: LenisLike | null) {
  lenis = instance;
}

export function lockPageScroll() {
  locks += 1;
  if (locks !== 1) return;

  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  lenis?.stop();
}

export function unlockPageScroll() {
  locks = Math.max(0, locks - 1);
  if (locks !== 0) return;

  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  lenis?.start();
}
