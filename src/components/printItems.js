import { pinTemplate } from "./pinTemplate";
const printItems = (items) => {
  const galeria = document.querySelector('.galeria');
  galeria.innerHTML = '';
  for (const item of items) {
    const userPhoto =
      item.user?.profile_image?.small || './src/assets/usuario.png';
    galeria.appendChild(pinTemplate(item, userPhoto));
  }
};
export {printItems};