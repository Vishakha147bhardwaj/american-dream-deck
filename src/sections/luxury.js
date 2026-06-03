export function createLuxury() {
  const section = document.createElement("section");
  section.id = "luxury";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Luxury</p>
      <h2 class="section-title">Where Luxury<br/>Finds Its Home</h2>
    </div>
  `;
  return section;
}
