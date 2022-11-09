// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
import { galleryItems } from './gallery-items';

const galleryDiv = document.querySelector('.gallery');

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryDiv.addEventListener('click', onGalleryClick);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"
    /></a></div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
