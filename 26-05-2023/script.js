import {
  inputBtnEl,
  inputTextEl,
  rootEl,
  titleEl,
  renderList,
} from "./utils/fn.js";

export let todoItemList =
  JSON.parse(localStorage.getItem("todoItemList")) || [];

let inputValueText = "";

document.body.append(titleEl, inputTextEl, inputBtnEl, rootEl);

renderList();

// mi salvo il valore di input text
inputTextEl.addEventListener("change", (evt) => {
  inputValueText = evt.target.value;
});

inputBtnEl.addEventListener("click", () => {
  if (inputValueText != "") {
    // svuoto il text input
    inputTextEl.value = "";

    todoItemList.unshift({
      id: todoItemList.length + 1,
      todo: inputValueText,
      completed: false,
      userId: Math.floor(Math.random() * 100),
    });

    // svuoto il valore della variabile di input text
    inputValueText = "";

    renderList();
  }
});
