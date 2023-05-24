// definisco una funzione per creare dinamicamente gli elementi html
export const createElement = (type, content, ...attrs) => {
  const element = document.createElement(type);
  element.textContent = content;

  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));

  return element;
};

// creo un titolo per la pagina
export const titleEl = createElement("h1", "TO-DO List", {
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
