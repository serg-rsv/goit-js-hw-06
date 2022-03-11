const list = document.body.querySelector("#categories");
const categories = list.children;

console.log("Number of categories:", categories.length);

for (const element of categories) {
  console.log("\nCategory:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
}
