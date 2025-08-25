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
export { pinTemplate };