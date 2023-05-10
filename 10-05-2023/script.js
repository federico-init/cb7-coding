// Esercizio 2

// Utilizzando callbacks, ricreare la calcolatrice in forma base includento il DOM,
// pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina
// (qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente,
// per es. potrete avere anche un solo operatore e due valori da sommare)

const qS = (element) => document.querySelector(element);

const calcNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const calcBtns = qS(".calc-buttons");
const display = qS(".screen");

//definisco gli operatori
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

//definisco la funzione calcolatore
const calc = (num1, num2, operator) => operator(num1, num2);

calcBtns.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  if (calcNumbers.includes(e.target.textContent)) {
    let num = e.target.textContent;
    display.textContent = num;
    return num;
  }
});

// Avanzato

// Realizzare una calcolatrice che includa almeno le 4 operazioni matematiche fondamentali e arricchire lo stile,
// prendendo ispirazioni dalla seguente piattaforma https://dribbble.com/search/shots/popular/mobile?q=calculator
