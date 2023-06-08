import { userContainer } from "../app.js";

// definisco una funzione per la selezione di uno o più elementi
export const qS = (element) => document.querySelector(element);

export const qSA = (elements) => document.querySelectorAll(elements);

// definisco una funzione per la creazione dinamica degli elementi
export const createElement = (type, content, ...attrs) => {
  const element = document.createElement(type);
  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));

  return element;
};

export const createFilterButtons = () => {
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "user__filterContainer",
  });

  const allBtnEl = createElement("div", "All Users");
};

export const genUser = (userData) => {
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "userItem",
  });

  const userProfileEl = createElement("div", "", {
    name: "class",
    value: "user__profile",
  });

  const userImgContainerEl = createElement("div", "", {
    name: "class",
    value: "user__imageContainer",
  });

  const userImageEl = createElement(
    "img",
    "",
    {
      name: "src",
      value: `./img/users/${userData.id}.png`,
    },
    {
      name: "alt",
      value: `user ${userData.id} image`,
    },
    {
      name: "class",
      value: "user__image",
    }
  );

  const userNameUsernameEl = createElement("div", "", {
    name: "class",
    value: "user__nameUsername",
  });

  const userNameEl = createElement("p", userData.name, {
    name: "class",
    value: "user__name",
  });

  const userAliasEl = createElement("p", "@" + userData.username, {
    name: "class",
    value: "user__username",
  });

  const userContactEl = createElement("div", "", {
    name: "class",
    value: "user__contacts",
  });

  const userEmailEl = createElement(
    "a",
    userData.email,
    {
      name: "class",
      value: "user__email",
    },
    { name: "href", value: `mailto:${userData.email}` }
  );

  const userPhoneEl = createElement("a", userData.phone, {
    name: "class",
    value: "user__phone",
  });

  const userWebsiteEl = createElement("a", userData.website, {
    name: "class",
    value: "user__website",
  });

  const detailsBtnEl = createElement("button", "", {
    name: "class",
    value: "fa-regular fa-eye",
  });

  userImgContainerEl.append(userImageEl);

  userNameUsernameEl.append(userNameEl, userAliasEl);

  userProfileEl.append(userImgContainerEl, userNameUsernameEl);

  userContactEl.append(userEmailEl, userPhoneEl);

  wrapperEl.append(userProfileEl, userContactEl, userWebsiteEl, detailsBtnEl);

  if (userData.active) wrapperEl.classList.add("activeUser");
  else wrapperEl.classList.add("inactiveUser");

  return wrapperEl;
};

// definisco una funzione per l'assegnazione del valore attivo/inattivo per ogni utente
// in questo caso genero un valore pseudo random che userò per determinare lo stato
export const isUserActive = () => {
  if (Math.floor(Math.random() * 2) === 1) return true;
};

export const renderUserList = (user) => userContainer.append(genUser(user));
