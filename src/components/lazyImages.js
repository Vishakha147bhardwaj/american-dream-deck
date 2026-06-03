export function initLazyImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.addEventListener("load", () => img.classList.add("loaded"));
          if (img.complete) img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1 },
  );

  images.forEach((img) => observer.observe(img));
}
