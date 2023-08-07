const menu = document.querySelector(".mobilemenu")

const Open = () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    }
}
const Close = () => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
};