const header = document.getElementById("header");
const menu = document.getElementById("menu");

menu.onclick = () => {
  header.classList.toggle("open");
  // if (header.classList.contains("open")) {
  //   header.classList.remove("open");
  // } else {
  //   header.classList.add("open");
  // }
}