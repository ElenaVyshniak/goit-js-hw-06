const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Знаходимо елемент ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Створюємо фрагмент документа для ефективного додавання всіх елементів
const fragment = document.createDocumentFragment();

// Для кожного інгредієнта у масиві ingredients
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент <li>
  const listItem = document.createElement("li");

  // Додаємо назву інгредієнта як текстовий вміст елемента <li>
  listItem.textContent = ingredient;

  // Додаємо клас "item" до створеного елемента
  listItem.classList.add("item");

  // Додаємо створений елемент <li> до фрагмента
  fragment.appendChild(listItem);
});

// Вставляємо всі створені елементи <li> однією операцією у список ul#ingredients
ingredientsList.appendChild(fragment);
