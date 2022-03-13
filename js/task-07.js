const refs = {
  inputRange: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", () => {
  refs.spanText.style.fontSize = `${refs.inputRange.valueAsNumber}px`;
});
