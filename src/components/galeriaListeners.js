import { searchPhotos } from './searchPhotos.js';
import { printItems } from './printItems.js';

const galeriaListeners = () => {
  const input = document.querySelector('#searchInput');
  const btn = document.querySelector('#searchB');
  btn.addEventListener('click', async () => {
    const keyword=input.value.trim();
    if (!keyword) return;

    const imagesData = await searchPhotos(keyword);
    const results = imagesData.response.results || [];
    //voy a guardar la primera busqueda si no existe antes
    if (!localStorage.getItem('firstSearchKeyword') && results.length > 0) {
      localStorage.setItem('firstSearchKeyword',keyword);
      localStorage.setItem('firstSearchResults', JSON.stringify(results));
    }
    printItems(results);
  });
};
export {galeriaListeners};