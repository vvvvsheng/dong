(function () {
  const storageKey = "lindong-theme";
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");

  function getTheme() {
    return root.dataset.theme === "night" ? "night" : "day";
  }

  function applyButtonState() {
    if (!toggle) return;
    const theme = getTheme();
    toggle.textContent = theme === "night" ? "Day Mode" : "Night Mode";
    toggle.setAttribute("aria-pressed", String(theme === "night"));
  }

  function setTheme(theme) {
    root.dataset.theme = theme === "night" ? "night" : "day";
    try {
      localStorage.setItem(storageKey, root.dataset.theme);
    } catch (error) {
      // Ignore storage failures and keep the in-memory theme.
    }
    applyButtonState();
  }

  applyButtonState();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = getTheme() === "night" ? "day" : "night";
      setTheme(nextTheme);
    });
  }
})();
