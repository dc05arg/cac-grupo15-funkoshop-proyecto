//  Menú hamburguesa despegable en el navbar del header para versión mobile.

const navbarIcon = document.querySelector(".navbar__icon");
const navbarMenu = document.querySelector(".navbar__menu");

navbarIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Agregamos que ante cualquier scroll en la página el menú hamburguesa se oculte.

document.addEventListener("scroll", () => {
  navbarMenu.classList.remove("show-menu");
});
