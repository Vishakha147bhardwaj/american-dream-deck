import { gsap } from "gsap";

export function createLoader() {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = `
    <div class="loader-content">
      <p class="loader-eyebrow">Welcome To</p>
      <h1 class="loader-title">American<br/>Dream</h1>
      <div class="loader-bar-wrapper">
        <div class="loader-bar"></div>
      </div>
    </div>
  `;
  document.body.prepend(loader);
}

export function initLoader() {
  return new Promise((resolve) => {
    const tl = gsap.timeline();

    tl.from(".loader-eyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        ".loader-title",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .to(
        ".loader-bar",
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.2",
      )
      .to(
        "#loader",
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            document.getElementById("loader").style.display = "none";
            resolve();
          },
        },
        "+=0.2",
      );
  });
}
