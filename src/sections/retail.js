import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tenants = [
  { name: "Zara", category: "Fashion" },
  { name: "H&M", category: "Fashion" },
  { name: "Uniqlo", category: "Fashion" },
  { name: "Apple", category: "Technology" },
  { name: "Nike", category: "Sport" },
  { name: "Adidas", category: "Sport" },
  { name: "Sephora", category: "Beauty" },
  { name: "Zara Home", category: "Lifestyle" },
  { name: "Primark", category: "Fashion" },
  { name: "Lululemon", category: "Sport" },
  { name: "Aritzia", category: "Fashion" },
  { name: "Coach", category: "Luxury" },
];

export function createRetail() {
  const section = document.createElement("section");
  section.id = "retail";
  section.className = "section retail-section";

  section.innerHTML = `
    <div class="section-inner">

      <!-- Header -->
      <div class="retail-header">
        <p class="section-eyebrow">Retail</p>
        <h2 class="section-title retail-title">
          A New Standard<br/>For <em>Retail</em>
        </h2>
      </div>

      <!-- Main Layout -->
      <div class="retail-layout">

        <!-- Left: Image + Stats -->
        <div class="retail-left">
          <div class="retail-image-wrapper">
            <img
             src="/images/Retail.jpg"
              alt="American Dream Retail"
              class="retail-image"
              loading="lazy"
            />
            <div class="retail-image-overlay">
              <p class="retail-image-label">450+ Brands & Retailers</p>
            </div>
          </div>

          <!-- Mini Stats -->
          <div class="retail-mini-stats">
            <div class="retail-mini-stat">
              <span class="retail-mini-value">#1</span>
              <span class="retail-mini-label">Mall in New Jersey</span>
            </div>
            <div class="retail-mini-stat">
              <span class="retail-mini-value">40M+</span>
              <span class="retail-mini-label">Annual Footfall</span>
            </div>
            <div class="retail-mini-stat">
              <span class="retail-mini-value">$89K</span>
              <span class="retail-mini-label">Median HH Income</span>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="retail-right">
          <p class="retail-body">
            American Dream offers an unmatched retail environment — 
            a carefully curated mix of global flagships, emerging concepts, 
            and category leaders, all drawing from the most affluent and 
            densely populated consumer market in North America.
          </p>

          <p class="retail-body">
            With over 450 retailers across fashion, technology, sport, 
            beauty and lifestyle, the property delivers the critical mass 
            that drives discovery, dwell time, and repeat visits.
          </p>

          <!-- Tenant Grid -->
          <div class="retail-tenants">
            <p class="retail-tenants-label">Select Tenants</p>
            <div class="retail-tenants-grid">
              ${tenants
                .map(
                  (t) => `
                <div class="retail-tenant-tag">
                  <span class="retail-tenant-name">${t.name}</span>
                  <span class="retail-tenant-category">${t.category}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <!-- CTA -->
          <button class="retail-cta lease-cta">
            Explore Leasing Opportunities
            <span>→</span>
          </button>
        </div>

      </div>

    </div>
  `;

  return section;
}

export function initRetailAnimations() {
  gsap.from(".retail-title", {
    scrollTrigger: { trigger: ".retail-section", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".retail-left", {
    scrollTrigger: { trigger: ".retail-layout", start: "top 80%" },
    opacity: 0,
    x: -40,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from(".retail-right", {
    scrollTrigger: { trigger: ".retail-layout", start: "top 80%" },
    opacity: 0,
    x: 40,
    duration: 0.9,
    ease: "power2.out",
    delay: 0.15,
  });

  gsap.from(".retail-tenant-tag", {
    scrollTrigger: { trigger: ".retail-tenants", start: "top 85%" },
    opacity: 0,
    y: 20,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out",
  });
}
export function initRetailInteractions() {
  const leaseBtn = document.querySelector(".lease-cta");

  leaseBtn?.addEventListener("click", () => {
    document.querySelector('[data-mode="lease"]')?.click();

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
