export function createRetail() {
  const section = document.createElement("section");
  section.id = "retail";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Retail</p>
      <h2 class="section-title">A New Standard<br/>For Retail</h2>
    </div>
  `;
  return section;
}
