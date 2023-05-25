import { todoItemList } from "../script.js";
import { GET } from "./http.js";

// definisco una funzione per creare dinamicamente gli elementi html
export const createElement = (type, content, ...attrs) => {
  const element = document.createElement(type);
  element.textContent = content;

  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));

  return element;
};

export const qSA = (elements) => document.querySelectorAll(elements);

// creo un titolo per la pagina
export const titleEl = createElement("h1", "Todo List", {
  name: "class",
  value: "title",
});

// creo una input text element da cui inserire un nuovo TODO
export const inputTextEl = createElement(
  "input",
  "",
  { name: "type", value: "text" },
  { name: "placeholder", value: "Todo..." },
  { name: "class", value: "todo__input" }
);

// creo un button per scatenare la POST della nuova TODO
export const inputBtnEl = createElement(
  "input",
  "",
  { name: "type", value: "button" },
  { name: "value", value: "+" },
  { name: "class", value: "todo__add" }
);

export const rootEl = createElement("div", "", {
  name: "class",
  value: "root",
});

export const createTodoItem = ({ id, todo, completed }) => {
  const todoItem = createElement(
    "div",
    "",
    {
      name: "class",
      value: "todoItem",
    },
    {
      name: "id",
      value: id,
    }
  );

  const checkboxTodoItem = createElement(
    "input",
    "",
    {
      name: "type",
      value: "checkbox",
    },
    {
      name: "class",
      value: "checkboxTodo",
    },
    {
      name: "id",
      value: id,
    }
  );
  const textTodoItem = createElement("p", todo);

  todoItem.append(checkboxTodoItem, textTodoItem);

  if (completed) {
    todoItem.classList.add("todoItem__completed");
    checkboxTodoItem.checked = true;
  } else checkboxTodoItem.checked = false;

  return todoItem;
};

export const renderTodoList = () => {
  GET()
    .then(({ todos }) =>
      todos.forEach((todo) => {
        todoItemList.push(todo);
        rootEl.append(createTodoItem(todo));
      })
    )
    .then(() => deleteItem())
    .then(() => renderItems());
};

const renderItems = () => {
  const checkboxEls = qSA(".checkboxTodo");
  checkboxEls.forEach((checkbox) =>
    checkbox.addEventListener("click", (evt) => {
      todoItemList.forEach((item) => {
        if (item.id == evt.target.id) {
          item.completed = !item.completed;
          checkbox.parentNode.classList.toggle("todoItem__completed");
        }
      });
    })
  );
};

// implemento la chiamata DELETE
const deleteItem = () => {
  // dichiaro una variabile che prenda tutti i todo
  const todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((item) =>
    item.addEventListener("click", (evt) => {
      if (confirm("Are you sure to delete this item?")) {
        DELETE(`/${evt.target.id}`);
        // filtro l'array in base all'id
        todoItemList.filter((todo) => todo.id != evt.target.id);
      }
    })
  );
};
