import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pastEvents = [
  {
    name: "BTS Pop-Up Experience",
    category: "Brand Activation",
    reach: "2.3M social impressions",
    icon: "🎤",
  },
  {
    name: "New York Fashion Week",
    category: "Fashion Event",
    reach: "850K attendees",
    icon: "👗",
  },
  {
    name: "Nike Air Max Day",
    category: "Product Launch",
    reach: "1.1M impressions",
    icon: "👟",
  },
  {
    name: "Holiday on Ice",
    category: "Live Entertainment",
    reach: "120K tickets sold",
    icon: "⛸️",
  },
  {
    name: "Marvel Universe Live",
    category: "Arena Show",
    reach: "95K attendees",
    icon: "🦸",
  },
  {
    name: "Nickelodeon SlimeFest",
    category: "Family Event",
    reach: "200K attendees",
    icon: "🟢",
  },
];

const venues = [
  {
    name: "Main Atrium",
    capacity: "10,000+",
    type: "Brand Activations, Concerts, Launches",
  },
  {
    name: "Meadowlands Exposition",
    capacity: "5,000",
    type: "Conventions, Trade Shows, Corporate",
  },
  {
    name: "Prudential Ice Rink",
    capacity: "2,500",
    type: "Concerts, Shows, Private Events",
  },
  {
    name: "Nickelodeon Universe",
    capacity: "8,000",
    type: "Private Buyouts, Brand Events",
  },
];

export function createEvents() {
  const section = document.createElement("section");
  section.id = "events";
  section.className = "section events-section";

  section.innerHTML = `
    <div class="section-inner">

      <!-- Header -->
      <div class="events-header">
        <p class="section-eyebrow">Events & Platform</p>
        <h2 class="section-title events-title">
          A Global Stage<br/>For Your <em>Brand</em>
        </h2>
        <p class="events-intro">
          American Dream is not just a place to shop — it is one of 
          the most powerful brand activation platforms in the world. 
          40 million annual visitors, a captive audience, and venues 
          that scale from intimate product launches to arena-scale 
          live events.
        </p>
      </div>

      <!-- Two Column: Venues + Events -->
      <div class="events-layout">

        <!-- Left: Venues -->
        <div class="events-venues">
          <p class="events-col-label">Venue Capabilities</p>
          <div class="events-venues-list">
            ${venues
              .map(
                (v) => `
              <div class="events-venue-card">
                <div class="events-venue-top">
                  <span class="events-venue-name">${v.name}</span>
                  <span class="events-venue-capacity">${v.capacity}</span>
                </div>
                <p class="events-venue-type">${v.type}</p>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- Right: Past Events -->
        <div class="events-past">
          <p class="events-col-label">Past Highlights</p>
          <div class="events-past-list">
            ${pastEvents
              .map(
                (e) => `
              <div class="events-past-item">
                <span class="events-past-icon">${e.icon}</span>
                <div class="events-past-content">
                  <span class="events-past-name">${e.name}</span>
                  <span class="events-past-category">${e.category}</span>
                </div>
                <span class="events-past-reach">${e.reach}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

      </div>

      <!-- Bottom Banner -->
      <div class="events-banner">
        <div class="events-banner-text">
          <p class="events-banner-title">
            Ready to activate at the world's most exciting destination?
          </p>
          <p class="events-banner-sub">
            Our events team works with brands, agencies, and producers 
            to create unforgettable experiences at scale.
          </p>
        </div>
        <button class="events-banner-cta" 
                onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
          Book Your Event
          <span>→</span>
        </button>
      </div>

    </div>
  `;

  return section;
}

export function initEventsAnimations() {
  gsap.from(".events-title", {
    scrollTrigger: {
      trigger: ".events-section",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".events-intro", {
    scrollTrigger: {
      trigger: ".events-section",
      start: "top 75%",
      once: true,
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.15,
    ease: "power2.out",
  });

  // Animate the left column as one unit
  gsap.from(".events-venues", {
    scrollTrigger: {
      trigger: ".events-layout",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    x: -30,
    duration: 0.7,
    ease: "power2.out",
  });

  // Animate the right column as one unit
  gsap.from(".events-past", {
    scrollTrigger: {
      trigger: ".events-layout",
      start: "top 80%",
      once: true,
    },
    opacity: 0,
    x: 30,
    duration: 0.7,
    delay: 0.1,
    ease: "power2.out",
  });

  gsap.from(".events-banner", {
    scrollTrigger: {
      trigger: ".events-banner",
      start: "top 85%",
      once: true,
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });
}
