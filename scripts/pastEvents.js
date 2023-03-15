import data from "./amazing.js";
import {getAllEvents, getPastEvents} from "./functions.js";
import {createCards} from "./cards.js";
import {getCategories} from "./categories.js";
import {doubleSearch,checksFilter} from "./searchFunctions.js";

let pastEvents = getPastEvents(data);
let allEvents = getAllEvents(data); 
createCards(pastEvents);
getCategories(allEvents);

const btnBuscador = document.getElementById("btnBuscador");
const search = document.querySelector('#textSearch');
const checksContainer = document.getElementById("checks-container");

btnBuscador.onclick = () =>{
    let eventosFIltrado = doubleSearch(pastEvents);
    createCards(eventosFIltrado);
}

checksContainer.addEventListener('change', (event) => {
    let eventosFIltrado = doubleSearch(pastEvents);
    createCards(eventosFIltrado);
});

search.addEventListener('keyup', () => {
    if(search.value == null || search.value == undefined || search.value == ""){
        let eventosFiltrados = checksFilter(pastEvents);
        createCards(eventosFiltrados);    
    }
});


