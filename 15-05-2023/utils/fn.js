export const qS = (el) => document.querySelector(el);

export const cE = (el) => document.createElement(el);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 3).join(" ") + " ...";

export const genProduct = (data) => {
  const productWrapperEl = cE("div");
  const productTextWrapperEl = cE("div");
  const productImageEl = cE("img");
  const productTitleEl = cE("h3");
  const productDescriptionEl = cE("p");
  const productRatingEl = cE("p");
  const productpriceEl = cE("h4");
  const buttonEl = cE("button");

  productWrapperEl.className = "productCard";
  productTextWrapperEl.className = "productCard__text";
  productImageEl.src = data.thumbnail;
  productImageEl.alt = data.title;
  productTitleEl.textContent = data.title;
  productDescriptionEl.textContent = formatDescriptionText(data.description);
  productRatingEl.textContent = data.rating;
  productpriceEl.textContent = data.price + " €";
  buttonEl.textContent = "Add to Cart";

  productTextWrapperEl.append(
    productTitleEl,
    productDescriptionEl,
    productRatingEl,
    productpriceEl,
    buttonEl
  );
  productWrapperEl.append(productImageEl, productTextWrapperEl);

  return productWrapperEl;
};
