import data from "./amazing.js";

let allEvents = data.events;
let date = data.currentDate;

let eventosFuturos = allEvents.filter(evento => evento.date > date);  

const template = document.querySelector("#card-template").content;
const fragment = document.createDocumentFragment();
const contenedorTarjetas = document.querySelector("#tarjetas-container");

eventosFuturos.forEach(evento => {
    template.querySelector("#image").src = evento.image;
    template.getElementById("title").textContent = evento.name;
    template.getElementById("description").textContent = evento.description;
    template.getElementById("price").textContent = "$" + evento.price;
    template.getElementById("url-detail").href = "./details.html?id="+ evento._id;

    const nodo = template.cloneNode(true);
    fragment.appendChild(nodo);
});

console.log(fragment);
contenedorTarjetas.appendChild(fragment);

let eventosFiltrado;
/* function filtrarEventos(){
    eventosFuturos = eventosFuturos.filter(evento => evento.category == );  
} */