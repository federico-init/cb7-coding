// definisco una funzione per la selezione di uno o più elementi
export const qS = (element) => document.querySelector(element);

export const qSA = (elements) => document.querySelectorAll(elements);

// definisco una funzione per la creazione dinamica degli elementi
export const createElement = (type, content, ...attrs) => {
  const element = document.createElement(type);
  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));

  return element;
};

//TODO: creare button filtri

export const genUser = (userData) => {
  const wrapperEl = createElement("div", "", {
    name: "class",
    value: "userItem",
  });

  const userProfileEl = createElement("div", "", {
    name: "class",
    value: "user__profile",
  });

  const userImageEl = createElement(
    "img",
    "",
    {
      name: "src",
      value: `./img/${userData.id}.png`,
    },
    {
      name: "alt",
      value: `user ${userData.id} image`,
    },
    {
      name: "class",
      value: "user__image",
    }
  );

  const userNameUsernameEl = createElement("div", "", {
    name: "class",
    value: "user__nameUsername",
  });

  const userNameEl = createElement("p", userData.name, {
    name: "class",
    value: "user__name",
  });

  const userAliasEl = createElement("p", "@" + userData.username, {
    name: "class",
    value: "user__username",
  });

  const userEmailEl = createElement("a", userData.email, {
    name: "class",
    value: "user__email",
  });

  const userWebsiteEl = createElement("a", userData.website, {
    name: "class",
    value: "user__website",
  });

  userNameUsernameEl.append(userNameEl, userAliasEl);

  userProfileEl.append(userImageEl, userNameUsernameEl);

  wrapperEl.append(userProfileEl, userEmailEl, userWebsiteEl);

  return wrapperEl;
};
