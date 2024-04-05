const elementsArray = document.querySelectorAll(".item");

const length = elementsArray.length;

console.log(`Number of categories: ${length}`);

elementsArray.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.getElementsByTagName("li").length}`);
});
