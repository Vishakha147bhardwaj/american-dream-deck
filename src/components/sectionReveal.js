export function initSectionReveal() {
  const inners = document.querySelectorAll(".section-inner");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  inners.forEach((el) => observer.observe(el));
}
