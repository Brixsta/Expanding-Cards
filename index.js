const cards = document.querySelectorAll(".card");

cards.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("change");
    i.childNodes[1].classList.toggle("change");
  });
});
