// # Esercizio 2
// Supponiamo di avere un oggetto che rappresenta un libro con le seguenti proprietà: titolo, autore e anno di pubblicazione.
// Usando il destructuring, crea tre variabili separate (titolo, autore, anno) a partire dall'oggetto "libro".

let libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

// grazie al destructuring possiamo creare le nuove variabili nel seguente modo:

const {
  titolo = "Default",
  autore = "Default",
  anno = "Default",
  avanzato = "Default",
} = libro;

// aggiungo alle variabili dichiarate dei valori default che fanno da fallback:
// nel caso in cui l'oggetto libro non includa una certa proprietà (ad esempio 'avanzato') questa invece di assumere il valore undefined assumerà il valore di fallback assegnato

console.log(titolo); // Il nome della Rosa
console.log(autore); // Umberto Eco
console.log(anno); // 1980
console.log(avanzato); // default

// nel caso di destructuring di oggetti le variabili devono avere lo stesso nome delle proprietà dell'oggetto di riferimento
// a meno di rinominarle come nel seguente esempio:

const { titolo: bookTitle } = libro;

console.log(titolo); // Il nome della Rosa
console.log(bookTitle); // Il nome della Rosa
