// Función para generar los funko-item
const funkoData = [
  {
    imgSrc: "img/star-wars/trooper-1.webp",
    hover: "img/star-wars/trooper-box.webp",
    title: "STORMTROOPER LIGHTSABER",
    category: "STAR WARS",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/pokemon/pidgeotto-1.webp",
    hover: "img/pokemon/pidgeotto-box.webp",
    title: "PIDGEOTTO",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/luna-1.webp",
    hover: "img/harry-potter/luna-box.webp",
    title: "LUNA LOVEGOOD LION MASK",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/harry-1.webp",
    hover: "img/harry-potter/harry-box.webp",
    title: "HARRY",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/hermione-1.webp",
    hover: "img/harry-potter/hermione-box.webp",
    title: "HERMIONE",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/snape-patronus-1.webp",
    hover: "img/harry-potter/snape-patronus-box.webp",
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

    // Agrega el evento de hover al elemento creado
    funkoItem.addEventListener("mouseover", function () {
      const imgElement = this.querySelector(".lanz-img");
      imgElement.src = data.hover || data.imgSrc;
    });

    // Restaura la imagen original al salir del hover
    funkoItem.addEventListener("mouseleave", function () {
      const imgElement = this.querySelector(".lanz-img");
      imgElement.src = data.imgSrc;
    });

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
    navigation: {
      prevEl: ".glide__arrow--prev",
      nextEl: ".glide__arrow--next",
    },
  }).mount();
});
