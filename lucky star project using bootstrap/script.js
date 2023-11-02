const bar = document.querySelector(".fa-bars");
const toggleNav = document.querySelector(".toggle-nav");
const secText = document.querySelector(".sec-text");
bar.addEventListener("click", () => {
  toggleNav.classList.toggle("open");
  if (toggleNav.classList.contains("open")) {
    bar.classList.remove(".fa-bars");
    bar.classList.add("fa-xmark");
  } else {
    bar.classList.add(".fa-bars");
    bar.classList.remove("fa-xmark");
  }
});
const change = () => {
  setTimeout(() => {
    secText.textContent = "Web Design";
  }, 0);
  setTimeout(() => {
    secText.textContent = "Printing";
  }, 3500);
  setTimeout(() => {
    secText.textContent = "Magazine";
  }, 7000);
};
change();
setInterval(change, 10500);

const moonIcon = document.querySelector(".fa-moon");
moonIcon.addEventListener("click", () => {
  if (moonIcon.classList.contains("fa-sun")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
    document.body.style.backgroundColor = "white";
    document.body.classList.toggle("dark-theme")
  } else {
    document.body.style.backgroundColor = "black";
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
    document.body.classList.toggle("dark-theme");
  }
});
