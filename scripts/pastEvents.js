import data from "./amazing.js";

function pastEvents(eventsNow, date){
    let enventosPasados = [];
    for (let i = 0; i < eventsNow.length; i++) {
        if(Date.parse(date) > Date.parse(eventsNow[i].date)){
            enventosPasados.push(eventsNow[i]);
        }
    }
    return enventosPasados;
}
let eventosPasados = pastEvents(data.events,data.currentDate);



const divTarjetas = document.getElementById('tarjetas')
let tarjetas = ''

if(eventosPasados.length != 0){
    for(let evento of eventosPasados){
        tarjetas += 
        `<div class="card">
            <img class="rounded-4 shadow cardimg" src="${evento.image}" alt="card1">
            <div class="card-body mx-auto text-center">
                <h2 class="">${evento.name}</h2>
                <p class="card-text">${evento.description}</p>
            </div>
            <div class="clearfix pb-3">
                <p class="float-start mx-3">Price: $${evento.price}</p>
                <a href="./details#${evento._id}.html" class="btn btncard float-end me-3">See More...</a>
            </div>
        </div>`
    }
    divTarjetas.innerHTML = tarjetas;
}
else{
    tarjetas = 
    `<h3>No existen tarjetas para mostrar que correspondan con los filtros.</h3>`
}