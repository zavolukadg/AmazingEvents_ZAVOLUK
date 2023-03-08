import data from "./amazing.js";

let eventosPasados = [];

function pastEvents(eventsNow, date){
    eventosPasados = [];
    for (let i = 0; i < eventsNow.length; i++) {
        if(Date.parse(date) > Date.parse(eventsNow[i].date)){
            eventosPasados.push(eventsNow[i]);
        }
    }
}
pastEvents(data.events,data.currentDate);

colocarTarjetas();

function colocarTarjetas(){
    const divTarjetas = document.getElementById('tarjetas');
    let tarjetas = '';

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
                    <a href="./details.html?id=${evento._id}" class="btn btncard float-end me-3">See More...</a>
                </div>
            </div>`
        }
        divTarjetas.innerHTML = tarjetas;
    }
    else{
        tarjetas = 
        `<h3>No existen tarjetas para mostrar que correspondan con los filtros.</h3>`
    }
    console.log("Finaliza la carga de tarjetas: " + eventosPasados.length);
}

let btnBuscador = document.getElementById("btnBuscador");

btnBuscador.onclick = () =>{
    pastEvents(data.events,data.currentDate);
    let keywordToSearch = document.getElementById('textSearch').value; 
    let keyword = keywordToSearch.toLowerCase();
    eventosPasados = eventosPasados.filter(evento => evento.name.toLowerCase().includes(keyword));
    console.log("Finaliza el filtro: " + eventosPasados.length);
    colocarTarjetas();
}
