export const state = {
  buyerMode: null,
};

export function setState(key, value) {
  state[key] = value;
  document.dispatchEvent(
    new CustomEvent("stateChange", {
      detail: { key, value },
    }),
  );
}
