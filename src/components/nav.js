const navItems = [
  { id: "intro", label: "Home", number: "01" },
  { id: "overview", label: "The Property", number: "02" },
  { id: "retail", label: "Retail", number: "03" },
  { id: "luxury", label: "Luxury", number: "04" },
  { id: "dining", label: "Dining", number: "05" },
  { id: "entertainment", label: "Entertainment", number: "06" },
  { id: "events", label: "Events", number: "07" },
  { id: "contact", label: "Contact", number: "08" },
];

export function createNav() {
  const nav = document.createElement("nav");
  nav.id = "main-nav";
  nav.innerHTML = `
    <div class="nav-logo">
      <span class="nav-logo-text">AD</span>
    </div>

    <ul class="nav-items">
      ${navItems
        .map(
          (item) => `
        <li class="nav-item" data-section="${item.id}">
          <span class="nav-number">${item.number}</span>
          <span class="nav-label">${item.label}</span>
          <span class="nav-dot"></span>
        </li>
      `,
        )
        .join("")}
    </ul>

    <div class="nav-footer">
      <span class="nav-footer-text">American Dream</span>
    </div>
  `;
  return nav;
}

export function initNavHighlight() {
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".nav-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.dataset.section === id) {
              item.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => observer.observe(section));
}

export function initNavClicks() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.section;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}
