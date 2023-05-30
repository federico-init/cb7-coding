// dichiaro una funzione per la creazione degli elementi
const cE = (type) => document.createElement(type);

// dichiaro la funzione per la generazione dinamica di elementi 'tweet'
export const tweetGen = (tweetData) => {
  // creo il contenitore dell'intero post
  const wrapperEl = cE("div");
  // creo l'elemento dell'immagine di profilo
  const profileImgEl = cE("img");
  // creo un contenitore per il contenuto testuale del post
  const contentEl = cE("div");

  // di seguito creo gli elementi che compongono la parte testuale del post
  // inserisco name e username in un container
  const profileNameEl = cE("div");
  const nameEl = cE("span");
  const userNameEl = cE("span");

  const tweetTextEl = cE("p");
  const reactionsEl = cE("p");
  //TODO: inserire icona reactions

  wrapperEl.className = "tweet";

  // definisco una source placeholder per l'immagine del profilo per problemi riscontrati a lezione con DummyJson
  const placeholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  profileImgEl.src = tweetData.user?.image || placeholder;
  profileImgEl.alt = tweetData.user?.username + "profile image";

  contentEl.className = "tweet__content";
  profileNameEl.className = "tweet__name_userName";
  nameEl.textContent = tweetData.user?.firstName + tweetData.user?.lastName;
  userNameEl.textContent = "@" + tweetData.user?.username;
  tweetTextEl.textContent = tweetData.body;
  reactionsEl.textContent = tweetData.reactions;

  profileNameEl.append(nameEl, userNameEl);
  contentEl.append(profileNameEl, tweetTextEl, reactionsEl);
  wrapperEl.append(profileImgEl, contentEl);

  return wrapperEl;
};
