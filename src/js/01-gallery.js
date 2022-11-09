import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryDiv = document.querySelector('.gallery');

// galleryDiv.addEventListener('click', onGalleryClick);

function makeGalleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item href="${original}">
    <img class="gallery__image" src="${preview}"
    alt="${description}"
    title="${description}"
    /></a>`;
    })
    .join('');
  galleryDiv.innerHTML = markup;
}
makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
