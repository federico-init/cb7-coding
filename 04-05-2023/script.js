// Esercizio 1

// Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo `reverse()`.

alert("Esercizio 1");

// dato un array di partenza
let arr = ["a", 1, "b", 2, "c", 3];

// dichiariamo un array vuoto di appoggio
let revArr = [];

// cicliamo l'array originale a partire dall'ultimo valore (i = arr.length - 1) in modo da pushare nel nuovo array i valori in ordine inverso
for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i]);
}

console.log("Dato l'array: " + arr);

console.log("L'array invertito è: " + revArr);

// Esercizio 2

// Dato un array di numeri, stampare il velore minimo e massimo

alert("Esercizio 2");

// dichiaro un array vuoto, la lunghezza ed un valore minimo e massimo per generare dei numeri casuali

let array = [];

let arrLength = 10;

let minVal = 0;

let maxVal = 500;

// pusho dei valori tra 0 e 500 fino ad avere un array dove array.length = 10

for (let i = 0; i < arrLength; i++) {
  array.push(minVal + Math.floor(Math.random() * (maxVal - minVal + 1)));
}

console.log("L'array generato è: " + array);

// dichiaro due variabili che conterranno il valore min e max dell'array

let min = array[0];

let max = array[0];

// ciclo l'array e aggiorno i valori min e max ogni volta che trovo un valore più piccolo/grande

// inizializzo i a 1 perché il primo valore è già salvato in min/max e non mi serve confrontarlo con sé stesso

for (let i = 1; i < array.length; i++) {
  // cerco il min
  if (array[i] < min) {
    min = array[i];
  }
  // cerco il max
  if (array[i] > max) {
    max = array[i];
  }
}

// stampo min e max una volta che ho finito di scorrere tutto l'array

console.log("Il valore minimo è: " + min);

console.log("Il valore massimo è: " + max);
