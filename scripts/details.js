import data from "./amazing.js";

const allEvents = data.events;

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

let eventoSeleccionado = allEvents.find(evento => evento._id == id);
const tarjetaDetalle = document.getElementById("tarjetas-detail");

//Se utiliza para modificar el formato de la fecha a DD/MM/AAAA
let fechaAuxiliar = new Date(eventoSeleccionado.date);
fechaAuxiliar.setDate(fechaAuxiliar.getDate() + 1);
let fechaEvento = fechaAuxiliar.toLocaleDateString();

let tarjeta = 
    `<div class="col col-sm-7">
        <img class="rounded-4 shadow" src="${eventoSeleccionado.image}" alt="cardImage">
    </div>
    <div class="col">
        <div class="row p-2">
            <div class="col-3"><label><b>Name:</b></label></div>
            <div class="col">${eventoSeleccionado.name}</div>
        </div>
        <div class="row p-2">
            <div class="col-3"><label><b>Date:</b></label></div>
            <div class="col">${fechaEvento}</div>
        </div>
        <div class="row p-2">
            <div class="col-5"><label><b>Description:</b></label></div>
            <div class="col">${eventoSeleccionado.description}</div>
        </div>
        <div class="row p-2 d-flex">
            <div class="col-5"><label><b>Category:</b></label></div>
            <div class="col">${eventoSeleccionado.category}</div>
        </div>
        <div class="row p-2">
            <div class="col-3"><label><b>Place:</b></label></div>
            <div class="col">${eventoSeleccionado.place}</div>
        </div>
        <div class="row p-2">
            <div class="col-4"><label><b>Capacity:</b></label></div>
            <div class="col">${eventoSeleccionado.capacity} Persons</div>
        </div>
        <div class="row p-2">
            <div class="col-3"><label><b>Price:</b></label></div>
            <div class="col">$${eventoSeleccionado.price}</div>
        </div>
    </div>`

tarjetaDetalle.innerHTML = tarjeta;