const timers = [
    { id: "ice_to_drivethrough", duration: 20, label: "Take ice to drive through" },
    { id: "dining_room_check", duration: 45, label: "Dining Room Check" },
    { id: "empty_trash_cans", duration: 30, label: "Empty the Trash Can" },
]

/*
    Arrays
    Objects
    forEach loop
    Creating DOM elements via JavaScript
    Appending elements to the document
*/ 

function renderCounters(timers) {
    for (let i = 0; i < timers.length; i++) {
        const timerContainer = document.getElementById('container');
        timerContainer.innerHTML += 
        "<div class='timer-container'><div id='" + 
            timers[i].id + "'>" + 
            timers[i].label + 
            "</div><div id = '" + 
            timers[i].id + 
            "_counter'>" + timers[i].duration + 
        "</div></div>";
        
    }


}

renderCounters(timers);

