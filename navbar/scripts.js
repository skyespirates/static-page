const bar = document.querySelector(".navbar__bar");
const menu = document.querySelector(".navbar__menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("active");
});
