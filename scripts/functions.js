function getAllEvents(data){
    return data.events;
}

function getPastEvents(data){
    let allEvents = data.events;
    let date = data.currentDate;
    let pastEvents = allEvents.filter(evento => evento.date < date);
    return pastEvents;
}

function getUpcomingEvents(data){
    let allEvents = data.events;
    let date = data.currentDate;
    let futureEvents = allEvents.filter(evento => evento.date > date);
    return futureEvents;
}

export {getAllEvents,getPastEvents,getUpcomingEvents};