import { createElement, isUserActive, qS, renderUserList } from "./utils/fn.js";
import { GET } from "./utils/http.js";

export const userContainer = createElement("div", "", {
  name: "class",
  value: "user__container",
});

const rootEl = qS(".root");
rootEl.append(userContainer);

const searchBox = qS(".navbar__search__input");

// creo un array dove pusho gli elementi che prelevo tramite GET
export let userList = [];

// eseguo la chiamata GET e mi salvo gli utenti
GET("/users").then((data) => {
  data.forEach((user) => {
    if (isUserActive()) user.active = true;
    else user.active = false;
    userList.push(user);
    renderUserList(user);
  });
});

console.log(userList);

// aggiungo un event listener al box di ricerca utente
searchBox.addEventListener("input", (event) => {
  userContainer.textContent = "";

  if (event.target.value != "") {
    userList
      .filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      .forEach((item) => renderUserList(item));
  }
  // se pulisco la search box mostro di nuovo tutta la lista
  else {
    userList.forEach((user) => renderUserList(user));
  }
});
