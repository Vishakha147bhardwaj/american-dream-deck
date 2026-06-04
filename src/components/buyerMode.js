import { setState } from "./state.js";

const modes = [
  {
    id: "lease",
    label: "I want to Lease",
    icon: "🏪",
    color: "var(--color-lease)",
  },
  {
    id: "partner",
    label: "I want to Partner",
    icon: "🤝",
    color: "var(--color-partner)",
  },
  {
    id: "book",
    label: "I want to Book",
    icon: "🎪",
    color: "var(--color-book)",
  },
];

export function createBuyerMode() {
  const wrapper = document.createElement("div");
  wrapper.id = "buyer-mode";
  wrapper.innerHTML = `
    <p class="buyer-mode-label">What brings you here?</p>
    <div class="buyer-mode-options">
      ${modes
        .map(
          (mode) => `
        <button class="buyer-mode-btn" data-mode="${mode.id}"
                style="--mode-color: ${mode.color}">
          <span class="buyer-mode-icon">${mode.icon}</span>
          <span class="buyer-mode-text">${mode.label}</span>
        </button>
      `,
        )
        .join("")}
    </div>
  `;
  return wrapper;
}
export function initBuyerMode() {
  const buttons = document.querySelectorAll(".buyer-mode-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      sessionStorage.setItem("buyerMode", mode);

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      setState("buyerMode", mode);
      document.body.dataset.buyerMode = mode;

      applyBuyerMode(mode);
    });
  });
}

function applyBuyerMode(mode) {
  updateNavPriority(mode);
  updateSectionCallouts(mode);
  updateContactSection(mode);
}

// ── Nav Priority ──
const navPriority = {
  lease: ["retail", "luxury", "dining", "overview", "entertainment", "events"],
  partner: [
    "events",
    "entertainment",
    "overview",
    "retail",
    "dining",
    "luxury",
  ],
  book: ["events", "entertainment", "dining", "overview", "retail", "luxury"],
};

function updateNavPriority(mode) {
  const navItems = document.querySelectorAll(".nav-item");
  const priority = navPriority[mode];

  navItems.forEach((item) => {
    const section = item.dataset.section;
    const index = priority.indexOf(section);

    // Highlight priority sections
    item.classList.remove("nav-priority-high", "nav-priority-low");
    if (index !== -1 && index < 3) {
      item.classList.add("nav-priority-high");
    } else if (index >= 3) {
      item.classList.add("nav-priority-low");
    }
  });
}

// ── Section Callouts ──
const callouts = {
  lease: {
    intro:
      "Over 450 brands have already chosen American Dream. Your flagship belongs here.",
    overview:
      "40M annual visitors across the most affluent consumer market in North America.",
    retail:
      "Prime locations available across all categories — flagship, pop-up, and everything in between.",
    luxury:
      "The luxury wing offers the only true flagship opportunity in the New York metro area.",
    dining:
      "F&B concepts drive 40% of all repeat visits — a built-in audience for your brand.",
    entertainment:
      "Entertainment draws visitors who stay 4.5 hours on average — maximum brand exposure.",
    events:
      "Co-brand with major events to amplify your store launch or seasonal activation.",
    contact: "Ready to find your space? Our leasing team is standing by.",
  },
  partner: {
    intro:
      "40 million visitors. One platform. Unmatched brand activation potential.",
    overview:
      "The most concentrated pocket of consumer spending power in the United States.",
    retail: "450+ brand partners already activating inside the property.",
    luxury:
      "Premium sponsorship inventory inside the luxury wing — reaching the highest-value consumers.",
    dining:
      "F&B sponsorship opportunities reaching 100+ dining venues and millions of diners.",
    entertainment:
      "Theme park and attraction naming rights, presented sponsorships, and co-branded experiences.",
    events:
      "Become the presenting sponsor of marquee events reaching millions of impressions.",
    contact: "Let's build a partnership that moves your brand forward.",
  },
  book: {
    intro:
      "From intimate product launches to arena-scale concerts — this is your stage.",
    overview:
      "40M annual visitors means your event reaches an audience no other venue can match.",
    retail:
      "Retail environments available for exclusive brand takeovers and pop-up activations.",
    luxury:
      "The luxury wing is available for private brand events, launches, and VIP experiences.",
    dining:
      "Private dining buyouts available for corporate events and brand hospitality.",
    entertainment:
      "Exclusive buyouts of Nickelodeon Universe and DreamWorks Water Park available.",
    events:
      "Venues scaling from 500 to 10,000+ attendees. Every format. Every occasion.",
    contact: "Tell us about your event and we'll make it happen.",
  },
};

function updateSectionCallouts(mode) {
  document.querySelectorAll(".buyer-callout").forEach((el) => el.remove());

  const modeCallouts = callouts[mode];
  const modeColor = {
    lease: "var(--color-lease)",
    partner: "var(--color-partner)",
    book: "var(--color-book)",
  }[mode];

  const modeLabel = {
    lease: "🏪 Leasing Insight",
    partner: "🤝 Partnership Insight",
    book: "🎪 Booking Insight",
  }[mode];

  Object.entries(modeCallouts).forEach(([sectionId, text]) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Use section-specific content containers
    const target =
      section.querySelector(".dining-content") ||
      section.querySelector(".retail-right") ||
      section.querySelector(".luxury-content") ||
      section.querySelector(".luxury-inner") ||
      section.querySelector(".section-inner") ||
      section;

    const callout = document.createElement("div");
    callout.className = "buyer-callout";
    callout.style.setProperty("--callout-color", modeColor);
    callout.innerHTML = `
      <span class="buyer-callout-label">${modeLabel}</span>
      <p class="buyer-callout-text">${text}</p>
    `;

    target.insertBefore(callout, target.firstChild);
  });
}

// ── Contact Section ──
function updateContactSection(mode) {
  const paths = document.querySelectorAll(".contact-path-card");

  paths.forEach((card) => {
    card.classList.remove("contact-path-active");

    if (card.dataset.path === mode) {
      card.classList.add("contact-path-active");
    }
  });
}
