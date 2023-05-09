const burgerBtn = document.querySelector(".burger");

const sidebarAside = document.querySelector(".sidebar");

function openSidebar() {
  sidebarAside.classList.toggle("open");
}

burgerBtn.addEventListener("click", openSidebar);

// Esercitazione 1:

//     Creare un pulsante HTML e un elemento di testo vuoto come una un 'p'.
//     Aggiungere un gestore di eventi click al pulsante utilizzando il metodo addEventListener().
//     Al click dell'utente deve modificare il testo dell'elemento di testo per visualizzare un messaggio di saluto.

// definisco la funzione che modifica il testo del p vuoto
function hello() {
  voidPar.textContent = "Welcome!";
}

// creo gli elementi button e p
const newBtn = document.createElement("button");
newBtn.textContent = "Click me!";
const voidPar = document.createElement("p");
// seleziono il contenitore in cui inserire gli elementi appena creati
const selectContent = document.querySelector(".content");
// inserisco gli elementi nel container selezionato
selectContent.append(newBtn, voidPar);
// aggiungo gestione del click sul button
newBtn.addEventListener("click", hello);

//Esercitazione 2:

// Creare un campo di input HTML e un pulsante.
// Aggiungere un gestore di eventi 'submit'.
// Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente e visualizzarlo in un elemento di testo come un 'div' o un 'p'.

// definisco la funzione per gestire il submit
function getSubmit(event) {
  event.preventDefault();
  showSubmit.textContent = "Hai inserito: " + event.target[0].value;
}

// creo il form e gli elementi di input
const form = document.createElement("form");
const textInput = document.createElement("input");
const submitInput = document.createElement("input");
const showSubmit = document.createElement("p");
// assegno gli attributi al campo di input ed al button
textInput.setAttribute("type", "text");
submitInput.setAttribute("type", "submit");
submitInput.setAttribute("value", "Submit");
// aggiungo i due campi di input al form
form.appendChild(textInput);
form.appendChild(submitInput);
// aggiungo il form al suo container
selectContent.append(form, showSubmit);
// aggiungo gestione del submit
form.addEventListener("submit", getSubmit);

// Esercitazione 3 - Avanzato:

//     creare un 'input', una lista HTML 'ul' e un 'button' "Aggiungi elemento" che aggiungerà un elemento alla lista.
//     l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito

// N.B. Ho inserito la lista nella sidebar

function addListItemOnSubmit(event) {
  event.preventDefault();
  const sideBarLi = document.createElement("li");
  // aggiungo il testo preso in input al list item
  sideBarLi.textContent = event.target[0].value;
  // aggiungo l'item list alla lista
  return sidebarUl.appendChild(sideBarLi);
}

// creo lista, input e button
const sidebarUl = document.createElement("ul");
const sidebarForm = document.createElement("form");
const sideBarTextInput = document.createElement("input");
const sidebarSubmitInput = document.createElement("input");
// assegno gli attributi al campo di input ed al button
sideBarTextInput.setAttribute("type", "text");
sidebarSubmitInput.setAttribute("type", "submit");
sidebarSubmitInput.setAttribute("value", "Add element");
// aggiungo i due campi di input al form
sidebarForm.appendChild(sideBarTextInput);
sidebarForm.appendChild(sidebarSubmitInput);
// aggiungo il form al suo container
selectContent.append(sidebarForm);

// gestione sidebar che contiene la lista
sidebarAside.setAttribute("flex-direction", "column");
sidebarUl.setAttribute("list-style", "none");
sidebarAside.appendChild(sidebarUl);

// gestione submit
form.addEventListener("submit", addListItemOnSubmit);
