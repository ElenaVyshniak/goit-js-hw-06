// Знаходимо елементи, які нам потрібні
const nameInputElement = document.getElementById("name-input");
const nameOutputElement = document.getElementById("name-output");

// Додаємо слухачика події input до інпуту
nameInputElement.addEventListener("input", () => {
  // Отримуємо поточне значення інпуту
  const inputValue = nameInputElement.value;

  // Встановлюємо текст спану в залежності від значення інпуту
  nameOutputElement.textContent = inputValue ? inputValue : "Anonymous";
});
