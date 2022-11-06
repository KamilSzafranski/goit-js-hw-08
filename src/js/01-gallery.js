// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const createGallery = (element) => {
  const galleryItem = `<a class="gallery__item" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    alt="${element.description}"
  />
</a>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
};

galleryItems.forEach(createGallery);

// const lightBox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
