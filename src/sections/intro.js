export function createIntro() {
  const section = document.createElement("section");
  section.id = "intro";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">East Rutherford, New Jersey</p>
      <h1 class="section-hero-title">American<br/>Dream</h1>
      <p class="section-hero-sub">The World's Most Exciting Destination</p>
    </div>
  `;
  return section;
}
