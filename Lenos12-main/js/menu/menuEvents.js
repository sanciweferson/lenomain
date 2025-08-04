import {
  getMenuToggleButton,
  getSideMenu,
  openSideMenu,
  closeSideMenu,
  MOBILE_BREAKPOINT,
} from "./menuActions.js"

export const setupMenuToggle = () => {
  const menuToggleButton = getMenuToggleButton()
  const sideMenu = getSideMenu()

  if (!menuToggleButton || !sideMenu) return

  menuToggleButton.addEventListener("click", () => {
    const isOpen = sideMenu.classList.contains("open")
    isOpen ? closeSideMenu() : openSideMenu()
  })
}

export const setupMenuStateOnLoad = () => {
  const sideMenu = getSideMenu()
  if (!sideMenu) return

  const menuOpenSaved = localStorage.getItem("menuOpen") === "true"
  if (menuOpenSaved && window.innerWidth <= MOBILE_BREAKPOINT) {
    openSideMenu()
  } else {
    closeSideMenu()
  }
}

export const setupMenuResizeHandler = () => {
  window.addEventListener("resize", () => {
    const sideMenu = getSideMenu()
    if (!sideMenu) return

    if (
      window.innerWidth > MOBILE_BREAKPOINT &&
      sideMenu.classList.contains("open")
    ) {
      closeSideMenu()
    }
  })
}

export const setupMobileLinkClicks = () => {
  const sideMenu = getSideMenu()
  if (!sideMenu) return

  const links = sideMenu.querySelectorAll("a[href]")

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (sideMenu.classList.contains("open")) {
        closeSideMenu()

        const href = link.getAttribute("href")
        if (href.startsWith("#")) {
          event.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth" })
            }, 200)
          }
        }
      }
    })
  })
}
