import {
  cartItems,
  cartEl,
  rootEl,
  navbarEl,
  heroEl,
  productList,
  productListTitle,
} from "../script.js";
import { userList } from "./dbUsers.js";

export const qS = (el) => document.querySelector(el);

export const qSA = (el) => document.querySelectorAll(el);

export const cE = (el) => document.createElement(el);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 13).join(" ") + " ...";

// export const ratingStars = (rating) => {
//   let stars = "";
//   // ciclo for da 0 a n per contare il numero di stelle da stampare
//   for (let i = 0; i < Math.floor(rating); i++) stars+"⭐";

//   if ((rating % Math.floor(rating)) != 0) stars+"stella"

// }

// CARD PRODOTTO
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
  productWrapperEl.setAttribute("id", data.id);
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

// MODALE
export const createModal = (data, parentElement = null) => {
  // creo i contenitori principali
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryEl = cE("div");
  const productInfoEl = cE("div");

  // creo e popolo gli elementi del div gallery
  const mainImgEl = cE("img");
  // const otherImgEl = cE("div");

  mainImgEl.src = data.thumbnail;
  mainImgEl.alt = data.title;

  // aggiungo le immagini secondarie al div otherImgEl
  // otherImgEl.append(
  //   data.images.forEach((url) => {
  //     const image = cE("img");
  //     image.src = url;
  //     image.alt = "other image";
  //     return image;
  //   })
  // );

  // otherImgEl.className = "modalProductImages";
  galleryEl.className = "modalProductGallery";

  // appendo le immagini al div gallery
  galleryEl.append(mainImgEl);

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

  // creo e popolo un div che racchiude i button
  const modalButtons = cE("div");

  const modalBuyButton = cE("button");
  const modalBackButton = cE("button");

  modalBuyButton.textContent = "Buy";
  modalBackButton.textContent = "Back";

  productInfoEl.className = "modalProductInfo";
  productTextEl.className = "modalProductText";
  modalButtons.className = "modalProductButtons";

  // appendo gli elementi al div productInfo

  productTextEl.append(
    productTitleEl,
    productDescriptionEl,
    productRatingEl,
    productPriceEl
  );

  modalButtons.append(modalBuyButton, modalBackButton);

  productInfoEl.append(productTextEl, modalButtons);

  // gestisco il div overlay
  overlayEl.className = "modalOverlay";

  // appendo al wrapper i due div principali
  wrapperEl.className = "modalCard";
  wrapperEl.append(overlayEl, galleryEl, productInfoEl);

  if (parentElement) {
    overlayEl.addEventListener("click", () =>
      parentElement.removeChild(wrapperEl)
    );
    modalBackButton.addEventListener("click", () =>
      parentElement.removeChild(wrapperEl)
    );
  }

  modalBuyButton.addEventListener("click", () => {
    cartItems.push(data);
    modalBuyButton.textContent = "Added!";
    console.log(wrapperEl);
    setTimeout(() => parentElement.removeChild(wrapperEl), 500);
    // TODO: aggiungere un'icona per il counter degli elementi vicino all'icona del carrello (if length >= 1)
  });

  return wrapperEl;
};

export const createCartModal = (cartItems, parent = null) => {
  const wrapperEl = cE("div");
  const totalEl = cE("h2");
  let totalPrice =
    `${cartItems.reduce((acc, item) => acc + item.price, 0)}` + " €";

  wrapperEl.className = "cartModal";
  totalEl.textContent = `Total (${cartItems.length}):` + totalPrice;

  body.addEventListener("click", (event) => {
    if (event != wrapperEl) parent.removeChild(wrapperEl);
  });

  return wrapperEl;
};

export const createLoginModal = () => {
  const wrapperEl = cE("form");
  const loginTitleEl = cE("h2");
  const usernameEl = cE("input");
  const passwordEl = cE("input");
  const alertEl = cE("p");
  const submitBtnEl = cE("button");

  wrapperEl.className = "loginModal";
  loginTitleEl.textContent = "Log in";
  usernameEl.type = "text";
  usernameEl.placeholder = "Username";
  passwordEl.type = "password";
  passwordEl.placeholder = "Password";
  submitBtnEl.type = "submit";
  alertEl.textContent = "";
  submitBtnEl.textContent = "Enter";

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event);

    // con doppia negazione invece di farmi restituire un oggetto mi faccio restituire un valore booleano, in questo caso true (!false == true)
    const isAuth = !!userList.find(
      (user) =>
        user.username === event.target[0].value &&
        user.password === event.target[1].value
    );

    if (isAuth) {
      navbarEl.style.display = "flex";
      heroEl.style.display = "flex";
      rootEl.append(productListTitle, productList);
      rootEl.removeChild(wrapperEl);
    } else {
      alertEl.textContent("Credentials error! Please try again.");
    }
  });

  wrapperEl.append(loginTitleEl, usernameEl, passwordEl, alertEl, submitBtnEl);
  return wrapperEl;
};
