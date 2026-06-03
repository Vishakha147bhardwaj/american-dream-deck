import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const diningConcepts = [
  { name: "Don Angie", category: "Italian Fine Dining", tag: "Signature" },
  { name: "Nobu", category: "Japanese", tag: "Flagship" },
  { name: "Sugar Factory", category: "American Brasserie", tag: "Iconic" },
  { name: "Carpentier", category: "French Bistro", tag: "New" },
  { name: "Seasoned Vegan", category: "Plant Based", tag: "Exclusive" },
  { name: "Guy Fieri's", category: "American", tag: "Celebrity" },
];

const diningStats = [
  { value: "100+", label: "Dining Venues" },
  { value: "4.5h", label: "Avg Dwell Time" },
  { value: "3x", label: "Industry Avg Spend" },
  { value: "40%", label: "Visitors Dine Per Trip" },
];

export function createDining() {
  const section = document.createElement("section");
  section.id = "dining";
  section.className = "section dining-section";

  section.innerHTML = `

    <!-- Left Panel: Image -->
    <div class="dining-image-panel">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
        alt="Fine dining experience"
        class="dining-image"
        loading="lazy"
      />
      <div class="dining-image-overlay"></div>
      <div class="dining-image-stats">
        ${diningStats
          .map(
            (s) => `
          <div class="dining-image-stat">
            <span class="dining-image-stat-value">${s.value}</span>
            <span class="dining-image-stat-label">${s.label}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>

    <!-- Right Panel: Content -->
    <div class="dining-content-panel">
      <div class="dining-content">
        <p class="section-eyebrow">Dining & Lifestyle</p>
        <h2 class="section-title dining-title">
          Food As An<br/><em>Experience</em>
        </h2>

        <p class="dining-body">
          At American Dream, dining is not an afterthought — 
          it is a destination in itself. Over 100 restaurants, 
          cafes, and food concepts across every category, 
          from celebrity chef flagships to fast-casual 
          innovators that can't be found anywhere else.
        </p>

        <p class="dining-body">
          Visitors don't just eat here. They stay. 
          The average dwell time of 4.5 hours is driven 
          largely by the dining experience — making F&B 
          a critical engine of foot traffic for every 
          retailer in the property.
        </p>

        <!-- Concepts -->
        <div class="dining-concepts">
          <p class="dining-concepts-label">Select Concepts</p>
          <div class="dining-concepts-list">
            ${diningConcepts
              .map(
                (c) => `
              <div class="dining-concept-item">
                <div class="dining-concept-left">
                  <span class="dining-concept-name">${c.name}</span>
                  <span class="dining-concept-category">${c.category}</span>
                </div>
                <span class="dining-concept-tag">${c.tag}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

      </div>
    </div>
  `;

  return section;
}

export function initDiningAnimations() {
  gsap.from(".dining-image-panel", {
    scrollTrigger: { trigger: ".dining-section", start: "top 80%" },
    opacity: 0,
    x: -50,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from(".dining-content-panel", {
    scrollTrigger: { trigger: ".dining-section", start: "top 80%" },
    opacity: 0,
    x: 50,
    duration: 0.9,
    ease: "power2.out",
    delay: 0.15,
  });

  gsap.from(".dining-concept-item", {
    scrollTrigger: {
      trigger: ".dining-concepts",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    y: 12,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out",
  });

  gsap.from(".dining-image-stat", {
    scrollTrigger: { trigger: ".dining-image-stats", start: "top 85%" },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  });
}
