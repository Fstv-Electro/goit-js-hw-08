import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryDiv = document.querySelector('.gallery');

// galleryDiv.addEventListener('click', onGalleryClick);

const makeGalleryMarkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item href="${item.original}">
    <img class="gallery__image" src="${item.preview}"
    alt="${item.description}"
    title="${item.description}"
    /></a>`
  )
  .join('');

galleryDiv.insertAdjacentHTML('beforeend', makeGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
