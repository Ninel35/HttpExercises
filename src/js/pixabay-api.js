const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40348092-da5e0a767129707faba1470d8';

export async function fetchImages(query) {
  return await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
