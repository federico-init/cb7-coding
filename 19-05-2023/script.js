import {
  cE,
  qS,
  qSA,
  genProduct,
  createModal,
  createCartModal,
  createLoginModal,
} from "./utils/fn.js";

export const rootEl = qS("#root");
export const productList = cE("div");
export const productListTitle = cE("h2");
const searchBarInput = qS(".searchInput");
export const navbarEl = qS(".navbar");
export const heroEl = qS(".hero");
export const cartEl = qS(".cart");

// inizializzo un array vuoto per salvarmi i dati ottenuti dal fetch di products
let productListData = [];
// inizializzo un array vuoto anche per gli oggetti del carrello
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Choose your Product!";

// inizializzo gli elementi statici navbar ed hero a display 'none' in modo da nasconderli mentre visualizzo la schermata di login
navbarEl.style.display = "none";
heroEl.style.display = "none";

rootEl.append(createLoginModal());

console.log(rootEl);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((item) => productList.append(genProduct(item)));
  })
  .then(() => {
    const productCardElements = qSA(".productCard");

    productCardElements.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createModal(data, rootEl)))
      )
    );
  });

searchBarInput.addEventListener("input", (event) => {
  // pulisco la lista card senza eliminare il div
  productList.textContent = "";

  // utilizzo la hof filter che mi permette di filtrare un array in base a una data condizione, in questo caso filtro in base al titolo dei prodotti
  productListData
    .filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    .forEach((obj) => productList.append(genProduct(obj)));
});
