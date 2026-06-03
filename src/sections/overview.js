export function createOverview() {
  const section = document.createElement("section");
  section.id = "overview";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">The Property</p>
      <h2 class="section-title">By The Numbers</h2>
    </div>
  `;
  return section;
}
