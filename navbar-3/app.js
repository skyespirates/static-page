const burger = document.querySelector(".burger");
const menus = document.querySelector(".menus");

burger.addEventListener("click", () => {
  menus.classList.toggle("active");
});
