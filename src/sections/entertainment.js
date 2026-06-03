export function createEntertainment() {
  const section = document.createElement("section");
  section.id = "entertainment";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Attractions & Entertainment</p>
      <h2 class="section-title">Nothing Else<br/>Comes Close</h2>
    </div>
  `;
  return section;
}
