const modes = [
  {
    id: "lease",
    label: "I want to Lease",
    icon: "🏪",
    color: "var(--color-lease)",
  },
  {
    id: "partner",
    label: "I want to Partner",
    icon: "🤝",
    color: "var(--color-partner)",
  },
  {
    id: "book",
    label: "I want to Book",
    icon: "🎪",
    color: "var(--color-book)",
  },
];

export function createBuyerMode() {
  const wrapper = document.createElement("div");
  wrapper.id = "buyer-mode";
  wrapper.innerHTML = `
    <p class="buyer-mode-label">What brings you here?</p>
    <div class="buyer-mode-options">
      ${modes
        .map(
          (mode) => `
        <button class="buyer-mode-btn" data-mode="${mode.id}" 
                style="--mode-color: ${mode.color}">
          <span class="buyer-mode-icon">${mode.icon}</span>
          <span class="buyer-mode-text">${mode.label}</span>
        </button>
      `,
        )
        .join("")}
    </div>
  `;
  return wrapper;
}

export function initBuyerMode() {
  const buttons = document.querySelectorAll(".buyer-mode-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      // Save to session
      sessionStorage.setItem("buyerMode", mode);

      // Update active state
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Tell the whole app
      document.dispatchEvent(
        new CustomEvent("buyerModeChange", {
          detail: { mode },
        }),
      );

      // Update body class so sections can react
      document.body.dataset.buyerMode = mode;
    });
  });

  // Restore previous selection
  const saved = sessionStorage.getItem("buyerMode");
  if (saved) {
    document.querySelector(`[data-mode="${saved}"]`)?.click();
  }
}
