import { cE, qS, qSA, genProduct, createModal } from "./utils/fn.js";

const rootEl = qS("#root");
const productListTitle = cE("h2");
const productList = cE("div");

productList.className = "productList";
productListTitle.textContent = "Choose your Product!";

rootEl.append(productListTitle, productList);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((item) => productList.append(genProduct(item)))
  )
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
