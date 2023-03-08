import data from "./amazing.js";

let allEvents = data.events;
let date = data.currentDate;

let eventosFuturos = allEvents.filter(evento => evento.date > date); 


const template = document.querySelector("#card-template").content;
const fragment = document.createDocumentFragment();
const contenedorTarjetas = document.querySelector("#tarjetas-container");

function colocarTarjetas(){
    eventosFuturos.forEach(evento => {
        template.querySelector("#image").src = evento.image;
        template.getElementById("title").textContent = evento.name;
        template.getElementById("description").textContent = evento.description;
        template.getElementById("price").textContent = "$" + evento.price;
        template.getElementById("url-detail").href = "./details.html?id="+ evento._id;
    
        const nodo = template.cloneNode(true);
        fragment.appendChild(nodo);
    });
    contenedorTarjetas.appendChild(fragment);
    console.log("Finaliza colocar tarjetas");
}

/* colocarTarjetas(); */


let eventosFiltrado;
function filtrar(){
    let keywordToSearch = document.getElementById("textSearch").textContent; 
    let keyword =   keywordToSearch.toLowerCase();
    eventosFuturos = eventosFuturos.filter(evento => evento.name.toLowerCase().indexOf(keyword) > -1);
    colocarTarjetas();
}

/* function filtrarEventos(){
    eventosFuturos = eventosFuturos.filter(evento => evento.category == );  
} */
