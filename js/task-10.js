function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("div > input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxWrapper: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let boxSize = 30;
  const arrOfBoxes = [];

  for (let i = 1; i <= amount; i++) {
    const size = `${boxSize}px`;
    const color = getRandomHexColor();

    arrOfBoxes.push(createBox(size, color));
    boxSize += 10;
  }

  refs.boxWrapper.append(...arrOfBoxes);
}

function createBox(size, color) {
  const divEl = document.createElement("div");
  divEl.style.width = size;
  divEl.style.height = size;
  divEl.style.backgroundColor = color;

  return divEl;
}

function destroyBoxes() {
  refs.boxWrapper.innerHTML = "";
}

refs.btnCreate.addEventListener("click", onCreateClick);
refs.btnDestroy.addEventListener("click", onDestroyClick);

function onCreateClick() {
  createBoxes(refs.input.value);
}

function onDestroyClick() {
  destroyBoxes();
}
