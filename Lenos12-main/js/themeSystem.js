import { htmlElement, updateThemeIcons } from "./themeEvents.js"

export function setupSystemThemeObserver() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const handleThemeChange = (e) => {
    const savedTheme = localStorage.getItem("theme")
    if (!savedTheme) {
      htmlElement.setAttribute("data-theme", e.matches ? "dark" : "light")
      updateThemeIcons()
    }
  }

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleThemeChange)
  } else {
    mediaQuery.addListener(handleThemeChange)
  }
}
