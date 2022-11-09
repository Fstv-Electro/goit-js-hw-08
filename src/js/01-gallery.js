import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryDiv = document.querySelector('.gallery');

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup);

// Gallery items

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `

      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"
        alt="${description}"
        />
    </a>

  `;
    })
    .join('');
}

const lightboxList = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
