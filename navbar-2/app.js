const toggleNavbar = () => {
  const burger = document.querySelector(".navbar__burger");
  const menu = document.querySelector(".navbar__menu");
  const list = document.querySelectorAll("li");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    list.forEach((item, index) => {
      item.style.animation = item.style.animation
        ? ""
        : `navbarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
    burger.classList.toggle("toggle");
  });
};
toggleNavbar();
