const closeBtn = document.querySelector(".close-btn")
const menuBtn = document.querySelector(".menu-icon")

const aside = document.querySelector("aside")

menuBtn.addEventListener("click", () => {
    aside.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    aside.style.display = "none"
})