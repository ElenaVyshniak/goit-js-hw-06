// Знаходимо елементи, які нам потрібні
const counterValueElement = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

// Ініціалізуємо змінну counterValue і встановлюємо початкове значення 0
let counterValue = 0;

// Функція для оновлення текстового вмісту елементу span
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Додаємо слухачик кліків для кнопки зменшення
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

// Додаємо слухачик кліків для кнопки збільшення
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

// Оновлюємо інтерфейс з початковим значенням
updateCounterValue();
