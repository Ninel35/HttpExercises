import { fetchImages } from './pixabay-api';

const form = document.querySelector('.search-form');
const list = document.querySelector('.search-list');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  fetchImages(evt.target.elements.search.value)
    .then(({ hits }) => renderImages(hits))
    .catch(error => console.log(error));
});

export function renderImages(images) {
  console.log(images);
  const markup = images
    .map(image => {
      return `
          <li>
          <img src='${image.previewURL}'>
            <p><b>Likes</b>: ${image.q}</p>
            <p><b>Views</b>: ${image.image_type}</p>
            <p><b>Comments</b>: ${image.comments}</p>
            <p><b>Downloads</b>: ${image.safesearch}</p>
          </li>
      `;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
