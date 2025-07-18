const timers = [
    { id: "ice_to_drivethrough", duration: 20, label: "Take ice to drive through" },
    { id: "dining_room_check", duration: 45, label: "Dining Room Check" },
    { id: "empty_trash_cans", duration: 30, label: "Empty the Trash Can" },
    // { id: "make_coffee", duration: 30, label: "Make Coffee" },
{ id: "make_lemonade", duration: 50, label: "Make Lemonade" },
]

/*
    Each timer should have a button to reset
    When you click reset, it should reset it to the time

    Pause a timer

    Add your own timer using a form

    Allow users to delete timers

    Toggle at the top - Breakfast, Lunch, Dinner
    Some timers would go away entirely based on the mode

    When adding a form, specify if it is for breakfast, lunch, dinner, all.

    Progress circle with color change - red, amber, green
*/ 

renderCounters(timers);

setInterval(function() {
    updateTimers(timers)
}, 1000);


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

function updateTimers(timers) {
    for (let i = 0; i < timers.length; i++) {
        
        if (timers[i].duration > 0) {
            timers[i].duration--;
            let timerCounter = document.getElementById(timers[i].id + '_counter');
            timerCounter.innerText = timers[i].duration;
        }
        
    }
}


