const inputElement = document.getElementById("validation-input");
const expectedLength = parseInt(inputElement.getAttribute("data-length"));

// Додаємо слухачика події blur до інпуту
inputElement.addEventListener("blur", () => {
  const userInputLength = inputElement.value.length;

  inputElement.classList.remove("valid", "invalid");

  if (userInputLength === expectedLength) {
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.add("invalid");
  }
});
