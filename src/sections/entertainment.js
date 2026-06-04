import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const attractions = [
  {
    name: "Nickelodeon Universe",
    category: "Theme Park",
    description:
      "The largest indoor theme park in the Western Hemisphere. 35+ rides and attractions.",
    stat: "35+ rides",
    icon: "🎢",
  },
  {
    name: "DreamWorks Water Park",
    category: "Water Park",
    description:
      "North America's largest indoor water park. Open year-round regardless of weather.",
    stat: "Largest indoor",
    icon: "🌊",
  },
  {
    name: "Big SNOW",
    category: "Indoor Ski Slope",
    description:
      "America's first and only year-round indoor ski and snowboard slope.",
    stat: "Only in America",
    icon: "⛷️",
  },
  {
    name: "Prudential Center Ice Rink",
    category: "Ice Skating",
    description:
      "NHL-regulation indoor ice rink open year-round for skating and events.",
    stat: "NHL size",
    icon: "⛸️",
  },
  {
    name: "SEA LIFE Aquarium",
    category: "Aquarium",
    description:
      "An immersive marine experience featuring thousands of sea creatures.",
    stat: "1000s of creatures",
    icon: "🐠",
  },
  {
    name: "Angry Birds Mini Golf",
    category: "Mini Golf",
    description:
      "Immersive themed mini golf experience unlike anything in traditional retail.",
    stat: "2 courses",
    icon: "⛳",
  },
];

export function createEntertainment() {
  const section = document.createElement("section");
  section.id = "entertainment";
  section.className = "section entertainment-section";

  section.innerHTML = `
    <div class="section-inner">

      <!-- Header -->
      <div class="entertainment-header">
        <p class="section-eyebrow">Attractions & Entertainment</p>
        <h2 class="section-title entertainment-title">
          Nothing Else<br/>Comes <em>Close</em>
        </h2>
        <p class="entertainment-intro">
          American Dream is the only property in North America that combines 
          a world-class theme park, indoor ski slope, water park, aquarium, 
          and ice rink under one roof — generating foot traffic that no 
          retailer or standalone venue could produce on its own.
        </p>
      </div>
<!-- Video -->
<div class="entertainment-video-wrapper">
  <div class="entertainment-video-container">
    <iframe
      src="https://www.youtube.com/embed/tMp6218iL5s?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=tMp6218iL5s&modestbranding=1"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      class="entertainment-video"
    ></iframe>
  </div>
  <div class="entertainment-video-label">
    <span>▶</span>
    <span>Nickelodeon Universe — Inside America's Largest Indoor Theme Park</span>
  </div>
</div>
      <!-- Attractions Grid -->
      <div class="entertainment-grid">
        ${attractions
          .map(
            (a, i) => `
          <div class="attraction-card" data-index="${i}">
            <div class="attraction-icon">${a.icon}</div>
            <div class="attraction-content">
              <div class="attraction-header">
                <span class="attraction-category">${a.category}</span>
                <span class="attraction-stat">${a.stat}</span>
              </div>
              <h3 class="attraction-name">${a.name}</h3>
              <p class="attraction-description">${a.description}</p>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Bottom Banner -->
      <div class="entertainment-banner">
        <div class="entertainment-banner-content">
          <p class="entertainment-banner-label">The Result</p>
          <p class="entertainment-banner-text">
            Entertainment drives <strong>40M+ annual visits</strong> — 
            making American Dream the highest-traffic retail destination 
            in North America and a platform unlike anything else on earth.
          </p>
        </div>
        <div class="entertainment-banner-stat">
          <span class="entertainment-banner-number">15+</span>
          <span class="entertainment-banner-sublabel">Major Attractions</span>
        </div>
      </div>

    </div>
  `;

  return section;
}

export function initEntertainmentAnimations() {
  gsap.from(".entertainment-title", {
    scrollTrigger: { trigger: ".entertainment-section", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".entertainment-intro", {
    scrollTrigger: { trigger: ".entertainment-section", start: "top 75%" },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".attraction-card", {
    scrollTrigger: { trigger: ".entertainment-grid", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });

  gsap.from(".entertainment-banner", {
    scrollTrigger: { trigger: ".entertainment-banner", start: "top 85%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });
}
