import { rootEl, searchBox, userContainer, userList } from "../app.js";

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

// funzione che crea i filter button
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
  allBtnEl.addEventListener("click", () => {
    if (!allBtnEl.classList.contains("active")) {
      onClickFilterHandle(allBtnEl);
      renderUserList(userList);
    }
  });

  activeBtnEl.addEventListener("click", () => {
    if (!activeBtnEl.classList.contains("active")) {
      onClickFilterHandle(activeBtnEl);
      renderUserList(userList.filter((user) => user.active === true));
    }
  });

  inactiveBtnEl.addEventListener("click", () => {
    if (!inactiveBtnEl.classList.contains("active")) {
      onClickFilterHandle(inactiveBtnEl);
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

  const detailsBtnEl = createElement(
    "button",
    "",
    {
      name: "class",
      value: "fa-regular fa-eye",
    },
    {
      name: "id",
      value: userData.id,
    }
  );

  userImgContainerEl.append(userImageEl);

  userNameUsernameEl.append(userNameEl, userAliasEl);

  userProfileEl.append(userImgContainerEl, userNameUsernameEl);

  userContactEl.append(userEmailEl, userPhoneEl);

  wrapperEl.append(userProfileEl, userContactEl, userWebsiteEl, detailsBtnEl);

  if (userData.active) wrapperEl.classList.add("activeUser");
  else wrapperEl.classList.add("inactiveUser");

  detailsBtnEl.addEventListener("click", () => {
    rootEl.append(openModalCard(userData));
  });

  return wrapperEl;
};

export const openModalCard = (userData) => {
  // const wrapperEl = createElement("div", "", {
  //   name: "class",
  //   value: "userModal",
  // });
  const modalcardEl = createElement("div", "", {
    name: "class",
    value: "userModal",
  });

  // const overlayEl = createElement("div", "", {
  //   name: "class",
  //   value: "userModal__overlay",
  // });
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "userModal__overlay",
  });

  const userMainInfo = createElement("div", "", {
    name: "class",
    value: "userModal__info",
  });

  const closeBtnEl = createElement("div", "X", {
    name: "class",
    value: "userModal__closeBtn",
  });

  const userProfileEl = createElement("div", "", {
    name: "class",
    value: "modal__profile",
  });

  const userImgEl = createElement(
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
    { name: "class", value: "userModal__img" }
  );

  const userNameUsernameEl = createElement("div", "", {
    name: "class",
    value: "modal__nameUsername",
  });

  const userNameEl = createElement("h3", userData.name, {
    name: "class",
    value: "modal__name",
  });

  const userAliasEl = createElement("p", "@" + userData.username, {
    name: "class",
    value: "modal__username",
  });

  const userStatusEl = createElement(
    "p",
    userData.active ? "Active" : "Inactive",
    { name: "class", value: "modal__userStatus" }
  );

  if (userStatusEl.textContent.toLowerCase() === "active")
    userStatusEl.classList.add("activeUser");
  else userStatusEl.classList.add("inactiveUser");

  const userDetails = createElement("div", "", {
    name: "class",
    value: "userModal__details",
  });

  const userContactsEl = createElement("div", "", {
    name: "class",
    value: "userContacts__container",
  });

  const userContactsTitleEl = createElement("h3", "Contacts", {
    name: "class",
    value: "userContacts__title",
  });

  const userContactsDetailsEl = createElement("div", "", {
    name: "class",
    value: "userContacts__detailsContainer",
  });

  const userContactsEmailEl = createElement(
    "p",
    `email: ${userData.email}`,
    {
      name: "class",
      value: "userContacts__email",
    },
    { name: "href", value: `mailto:${userData.email}` }
  );

  const userContactsPhoneEl = createElement("p", `phone: ${userData.phone}`, {
    name: "class",
    value: "userContacts__phone",
  });

  const userContactsWebsiteEl = createElement(
    "p",
    `website: ${userData.website}`,
    {
      name: "class",
      value: "userContacts__website",
    }
  );

  // inizio address
  const userAddressEl = createElement("div", "", {
    name: "class",
    value: "userAddress__container",
  });

  const userAddressTitleEl = createElement("h3", "Address", {
    name: "class",
    value: "userAddress__title",
  });

  const userAddressDetailsEl = createElement("div", "", {
    name: "class",
    value: "userAddress__addressContainer",
  });

  const userAddressStreetEl = createElement(
    "p",
    `street: ${userData.address.street} , ${userData.address.suite}`,
    {
      name: "class",
      value: "userAddress__street",
    }
  );

  const userAddressCityEl = createElement(
    "p",
    `city: ${userData.address.city} - ${userData.address.zipcode}`,
    {
      name: "class",
      value: "userAddress__city",
    }
  );
  // fine address

  // inizio company

  const userCompanyEl = createElement("div", "", {
    name: "class",
    value: "userCompany__container",
  });

  const userCompanyTitleEl = createElement("h3", "Company", {
    name: "class",
    value: "userCompany__title",
  });

  const userCompanyDetailsEl = createElement("div", "", {
    name: "class",
    value: "userCompany__companyContainer",
  });

  const userCompanyNameEl = createElement("p", userData.company.name, {
    name: "class",
    value: "userCompany__name",
  });

  // fine company

  userNameUsernameEl.append(userNameEl, userAliasEl);

  userProfileEl.append(userImgEl, userNameUsernameEl);

  userMainInfo.append(userProfileEl, userStatusEl);

  userContactsDetailsEl.append(
    userContactsEmailEl,
    userContactsPhoneEl,
    userContactsWebsiteEl
  );

  userContactsEl.append(userContactsTitleEl, userContactsDetailsEl);

  userAddressDetailsEl.append(userAddressStreetEl, userAddressCityEl);

  userAddressEl.append(userAddressTitleEl, userAddressDetailsEl);

  userCompanyDetailsEl.append(userCompanyNameEl);

  userCompanyEl.append(userCompanyTitleEl, userCompanyNameEl);

  userDetails.append(userContactsEl, userAddressEl, userCompanyEl);

  modalcardEl.append(closeBtnEl, userMainInfo, userDetails);

  wrapperEl.append(modalcardEl);

  // event listener per chiudere la modale
  wrapperEl.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("userModal__overlay"))
      wrapperEl.parentNode.removeChild(wrapperEl);
  });

  closeBtnEl.addEventListener("click", () => {
    wrapperEl.parentNode.removeChild(wrapperEl);
  });

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
const onClickFilterHandle = (item) => {
  // selezionando i figli del parent node (container dei filtri) posso rimuovere active da tutti i filtri e aggiungerlo solo al filtro cliccato
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
