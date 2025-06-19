const timers = [
    { id: "ice_to_drivethrough", duration: 20, label: "Take ice to drive through" },
    { id: "dining_room_check", duration: 45, label: "Dining Room Check" },
    { id: "empty_trash_cans", duration: 30, label: "Empty the Trash Can" },
        { id: "make_coffeee", duration: 30, label: "Make Coffee" },

]

/*
    Get the timers to work. 
    Need one loop that is running every second and every second it will take every timer that is active and decrement it by 1 - set Interval.
    Single function for update timers. Every second it will get called. console.log

    Every second look at every timer in the array and if the time is above zero, we want to decrement by 1. 
    Update the UI by re-rendering the timer every time that happens. 


    Stretch goal
    Each timer should have a button to reset
    When you click reset, it should reset it to the time
    
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

