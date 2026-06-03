export function createProgressBar() {
  const bar = document.createElement("div");
  bar.id = "progress-bar";
  document.body.prepend(bar);
}

export function initProgressBar() {
  const bar = document.getElementById("progress-bar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    bar.style.width = `${progress}%`;
  });
}
