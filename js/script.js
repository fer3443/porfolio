window.addEventListener("scroll", ()=> {
 const header = document.querySelector("header")
 header.classList.toggle("sticky", window.scrollY > 0)
})
// ScrollReveal
//Animacion Imagen Header
ScrollReveal().reveal("#imgBoxFA", {
    duration: 2000,
    distance: "150%",
    origin: "right",
    opacity: null
})
//Animacion para tarjetas
ScrollReveal().reveal(".card1", {
    delay: 500,
    duration: 2000,
    distance: "150%",
    origin: "top"
})
ScrollReveal().reveal(".card2", {
    delay: 1000,
    duration: 2000,
    distance: "150%",
    origin: "top"
})
ScrollReveal().reveal(".card3", {
    delay: 1500,
    duration: 2000,
    distance: "150%",
    origin: "top"
})
//Animacion Portfolio
ScrollReveal().reveal(".cardP1", {
    delay: 500,
    duration: 1000,
    distance: "100%",
    origin: "left"
})
ScrollReveal().reveal(".cardP2", {
    delay: 500,
    duration: 1000,
    distance: "100%",
    origin: "right"
})
//Animacion Contacto
ScrollReveal().reveal(".cardC1", {
    delay: 500,
    duration: 1000,
    distance: "100%",
    origin: "left"
})
ScrollReveal().reveal(".cardC2", {
    delay: 1000,
    duration: 1000,
    distance: "100%",
    origin: "left"
})
ScrollReveal().reveal(".cardC3", {
    delay: 1500,
    duration: 1000,
    distance: "100%",
    origin: "left"
})