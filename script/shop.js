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
    title: "HARRY POTTER",
    category: "HARRY POTTER",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/harry-potter/hermione-1.webp",
    hover: "img/harry-potter/hermione-box.webp",
    title: "HERMIONE GRANGER",
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
  {
    imgSrc: "img/pokemon/charmander-1.webp",
    hover: "img/pokemon/charmander-box.webp",
    title: "CHARMANDER",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/pokemon/dragonite-1.webp",
    hover: "img/pokemon/dragonite-box.webp",
    title: "DRAGONITE",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/pokemon/pikachu-1.webp",
    hover: "img/pokemon/pikachu-box.webp",
    title: "PIKACHU",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/pokemon/vulpix-1.webp",
    hover: "img/pokemon/vulpix-box.webp",
    title: "VULPIX",
    category: "POKEMON",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/star-wars/baby-yoda-1.webp",
    hover: "img/star-wars/baby-yoda-box.webp",
    title: "BABY YODA BLUEBALL",
    category: "STAR-WARS",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/star-wars/bobbafeth-1.webp",
    hover: "img/star-wars/bobbafeth-box.webp",
    title: "BOBA FETT",
    category: "STAR-WARS",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
  {
    imgSrc: "img/star-wars/luke-1.webp",
    hover: "img/star-wars/luke-box.webp",
    title: "LUKE SKYWALKER WITH GROGU",
    category: "STAR-WARS",
    price: "$ 1799,99",
    cuotas: "3 cuotas sin interés",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const shopContainer = document.querySelector(".main-funko-group");

  function createFunkoItem(data) {
    const funkoItem = document.createElement("div");
    funkoItem.className = "main-funko-item";
    funkoItem.innerHTML = `
              <article class="card-item">
                <a class="card-item__link" href="./item.html">
                  <picture class="card-item__img">
                    <span class="card-item__tag">NUEVO</span>
                    <img
                      class="card-item__img--front"
                      src="${data.imgSrc}"
                      alt="${data.title}"
                    />
                    <img
                      class="card-item__img--back"
                      src="${data.hover}"
                      alt="${data.title} BOX"
                    />
                  </picture>
                  <div class="card-item__content">
                    <p class="card-item__license">${data.category}</p>
                    <h3 class="card-item__name">${data.title}</h3>
                    <p class="card-item__price">${data.price}</p>
                    <p class="card-item__offer">${data.cuotas}</p>
                  </div>
                </a>
              </article>
  `;

    shopContainer.appendChild(funkoItem);
  }

  funkoData.forEach((item) => {
    createFunkoItem(item);
  });
});
