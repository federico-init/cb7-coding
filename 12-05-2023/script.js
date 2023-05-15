// inspired by: https://dribbble.com/shots/5048198-Web-slider-interaction

const imgList = [
  "https://picsum.photos/id/13/300",
  "https://picsum.photos/id/15/300",
  "https://picsum.photos/id/191/300",
  "https://picsum.photos/id/251/300",
  "https://picsum.photos/id/257/300",
  "https://picsum.photos/id/289/300",
  "https://picsum.photos/id/316/300",
];

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

// seleziono il div root e creo gli elementi da mostrare sulla pagina
const rootEl = qS("#root");
const titleEl = cE("h1");
const imgEl = cE("img");
const parEl = cE("p");
const buttonWrapperEl = cE("div");
const buttonPrevEl = cE("button");
const buttonNextEl = cE("button");

// aggiungo proprietà/content agli elementi
let imgIndex = 0;
imgEl.src = imgList[imgIndex];
imgEl.alt = "random img";
titleEl.textContent = "Lorem Ipsum";
parEl.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod id non ipsam voluptate minima doloremque qui reiciendis odio soluta dolore.";
buttonWrapperEl.className = "button-wrapper";
buttonPrevEl.textContent = "<-";
buttonNextEl.textContent = "->";

// 'appendo' gli elementi al div root
buttonWrapperEl.append(buttonPrevEl, buttonNextEl);
rootEl.append(titleEl, imgEl, parEl, buttonWrapperEl);

// setInterval(() => {
//   imgIndex++;
//   if (imgIndex === imgList.length) imgIndex = 0;
//   imgEl.src = imgList[imgIndex];
// }, 4000);

buttonPrevEl.addEventListener("click", () => {
  if (imgIndex <= 0) imgIndex = imgList.length - 1;

  imgIndex--;
  imgEl.src = imgList[imgIndex];
});

buttonNextEl.addEventListener("click", () => {
  if (imgIndex > imgList.length - 2) imgIndex = 0;

  imgIndex++;
  imgEl.src = imgList[imgIndex];
});
