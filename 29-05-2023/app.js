const navItems = document.querySelectorAll(".navItem");

// ad ogni click su un elemento della navbar all'elemento selezionato aggiungiamo 'active' e la rimuoviamo da tutte le altre
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
  });
});
