import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stats from "../data/stats.json";

gsap.registerPlugin(ScrollTrigger);

export function createOverview() {
  const section = document.createElement("section");
  section.id = "overview";
  section.className = "section overview-section";

  section.innerHTML = `
    <div class="section-inner">

      <!-- Header -->
      <div class="overview-header">
        <p class="section-eyebrow">The Property</p>
        <h2 class="section-title overview-title">
          By The <em>Numbers</em>
        </h2>
        <p class="overview-intro">
          American Dream is not a mall. It is a 3.3 million square foot 
          mixed-use destination — the most ambitious retail and entertainment 
          complex ever built in North America, located 10 minutes from 
          the most valuable consumer market on earth.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="overview-grid">
        ${stats.stats
          .map(
            (stat, i) => `
          <div class="stat-card" data-index="${i}">
            <div class="stat-value">
              <span class="stat-number" data-value="${stat.value}" data-suffix="${stat.suffix}">
                0${stat.suffix}
              </span>
            </div>
            <p class="stat-label">${stat.label}</p>
            <p class="stat-description">${stat.description}</p>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Location Context -->
      <div class="overview-location">
        <div class="overview-location-line"></div>
        <div class="overview-location-content">
          <p class="overview-location-title">The Most Valuable Address in American Retail</p>
          <p class="overview-location-text">
            Situated at the crossroads of the Northeast corridor, American Dream 
            draws visitors from New York, New Jersey, Connecticut and Pennsylvania. 
            Within a 25-mile radius lives a population of 20 million people with 
            a median household income of $89,000 — the single most concentrated 
            pocket of consumer spending power in the United States.
          </p>
        </div>
      </div>

    </div>
  `;

  return section;
}

export function initOverviewAnimations() {
  // Animate header on scroll
  gsap.from(".overview-title", {
    scrollTrigger: {
      trigger: ".overview-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".overview-intro", {
    scrollTrigger: {
      trigger: ".overview-section",
      start: "top 75%",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  // Animate stat cards
  gsap.from(".stat-card", {
    scrollTrigger: {
      trigger: ".overview-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });

  // Count up numbers
  document.querySelectorAll(".stat-number").forEach((el) => {
    const target = parseFloat(el.dataset.value);
    const suffix = el.dataset.suffix;
    const isFloat = target % 1 !== 0;

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              el.textContent = isFloat
                ? this.targets()[0].val.toFixed(1) + suffix
                : Math.round(this.targets()[0].val) + suffix;
            },
          },
        );
      },
      once: true,
    });
  });

  // Animate location block
  gsap.from(".overview-location", {
    scrollTrigger: {
      trigger: ".overview-location",
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });
}
