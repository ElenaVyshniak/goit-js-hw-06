// Знаходимо елемент ul#categories
const categoriesList = document.getElementById("categories");

// Знаходимо всі елементи li.item в ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного li.item виконуємо наступні дії
categoryItems.forEach((categoryItem) => {
  // Знаходимо заголовок (тег <h2>) в поточному li.item
  const categoryTitle = categoryItem.querySelector("h2");

  // Знаходимо всі підкатегорії (елементи <li>) в поточному li.item
  const subcategories = categoryItem.querySelectorAll("li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${subcategories.length}`);
});
