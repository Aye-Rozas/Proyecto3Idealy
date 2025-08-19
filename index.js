//console.log("index.js funciona");
import printHeader from "./src/components/header";
import printFooter from "./src/components/footer";
import printgaleriaTemplate ,{printItems} from "./src/components/main";

const verPBusqueda=()=>{
  const keyword=localStorage.getItem("firstSearchKeyword");
  const backupImg=localStorage.getItem("firstSearchResults");
  if(!keyword||!backupImg) return;
  printItems(JSON.parse(backupImg));
};
document.addEventListener("DOMContentLoaded",()=>{
printHeader(verPBusqueda);
printFooter();
printgaleriaTemplate ();
})

