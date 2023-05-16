export const qS = (el) => document.querySelector(el);

export const qSA = (el) => document.querySelectorAll(el);

export const cE = (el) => document.createElement(el);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 13).join(" ") + " ...";

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
  productTitleEl.className = "productCard__title";
  productImageEl.src = data.thumbnail;
  productImageEl.alt = data.title;
  productTitleEl.textContent = data.title;
  productDescriptionEl.textContent = formatDescriptionText(data.description);
  productRatingEl.textContent = data.rating + " ⭐";
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

export const createModal = (data, parentElement = null) => {
  // creo i contenitori principali
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryEl = cE("div");
  const productInfoEl = cE("div");

  // creo e popolo gli elementi del div gallery
  const mainImgEl = cE("img");

  // const otherImgEl = () => {
  //   const galleryWrapperEl = cE("div");

  //   data.images.forEach((url) => {
  //     const imgEl = cE("img");
  //     imgEl.src = url;
  //     imgEl.alt = "product image";
  //     galleryWrapperEl.append(imgEl);
  //   });

  //   return galleryWrapperEl;
  // };

  mainImgEl.src = data.thumbnail;
  mainImgEl.alt = data.title;

  // creo e popolo gli elementi del div productInfo
  // creo un div che racchiude le info del prodotto
  const productTextEl = cE("div");

  const productTitleEl = cE("h2");
  const productDescriptionEl = cE("p");
  const productRatingEl = cE("p");
  const productPriceEl = cE("h4");

  productTitleEl.textContent = data.title;
  productDescriptionEl.textContent = data.description;
  productRatingEl.textContent = data.rating + " ⭐";
  productPriceEl.textContent = "€ " + data.price;

  productTextEl.append(
    productTitleEl,
    productDescriptionEl,
    productRatingEl,
    productPriceEl
  );

  // creo e popolo un div che racchiude i button
  const modalButtons = cE("div");

  const modalBuyButton = cE("button");
  const modalBackButton = cE("button");

  modalButtons.append(modalBuyButton, modalBackButton);

  // appendo le immagini al div gallery
  // galleryEl.append(mainImgEl, otherImgEl);
  galleryEl.append(mainImgEl);

  // appendo gli elementi al div productInfo
  productInfoEl.append(productTextEl, modalButtons);

  // appendo al wrapper i due div principali
  wrapperEl.append(overlayEl, galleryEl, productInfoEl);

  if (parentElement) {
    overlayEl.addEventListener("click", () =>
      parentElement.removeChild(wrapperEl)
    );
    modalBackButton.addEventListener("click", () =>
      parentElement.removeChild(wrapperEl)
    );
  }

  return wrapperEl;
};
