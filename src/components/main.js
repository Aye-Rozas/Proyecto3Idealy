//primera funcion, voy a hacer el pin que contiene la img, con boton photo y boton like, agrego perfil de usuario,
//segunda funcion img de la persona
import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  });
  return images;
};
//crear estructura de un pin
const pinTemplate = (item, userPhoto) => {
  const liPin = document.createElement('li');
  const divPin = document.createElement('div');
  const divButtonB = document.createElement('div');
  const buttonBlue = document.createElement('button');
  const divLinks = document.createElement('div');
  const a1 = document.createElement('a');
  const divUser = document.createElement('div');
  const imgUser = document.createElement('img');
  const divSecL = document.createElement('div');
  const a2 = document.createElement('a');
  const imgPhoto = document.createElement('img');
  const a3 = document.createElement('a');
  const imgLike = document.createElement('img');
  //clases
  liPin.className = 'pinItem';
  divPin.className = 'pinInfo';
  divUser.className = 'user';
  divButtonB.className = 'buttonBlue';
  divLinks.className = 'links';
  //contenido
  liPin.style.backgroundImage = `url("${item.urls.regular}")`;
  liPin.style.border = ` 10px solid ${item.color}`;
  buttonBlue.textContent = `Visitar`;
  imgUser.src = userPhoto;
  a1.className = 'completLink';
  a1.href = item.links.html;
  a1.textContent = item.links.html;
  a2.href = item.urls.full;
  imgPhoto.src = './src/assets/camara-fotografica.png';
  a3.href = item.urls.full;
  imgLike.src = './src/assets/corazon.png';
  //ubicacion de cada uno dentro
  a2.appendChild(imgPhoto);
  a3.appendChild(imgLike);
  divSecL.appendChild(a2);
  divSecL.appendChild(a3);
  divUser.appendChild(imgUser);
  divLinks.appendChild(a1);
  divLinks.appendChild(divSecL);
  divPin.appendChild(divLinks);
  divButtonB.appendChild(buttonBlue);
  divPin.appendChild(divButtonB);
  divPin.appendChild(divUser);
  liPin.appendChild(divPin);

  return liPin;
};
//crear galeria vacia
const galeriaPinTemplate = () => {
  const ul = document.createElement('ul');
  ul.className = 'galeria';
  return ul;
};
//imprimir los resultados en la galeria 
const printItems = (items) => {
  const galeria = document.querySelector('.galeria');
  galeria.innerHTML = '';
  for (const item of items) {
    const userPhoto =
      item.user?.profile_image?.small || './src/assets/usuario.png';
    galeria.appendChild(pinTemplate(item, userPhoto));
  }
};

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
//mostrar la galeria en pantalla con los elementos segun corresponda si hubo busqueda o no
const printgaleriaTemplate = async () => {
  const main = document.querySelector('main');
  main.appendChild(galeriaPinTemplate());
  galeriaListeners();
  const backupImg = localStorage.getItem('firstSearchResults');
  if (backupImg) {
    printItems(JSON.parse(backupImg));
  } else {
    const {response:{results=[]}={}}=
    await searchPhotos("corgi");
    printItems(results);
  }
};

export { printItems };
export default printgaleriaTemplate;
//para guardar la primera busqueda lo divido en 3 partes.. el llamado al evento del header, que pide a la funcion 
//  luego la funcion en el index principal donde cargo mi palabra clave y la busqueda,
//en la galeria de eventos tengo el evento para guardar el valor ingresado del input y guardar en caso de que no exista
//en el main para pintar la galeria con el backup de la imagen, en caso de no tenerla genera un predeterminado con la palabra corgi