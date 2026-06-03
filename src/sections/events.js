export function createEvents() {
  const section = document.createElement("section");
  section.id = "events";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Events & Platform</p>
      <h2 class="section-title">A Global Stage<br/>For Your Brand</h2>
    </div>
  `;
  return section;
}
