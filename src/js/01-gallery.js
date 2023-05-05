// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const createItems = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
  })
  .join('');

const galleryContain = document.querySelector('.gallery');
galleryContain.insertAdjacentHTML('beforeend', createItems);
let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});
galleryContain.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});