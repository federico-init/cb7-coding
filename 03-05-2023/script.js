// Esercizio 1

// Sulla base della lezione del giorno, scrivere un piccolo programmino che preso un input da parte dell'utente (prompt) di tipo number, 
// verifichi se questo è pari o dispari e lo stampi in console. Si utilizzi il costrutto if-else.

alert("Esercizio 1");

let num1 = parseInt(prompt("Inserire un numero"));

let isEven = (num1 % 2) == 0 ? true : false;

if (isEven) {
    console.log(num1 + " è un numero pari.")
} else if (!isEven && !isNaN(num1)) {
    console.log(num1 + " è un numero dispari.")
} else {
    console.log("Il valore inserito non è valido. Per favore inserire un numero.")
}


// Esercizio 2

// Svolgere lo stesso esercizio 1, utilizzando l'operatore ternario.

alert("Esercizio 2");

let num2 = parseInt(prompt("Inserire un numero"));

(num2 % 2) == 0 ? console.log(num2 + " è un numero pari.") : console.log(num2 + " è un numero dispari.");


// Avanzato

// Utilizzando gli operatori matematici e avvalendosi del costrutto switch, scrivere un piccolo programmino che simuli una calcolatrice. Questo, deve chiedere all'utente due numeri e un operatore matematico da scegliere. Infine deve essere mostrato in console il valore risultato dai due numeri e dall'operazione scelta dall'utente.

alert("Esercizio 3");

let val1 = parseInt(prompt("Inserire il primo numero:"));

let val2 = parseInt(prompt("Inserire il secondo numero:"));

let operator = prompt("Scegliere un operatore [+, -, *, /]");

let res;

switch (operator){
    case "+":
        res = val1 + val2;
        console.log(val1 + " " + operator + " " + val2 + " = " + res);
        break;
    case "-":
        res = val1 - val2;
        console.log(val1 + " " + operator + " " + val2 + " = " + res);
        break;
    case "*":
        res = val1 * val2;
        console.log(val1 + " " + operator + " " + val2 + " = " + res);
        break;
    case "/":
        res = val1 / val2;
            console.log(val1 + " " + operator + " " + val2 + " = " + res);
        break;
    default:
        console.log("L'operatore selezionato non è valido.");
} 

