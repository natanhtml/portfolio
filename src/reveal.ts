export function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>(".reveal");

  function tick(): void {
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add("in");
      }
    });
  }

  tick();
  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
  window.addEventListener("load", tick);
}
