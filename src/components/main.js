//primera funcion, voy a hacer el pin que contiene la img, con boton photo y boton like, agrego perfil de usuario,
//segunda funcion img de la persona

//crear estructura de un pin

//crear galeria vacia

//imprimir los resultados en la galeria 



//mostrar la galeria en pantalla con los elementos segun corresponda si hubo busqueda o no
import { galeriaPinTemplate } from './galeriaPinTemplate.js';
import { galeriaListeners } from './galeriaListeners.js';
import { printItems } from './printItems.js';
import { searchPhotos } from './searchPhotos.js';

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

export default printgaleriaTemplate;
export { printItems };
//para guardar la primera busqueda lo divido en 3 partes.. el llamado al evento del header, que pide a la funcion 
//  luego la funcion en el index principal donde cargo mi palabra clave y la busqueda,
//en la galeria de eventos tengo el evento para guardar el valor ingresado del input y guardar en caso de que no exista
//en el main para pintar la galeria con el backup de la imagen, en caso de no tenerla genera un predeterminado con la palabra corgi