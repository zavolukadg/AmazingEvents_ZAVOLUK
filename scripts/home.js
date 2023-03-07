import data from "./amazing.js";

//Dado un arreglo de events y una fecha, retorna un ARREGLO con los eventos con fecha igual a la fecha pasada
function dateEvents(eventsNow, date){
    let delDia = [];
    console.log("Fecha Buscada: " + date);
    for (let i = 0; i < eventsNow.length; i++) {
        if(date == eventsNow[i].date){
            /* console.log("Encuentra Fecha Hoy"); */
            delDia.push(eventsNow[i]);
        }
        /* else{
           let fecha = Date.parse(eventsNow[i].date); 
           console.log("No encuentra fecha, fecha =" + fecha + "," + eventsNow[i].date); 
        } */
    }
    return delDia;
}
let eventosDelDia = dateEvents(data.events,data.currentDate);

let eventosCompletos = data.events;

const divTarjetas = document.getElementById('tarjetas')
let tarjetas = ''

if(eventosCompletos.length != 0){
    for(let evento of eventosCompletos){
        tarjetas += 
        `<div class="card">
            <img class="rounded-4 shadow cardimg" src="${evento.image}" alt="card1">
            <div class="card-body mx-auto text-center">
                <h2 class="">${evento.name}</h2>
                <p class="card-text">${evento.description}</p>
            </div>
            <div class="clearfix pb-3">
                <p class="float-start mx-3">Price: $${evento.price}</p>
                <a href="./details.html?id=${evento._id}" class="btn btncard float-end me-3">See More...</a>
            </div>
        </div>`
    }
}
else{
    tarjetas = 
    `<h3>No existen tarjetas para mostrar que correspondan con los filtros.</h3>`
}
divTarjetas.innerHTML = tarjetas;
