//  Menú hamburguesa despegable en el navbar del header para versión mobile.

const navbarIcon = document.querySelector(".navbar__icon");
const navbarMenu = document.querySelector(".navbar__menu");

// ESTA PARTE HACE QUE NO SE PUEDAN GENERAR LOS FUNKO-ITEM, NO SE POR QUÉ
// navbarIcon.addEventListener("click", () => {
//   navbarMenu.classList.toggle("show-menu");
// });

// Agregamos que ante cualquier scroll en la página el menú hamburguesa se oculte.

document.addEventListener("scroll", () => {
  navbarMenu.classList.remove("show-menu");
});

// Función para generar los funko-item
const funkoData = [
  {
    imgSrc: "img/star-wars/trooper-1.webp",
    title: "STORMTROOPER LIGHTSABER",
    category: "STAR WARS",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/pokemon/pidgeotto-1.webp",
    title: "PIDGEOTTO",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/luna-1.webp",
    title: "LUNA LOVEGOOD LION MASK",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/harry-1.webp",
    title: "HARRY",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/hermione-1.webp",
    title: "HERMIONE",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/snape-patronus-1.webp",
    title: "SNAPE PATRONUS",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const glideContainer = document.querySelector(".glide__slides");

  function createFunkoItem(data) {
    const funkoItem = document.createElement("div");
    funkoItem.className = "funko-item glide__slide";
    funkoItem.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.title}" class="lanz-img">
    <div class="nuevo"><p class="nuevo">NUEVO</p></div>
    <h5>${data.category}</h5>
    <h6>${data.title}</h6>
    <p class="price">${data.price}</p>
    <p class="cuotas">${data.cuotas}</p>
  `;

    glideContainer.appendChild(funkoItem);
  }

  funkoData.forEach((item) => {
    createFunkoItem(item);
  });
});

// SLIDER ------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
      991: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
});
