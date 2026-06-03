export function createDining() {
  const section = document.createElement("section");
  section.id = "dining";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Dining & Lifestyle</p>
      <h2 class="section-title">Food As An<br/>Experience</h2>
    </div>
  `;
  return section;
}
