import { cE, qS, genProduct } from "./utils/fn.js";

const rootEl = qS("#root");
const productListTitle = cE("h2");
const productList = cE("div");

productList.className = "productList";
productListTitle.textContent = "Choose your Product!";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((item) => productList.append(genProduct(item)))
  );

rootEl.append(productListTitle, productList);
