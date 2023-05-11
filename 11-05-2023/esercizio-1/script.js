// # Esercizio 1

// Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento (il body della pagina HTML sarà vuoto)

const quotes = [
  {
    id: 1,
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    id: 2,
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    id: 3,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    id: 4,
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    id: 5,
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
];

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const listItemGen = (obj) => {
  const listItemEl = cE("li");

  listItemEl.id = obj.id;
  listItemEl.textContent = obj.quote + "   [" + obj.author + "]";

  return listItemEl;
};

const listEl = cE("ul");

quotes.forEach((obj) => listEl.append(listItemGen(obj)));

document.body.append(listEl);
