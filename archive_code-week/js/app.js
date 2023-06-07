import { genUser, qS } from "./utils/fn.js";
import { GET } from "./utils/http.js";

// creo un array dove pusho gli elementi che prelevo tramite GET
export let userList = [];

const rootEl = qS(".root");

// eseguo la chiamata GET e mi salvo gli utenti
GET("/users").then((data) => {
  data.forEach((user) => {
    userList.push(user);
    rootEl.append(genUser(user));
  });
});

console.log(userList);
