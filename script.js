const openButton = document.querySelector("header > button")
const closeButton = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header nav.nav-mobile")


openButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

function openMenu() {
    body.classList.add("menu-open")
    nav.classList.add("open")
}

function closeMenu() {
    body.classList.remove("menu-open")
    nav.classList.remove("open")
}