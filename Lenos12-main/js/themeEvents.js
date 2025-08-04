export const htmlElement = document.documentElement

export function updateThemeIcons() {
  const moonIcons = document.querySelectorAll(".icon-moon")
  const sunIcons = document.querySelectorAll(".icon-sun")
  const currentTheme = htmlElement.getAttribute("data-theme")

  if (currentTheme === "dark") {
    moonIcons.forEach((i) => i.classList.add("hidden"))
    sunIcons.forEach((i) => i.classList.remove("hidden"))
  } else {
    moonIcons.forEach((i) => i.classList.remove("hidden"))
    sunIcons.forEach((i) => i.classList.add("hidden"))
  }
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  htmlElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcons()
}

export function handleDOMContentLoaded() {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark") {
    htmlElement.setAttribute("data-theme", "dark")
  } else if (savedTheme === "light") {
    htmlElement.setAttribute("data-theme", "light")
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    htmlElement.setAttribute("data-theme", prefersDark ? "dark" : "light")
  }

  updateThemeIcons()
}

export function setupEventListeners() {
  const desktopBtn = document.getElementById("toggleDesktop")
  const mobileBtn = document.getElementById("toggle-mobile")

  if (desktopBtn) desktopBtn.addEventListener("click", toggleTheme)
  if (mobileBtn) mobileBtn.addEventListener("click", toggleTheme)
}
