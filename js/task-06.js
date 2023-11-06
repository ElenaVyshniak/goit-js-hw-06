const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.value.length;
  const dataLength = input.getAttribute("data-length");
  const dataValue = parseInt(dataLength);

  if (inputLength === dataValue) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }

  console.log(inputLength);
  console.log(dataValue);
});
