import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const luxuryBrands = [
  "Louis Vuitton",
  "Hermès",
  "Gucci",
  "Prada",
  "Dior",
  "Chanel",
  "Burberry",
  "Valentino",
  "Saint Laurent",
  "Bottega Veneta",
  "Fendi",
  "Loewe",
];

export function createLuxury() {
  const section = document.createElement("section");
  section.id = "luxury";
  section.className = "section luxury-section";

  section.innerHTML = `

    <!-- Full bleed background image -->
    <div class="luxury-bg">
      <img
        src="/src/assets/images/luxury.jpg"
        alt="Luxury retail environment"
        class="luxury-bg-img"
        loading="lazy"
      />
      <div class="luxury-bg-overlay"></div>
    </div>

    <!-- Content -->
    <div class="section-inner luxury-inner">

      <div class="luxury-content">
        <p class="section-eyebrow">Luxury Wing</p>
        <h2 class="section-title luxury-title">
          Where Luxury<br/>Finds Its <em>Home</em>
        </h2>

        <p class="luxury-body">
          The Luxury Wing at American Dream is a destination within 
          a destination — an elevated environment purpose-built for 
          the world's most prestigious brands. Marble floors, 
          double-height ceilings, and a clientele that matches 
          the ambition of the address.
        </p>

        <p class="luxury-body">
          Located steps from the world's largest consumer market, 
          this is the flagship opportunity that luxury brands 
          have been waiting for.
        </p>
      </div>

      <!-- Brand Marquee -->
      <div class="luxury-brands">
        <p class="luxury-brands-label">Select House Partners</p>
        <div class="luxury-brands-marquee">
          <div class="luxury-brands-track">
            ${[...luxuryBrands, ...luxuryBrands]
              .map(
                (brand) => `
              <span class="luxury-brand-name">${brand}</span>
              <span class="luxury-brand-dot">◆</span>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div class="luxury-stats">
        <div class="luxury-stat">
          <span class="luxury-stat-value">2X</span>
          <span class="luxury-stat-label">Industry avg spend per visit</span>
        </div>
        <div class="luxury-stat">
          <span class="luxury-stat-value">Top 5%</span>
          <span class="luxury-stat-label">Household income in catchment</span>
        </div>
        <div class="luxury-stat">
          <span class="luxury-stat-value">Zero</span>
          <span class="luxury-stat-label">Comparable luxury destinations nearby</span>
        </div>
      </div>

    </div>
  `;

  return section;
}

export function initLuxuryAnimations() {
  gsap.from(".luxury-title", {
    scrollTrigger: { trigger: ".luxury-section", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from(".luxury-body", {
    scrollTrigger: { trigger: ".luxury-section", start: "top 75%" },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.2,
  });

  gsap.from(".luxury-stat", {
    scrollTrigger: { trigger: ".luxury-stats", start: "top 85%" },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  });
}
