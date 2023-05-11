// # Avanzato

// Realizzare una `todo-list` che permetta all'utente di aggiungere e rimuovere elementi dalla lista. Per trarre ispirazione, o modello da copiare, seguire uno dei seguenti `https://dribbble.com/search/shots/popular/mobile?q=todo-list`

const todos = [];

const todoItemGen = (itemData) => {
  const listItemEl = cE("li");

  listItemEl.id = itemData.id;
  listItemEl.textContent = itemData.text;
  listItemEl.className = "todoItem";

  return listItemEl;
};

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const listEl = cE("ul");
listEl.className = "list";

todos.forEach((item) => listEl.append(listItemGen(item)));

document.body.append(listEl);
