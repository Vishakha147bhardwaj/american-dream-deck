import { gsap } from "gsap";

export function createIntro() {
  const section = document.createElement("section");
  section.id = "intro";
  section.className = "section intro-section";
  section.innerHTML = `

    <!-- Video Background -->
    <div class="intro-video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/QeEvuzoVaPY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=QeEvuzoVaPY&modestbranding=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        class="intro-video"
      ></iframe>
    </div>

    <!-- Dark Overlay -->
    <div class="intro-overlay"></div>

    <!-- Content -->
    <div class="intro-content">

      <p class="intro-eyebrow">
        <span class="intro-line"></span>
        East Rutherford, New Jersey
      </p>

      <h1 class="intro-title">
        <span class="intro-title-line">American</span>
        <span class="intro-title-line">Dream</span>
      </h1>

      <p class="intro-subtitle">
        The World's Most Exciting Destination
      </p>

      <button class="intro-cta" onclick="document.getElementById('overview').scrollIntoView({behavior:'smooth'})">
        Explore the Property
        <span class="intro-cta-arrow">↓</span>
      </button>

    </div>

    <!-- Scroll Indicator -->
    <div class="intro-scroll-indicator">
      <div class="intro-scroll-line"></div>
      <span class="intro-scroll-text">Scroll</span>
    </div>

  `;
  return section;
}

export function initIntroAnimations() {
  const tl = gsap.timeline({ delay: 0.5 });

  tl.from(".intro-eyebrow", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
  })
    .from(
      ".intro-title-line",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".intro-subtitle",
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5",
    )
    .from(
      ".intro-cta",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".intro-scroll-indicator",
      {
        opacity: 0,
        duration: 0.6,
      },
      "-=0.2",
    );
}
