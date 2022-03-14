const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const entries = {};

  formData.forEach((value, name) => (entries[name] = value));

  const isEmptyField = Object.values(entries).includes("");

  if (isEmptyField) {
    alert("Все поля должны быть заполнены.");
  } else {
    console.log(entries);
    event.currentTarget.reset();
  }
}
