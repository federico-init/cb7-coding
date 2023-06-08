import { searchBox, userContainer, userList } from "../app.js";

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

export const createFilterButtons = (userList) => {
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "user__filterContainer",
  });

  const allValueEl = createElement("div", userList.length, {
    name: "class",
    value: "user__allFilterCount",
  });

  const allBtnEl = createElement("button", "All Users", {
    name: "class",
    value: "user__allFilterBtn",
  });

  allBtnEl.classList.add("active");

  const activeValueEl = createElement(
    "div",
    userList.filter((user) => user.active === true).length,
    {
      name: "class",
      value: "user__activeFilterCount",
    }
  );

  const activeBtnEl = createElement("button", "Active", {
    name: "class",
    value: "user__activeFilterBtn",
  });

  const inactiveValueEl = createElement(
    "div",
    userList.filter((user) => user.active === false).length,
    {
      name: "class",
      value: "user__inactiveFilterCount",
    }
  );

  const inactiveBtnEl = createElement("button", "Inactive", {
    name: "class",
    value: "user__inactiveFilterBtn",
  });

  allBtnEl.append(allValueEl);
  activeBtnEl.append(activeValueEl);
  inactiveBtnEl.append(inactiveValueEl);

  wrapperEl.append(allBtnEl, activeBtnEl, inactiveBtnEl);

  // inserisco gli event listener per i button
  allBtnEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("active")) {
      onClickHandle(event.target);
      renderUserList(userList);
    }
  });

  activeBtnEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("active")) {
      onClickHandle(event.target);
      renderUserList(userList.filter((user) => user.active === true));
    }
  });

  inactiveBtnEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("active")) {
      onClickHandle(event.target);
      renderUserList(userList.filter((user) => user.active === false));
    }
  });

  return wrapperEl;
};

export const createHeader = () => {
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "user__header",
  });

  const nameHeader = createElement("div", "", {
    name: "class",
    value: "user__headerName",
  });

  const contactsHeader = createElement("div", "Contacts", {
    name: "class",
    value: "user__headerContacts",
  });

  const websiteHeader = createElement("div", "Website", {
    name: "class",
    value: "user__headerWebsite",
  });

  const hiddenHeader = createElement("div", "", {
    name: "class",
    value: "user__headerHidden",
  });

  wrapperEl.append(nameHeader, contactsHeader, websiteHeader, hiddenHeader);

  return wrapperEl;
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

export const renderUserList = (list) =>
  list.forEach((user) => userContainer.append(genUser(user)));

// definisco una funzione che mi permette di rispettare il concetto DRY riciclando le stesse operazioni al click dei filter
const onClickHandle = (item) => {
  item.parentNode.childNodes.forEach((child) =>
    child.classList.remove("active")
  );
  item.classList.add("active");
  userContainer.textContent = "";
  searchBox.value = "";
};

// definisco una funzione che mi ritorna la lista di utenti in base al filtro attivo
export const filterUserList = (activeFilter) => {
  if (activeFilter.classList.contains("user__activeFilterBtn"))
    return userList.filter((user) => user.active === true);
  else if (activeFilter.classList.contains("user__inactiveFilterBtn"))
    return userList.filter((user) => user.active === false);
  else return userList;
};
