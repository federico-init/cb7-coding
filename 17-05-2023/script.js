import { cE, qS, qSA, genProduct, createModal } from "./utils/fn.js";

const rootEl = qS("#root");
const searchBarInput = qS(".searchInput");
const productListTitle = cE("h2");
const productList = cE("div");
// inizializzo un array vuoto per salvarmi i dati ottenuti dal fetch di products
let productListData = [];

productList.className = "productList";
productListTitle.textContent = "Choose your Product!";

rootEl.append(productListTitle, productList);

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
