import { GET } from "../js/utils/http.js";
import { tweetGen } from "./utils/fn.js";

const qS = (element) => document.querySelector(element);

// creo due array di appoggio dove salvare i dati che fetchati da users e post
let userList = [];
let postList = [];

const contentEl = qS(".content");
const navItems = document.querySelectorAll(".navItem");

// utilizziamo il promise.all per fetchare contemporaneamente gli elementi sia di users che di post
const res = Promise.all([GET("/posts"), GET("/users")]);

res
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    postList
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(tweetGen(post)))
  );

// ad ogni click su un elemento della navbar all'elemento selezionato aggiungiamo 'active' e la rimuoviamo da tutte le altre
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
  });
});
