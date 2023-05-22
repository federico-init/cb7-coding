import { generateWeatherCard, getWeatherData, qS } from "./fn/utils.js";

const rootEl = qS("#root");
const inputEl = qS("input");

inputEl.addEventListener("change", (evt) => {
  // rimuovo il content ad ogni nuova ricerca
  rootEl.textContent = "";

  //ricavo i dati da api
  getWeatherData(evt.target.value).then((cityData) =>
    rootEl.appendChild(generateWeatherCard(cityData))
  );
});
