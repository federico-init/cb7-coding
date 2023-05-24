// # Esercizio 1

// Supponiamo di avere un array con le seguenti informazioni: nome, cognome e paese di origine di una persona.
// Usando il destructuring, crea tre variabili separate (nome, cognome e paese) a partire dall'array "persona".

let persona = ["Mario", "Rossi", "Italia"];

// grazie al destructuring possiamo creare le nuove variabili nel seguente modo:

const [
  nome = "Default",
  cognome = "Default",
  paese = "Default",
  età = "Default",
] = persona;

// aggiungo alle variabili dichiarate dei valori default che fanno da fallback:
// nel caso in cui l'array 'persona' non includa un quarto valore, questo invece di assumere il valore undefined assumerà il valore di fallback assegnato

console.log(nome, cognome, paese, età); // Mario, Rossi, Italia
