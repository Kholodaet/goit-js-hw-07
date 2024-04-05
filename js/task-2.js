const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   const gallery = document.querySelector(".gallery");

//   const fragment = document.createDocumentFragment();

//   images.forEach((imageData) => {
//     const listItem = document.createElement("li");
//     const image = document.createElement("img");

//     image.src = imageData.url;
//     image.alt = imageData.alt;

//     listItem.appendChild(image);
//     fragment.appendChild(listItem);
//   });

//   gallery.appendChild(fragment);
// });

const list = document.querySelector(".gallery");

const forImages = images
  .map(
    (image) =>
      `<li class="gallery-li"><img src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");
console.log(forImages);

list.innerHTML = forImages;
