const categoryItems = document.querySelector("#categories");
const items = categoryItems.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector(".list-header");
  const headerText = header.textContent;
  const itemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${itemsCount}`);
});
