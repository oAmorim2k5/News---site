const openButton = document.querySelector(".header-mobile > button")
const closeButton = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")


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