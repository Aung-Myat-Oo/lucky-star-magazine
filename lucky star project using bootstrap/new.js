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


const clock = document.getElementById("clock");
function updateTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  let timeSet = "";
  timeSet += `${hours > 12 ? hours - 12 : hours}:${
    minutes == 0 ? "" : minutes
  }:${seconds}${hours > 12 ? " pm" : " am"}`;
  clock.innerHTML = timeSet;
}
setInterval(updateTime, 1000);

const moonIcon = document.querySelector(".fa-moon");
moonIcon.addEventListener("click", () => {
  if (moonIcon.classList.contains("fa-sun")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
    document.body.style.backgroundColor = "white";
    document.body.classList.toggle("dark-theme");
  } else {
    document.body.style.backgroundColor = "black";
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
    document.body.classList.toggle("dark-theme");
  }
});