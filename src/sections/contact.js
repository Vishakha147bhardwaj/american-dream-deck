export function createContact() {
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "section";
  section.innerHTML = `
    <div class="section-inner">
      <p class="section-eyebrow">Let's Talk</p>
      <h2 class="section-title">Be Part Of<br/>Something Bigger</h2>
    </div>
  `;
  return section;
}
