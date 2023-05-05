// # Esercizio 2

// Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno `03-05-2023`.`

alert("Esercizio 2");

function getNum() {
  let num = parseInt(prompt("Inserire un numero:"));
  return num;
}

function getOperator() {
  let operator = prompt("Scegliere un operatore [+, -, *, /]");
  return operator;
}

function getResult(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      return alert("L'operatore selezionato non è valido.");
  }
}

// richiamo la function per chiedere in input il primo numero e stampo
let num1 = getNum();
console.log("Input\n\n> " + num1);

// richiamo la function per chiedere in input il secondo numero e stampo
let num2 = getNum();
console.log("Input\n\n> " + num2);

// richiamo la function per chiedere in input l'operatore e stampo
let operator = getOperator();
console.log("Input\n\n> " + operator);

// richiamo la function per calcolare il risultato dell'operazione passandole come argomenti i valori ottenuti precedentemente
let result = getResult(num1, num2, operator);

// verifico che il risultato dell'operazione sia un numero nel caso in cui l'utente dia in input un operatore diverso da quello gestito

// se result è un numero stampo il risultato dell'operazione
if (typeof result == "number")
  console.log(num1 + " " + operator + " " + num2 + " = " + result);

// # Esercizio 3

// Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni. Giusto per cominciare a prendere pratica con la sintassi e come richiamare valori di oggetti.

alert("Esercizio 3");

const me = {
  name: "Federico",
  surname: "Borrometi",
  age: 31,
  city: "Torino",
  interests: ["informatica", "gaming", "tecnologia"],
};

console.log(
  "Mi chiamo " +
    me.name +
    " " +
    me.surname +
    ", ho " +
    me.age +
    " anni e vivo a " +
    me.city +
    ". I miei interessi principali comprendono l'" +
    me.interests[0] +
    ", il " +
    me.interests[1] +
    " ed il mondo della " +
    me.interests[2] +
    " in generale."
);

// # Avanzato

// Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.

alert("Avanzato");

// definisco la nuova funzione
function calculator() {
  return getResult(getNum(), getNum(), getOperator());
}

// invoco la funzione in modo che chieda all'utente i vari input e ne stampi poi il risultato
console.log("Il risultato dell'operazione è " + calculator());
