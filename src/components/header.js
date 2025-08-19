const headerLi=()=>{
return `
<nav>
<h1 id="logo">Idealy</h1>
<ul class="menu">
<li><a href="https://es.pinterest.com/#inspiration" class="linkHeader">Inicio</a></li>
<li><a href="https://es.pinterest.com/ideas" class="linkHeader">Explorar</a></li>
<li><a href="https://create.pinterest.com/es-la/" class="linkHeader">Crear</a></li>
</ul>
<input type="text" placeholder="Search" id="searchInput"/>
<button id="searchB"><img src="./src/assets/buscar.png" alt="search icon"/></button>
<button id="blueMode"><img id="blueModeIcon" src="./src/assets/modo-oscuro.png" alt="dark mode icon"/></button>
<img src="./src/assets/perfil-del-usuario.png" alt="Profile image" class="profileimg"/>
  </nav>
`;
};

const themeBackg = () => {
  document.body.classList.toggle("blue");
};
const listeners = (verPBusqueda) => {//agregro a los listeners la 1ra busqueda para utilizar el logo
  const blueMode = document.querySelector("#blueMode");
  const blueModeIcon=document.querySelector("#blueModeIcon");
  blueMode.addEventListener("click", () => {
    themeBackg();
    if (document.body.classList.contains("blue")) {
   blueModeIcon.src = "./src/assets/modo-claro.png";
    } else {
    blueModeIcon.src = "./src/assets/modo-oscuro.png";
    }
  });
  const logo=document.querySelector("#logo");
  logo.addEventListener("click",()=>{
    if (typeof verPBusqueda==="function"){
      verPBusqueda();
    }
  } )
};

const printHeader = (verPBusqueda) => {
  document.querySelector("header").innerHTML = headerLi();
  listeners(verPBusqueda);
};

export default printHeader ;