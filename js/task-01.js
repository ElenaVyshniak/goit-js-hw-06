// Знаходимо елемент ul#categories
const categoriesList = document.getElementById("categories");

// Знаходимо всі елементи li.item в ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій в консоль
console.log(`Кількість категорій: ${categoryItems.length}`);

// Для кожного li.item виконуємо наступні дії
categoryItems.forEach((categoryItem) => {
  // Знаходимо заголовок (тег <h2>) в поточному li.item
  const categoryTitle = categoryItem.querySelector("h2");

  // Знаходимо всі підкатегорії (елементи <li>) в поточному li.item
  const subcategories = categoryItem.querySelectorAll("li");

  // Виводимо текст заголовку і кількість підкатегорій в консоль
  console.log(`Категорія: ${categoryTitle.textContent}`);
  console.log(`Кількість підкатегорій: ${subcategories.length}`);
});
