//console.log("index.js funciona");
import printHeader from "./src/components/header";
import printFooter from "./src/components/footer";
import printgaleriaTemplate ,{printItems} from "./src/components/main";
import { firstSearch } from "./src/components/galeriaListeners";

const verPBusqueda=()=>{
  if(firstSearch && firstSearch.results.length>0){
  printItems(firstSearch.results);}
};
document.addEventListener("DOMContentLoaded",()=>{
printHeader(verPBusqueda);
printFooter();
printgaleriaTemplate ();
})

