import {
  createElement,
  createFilterButtons,
  createHeader,
  filterUserList,
  isUserActive,
  qS,
  renderUserList,
} from "./utils/fn.js";
import { GET } from "./utils/http.js";

export const userContainer = createElement("div", "", {
  name: "class",
  value: "user__container",
});

const rootEl = qS(".root");

// creo un array vuoto che conterrà i filtri
let filterEls = [];

rootEl.append(userContainer);

export const searchBox = qS(".navbar__search__input");

// creo un array dove pusho gli elementi che prelevo tramite GET
export let userList = [];

// eseguo la chiamata GET e mi salvo gli utenti
GET("/users").then((data) => {
  data.forEach((user) => {
    if (isUserActive()) user.active = true;
    else user.active = false;
    userList.push(user);
  });
  rootEl.insertBefore(createFilterButtons(userList), userContainer);
  rootEl.insertBefore(createHeader(), userContainer);

  filterEls = qS(".user__filterContainer").childNodes;

  renderUserList(userList);
});

// aggiungo un event listener al box di ricerca utente
searchBox.addEventListener("input", (event) => {
  userContainer.textContent = "";

  // creo una variabile per salvare il filtro attivo
  let activeFilterBtn = "";

  filterEls.forEach((button) => {
    if (button.classList.contains("active")) activeFilterBtn = button;
  });

  let filteredList = filterUserList(activeFilterBtn);

  if (event.target.value != "") {
    renderUserList(
      filteredList.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }
  // se pulisco la search box mostro di nuovo tutta la lista
  else renderUserList(filteredList);
});
