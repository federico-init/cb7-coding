export const qS = (el) => document.querySelector(el);
export const cE = (el) => document.createElement(el);

const API_KEY = "e170f9d91c6f06ef578bfd8e167a7861";

export const getWeatherData = async (cityName) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );

  const data = await res.json();

  return data;
};

export const generateWeatherCard = (cityWeatherData) => {
  const wrapperEl = cE("div");
  const cityNameEl = cE("h2");
  const tempEl = cE("p");
  const weatherImgEl = cE("img");

  const imgUrl = "http://openweathermap.org/img/w/";

  wrapperEl.className = "cityWeather";
  cityNameEl.textContent = cityWeatherData.name;
  tempEl.textContent = "Temperature: " + cityWeatherData.main.temp + "°C";
  weatherImgEl.src = imgUrl + cityWeatherData.weather[0].icon + ".png";

  wrapperEl.append(cityNameEl, tempEl, weatherImgEl);

  return wrapperEl;
};
