import {
  createTodoItem,
  inputBtnEl,
  inputTextEl,
  rootEl,
  titleEl,
  renderTodoList,
} from "./utils/fn.js";
import { POST } from "./utils/http.js";

// creo un array di oggetti dove salvare gli elementi che trovo con la GET da poter manipolare con DELETE e POST fake
export let todoItemList = [];

let inputValueText;

// dichiaro una variabile che prenda tutti i todo
const todoItems = document.querySelectorAll(".todoItem");

document.body.append(titleEl, inputTextEl, inputBtnEl, rootEl);

// richiamo la funzione per la chiamata GET ai todos
renderTodoList();

// aggiungo eventListener ai checkbox tramite funzione
// renderItems();

// mi salvo il valore di input text
inputTextEl.addEventListener("change", (evt) => {
  inputValueText = evt.target.value;
});

inputBtnEl.addEventListener("click", () => {
  // faccio partire la POST per verificare che funzioni
  POST("/add", {
    todo: inputValueText,
    completed: false,
    userId: Math.floor(Math.random() * 100),
  });
  // dato che la POST viene solo simulata uso l'array di appoggio per listare effettivamente il nuovo item
  todoItemList.push({
    id: todoItemList.length,
    todo: inputValueText,
    completed: false,
    userId: Math.floor(Math.random() * 100),
  });

  // cancello tutto per non duplicare gli elementi
  rootEl.textContent = "";

  // render della nuova lista a partire dall'array di appoggio
  todoItemList.forEach((item) => rootEl.append(createTodoItem(item)));
});
