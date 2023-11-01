const bar = document.querySelector(".fa-bars");
const toggleNav = document.querySelector(".toggle-nav");
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
