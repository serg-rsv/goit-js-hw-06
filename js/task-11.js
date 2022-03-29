function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const btnColorEl = document.querySelector(".change-color");
let color = getRandomHexColor();
btnColorEl.style.background = color;

btnColorEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  colorEl.textContent = color;
  document.body.style.backgroundColor = color;

  color = getRandomHexColor();
  btnColorEl.style.background = color;
}
