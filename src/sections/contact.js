import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createContact() {
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "section contact-section";

  section.innerHTML = `

    <!-- Background -->
    <div class="contact-bg">
      <img
        src="/images/contact.jpg"
        alt="American Dream"
        class="contact-bg-img"
        loading="lazy"
      />
      <div class="contact-bg-overlay"></div>
    </div>

    <div class="section-inner contact-inner">

      <!-- Header -->
      <div class="contact-header">
        <p class="section-eyebrow">Let's Talk</p>
        <h2 class="section-title contact-title">
          Be Part Of<br/>Something <em>Bigger</em>
        </h2>
        <p class="contact-subtitle">
          Whether you're looking to lease space, activate a partnership, 
          or book a world-class venue — the conversation starts here.
        </p>
      </div>

      <!-- Three Path Cards -->
      <div class="contact-paths">

        <div class="contact-path-card" data-path="lease">
          <div class="contact-path-icon">🏪</div>
          <h3 class="contact-path-title">Lease Space</h3>
          <p class="contact-path-desc">
            Flagship stores, pop-ups, F&B concepts, and everything 
            in between. Join 450+ brands at the most visited 
            destination in North America.
          </p>
          <a href="mailto:leasing@americandream.com?subject=Leasing Inquiry" 
             class="contact-path-cta lease-path-cta">
            Inquire About Leasing →
          </a>
        </div>

        <div class="contact-path-card" data-path="partner">
          <div class="contact-path-icon">🤝</div>
          <h3 class="contact-path-title">Partner With Us</h3>
          <p class="contact-path-desc">
            Sponsorships, brand partnerships, and marketing 
            integrations that reach 40 million visitors 
            in the world's most powerful consumer market.
          </p>
          <a href="mailto:partnerships@americandream.com?subject=Partnership Inquiry"
             class="contact-path-cta partner-path-cta">
            Explore Partnerships →
          </a>
        </div>

        <div class="contact-path-card" data-path="book">
          <div class="contact-path-icon">🎪</div>
          <h3 class="contact-path-title">Book a Venue</h3>
          <p class="contact-path-desc">
            Concerts, brand activations, product launches, 
            conventions, and corporate events. Venues that 
            scale from 500 to 10,000+ attendees.
          </p>
          <a href="mailto:events@americandream.com?subject=Event Booking Inquiry"
             class="contact-path-cta book-path-cta">
            Book Your Event →
          </a>
        </div>

      </div>

      <!-- Closing Statement -->
      <div class="contact-closing">
        <p class="contact-closing-text">
          "American Dream is not a mall.<br/>
          <em>It is the future of destination commerce.</em>"
        </p>
        <p class="contact-closing-sub">
          East Rutherford, NJ · 10 minutes from New York City
        </p>
      </div>

    </div>
  `;

  return section;
}

export function initContactAnimations() {
  // Prevent duplicate triggers if this function gets called again
  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerEl = trigger.vars?.trigger;

    if (
      triggerEl === ".contact-section" ||
      triggerEl === ".contact-paths" ||
      triggerEl === ".contact-closing"
    ) {
      trigger.kill();
    }
  });

  // Header
  gsap.from(".contact-title", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power2.out",
  });

  // Animate the entire cards container instead of each card
  gsap.from(".contact-paths", {
    scrollTrigger: {
      trigger: ".contact-paths",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    clearProps: "all",
  });

  // Closing statement
  gsap.from(".contact-closing", {
    scrollTrigger: {
      trigger: ".contact-closing",
      start: "top 85%",
      once: true,
    },
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: "power2.out",
  });
  gsap.from(".contact-path-card", {
    scrollTrigger: {
      trigger: ".contact-paths",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: {
      each: 0.1,
      from: "start",
    },
    clearProps: "transform,opacity",
  });
}
