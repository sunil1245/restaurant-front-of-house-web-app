const timers = [
    { id: "ice_to_drivethrough", duration: 20, label: "Take ice to drive through" },
    { id: "empty_trash_cah", duration: 30, label: "Empty the Trash Can" },
]

/*
    Arrays
    Objects
    forEach loop
    Creating DOM elements via JavaScript
    Appending elements to the document
*/ 

console.log("Ice for Drive-Thru ID", timers[0].id);
console.log("Ice for Drive-Thru duration", timers[0].duration);
console.log("Ice for Drive-Thru label", timers[0].label);


//const setTaskInterval = setInterval(getIceForDriveThru, 5000);
let iceForDriveThruCountDown = timers[0].duration;
let diningRoomCheckCountDown = 30;
let emptyTrashCansCountDown = 45;

renderCounterIceForDriveThru();
renderCounterDiningRoomCheck();
renderCounterEmptyTrashCans();



setInterval(updateIceForDriveThruTimer, 1000);
setInterval(updateDiningRoomCheckTimer, 1000);
setInterval(updateEmptyTrashCansTimer, 1000);

function getIceForDriveThru() {
    alert(timers[0].label);
}

function resetIceDriveThruCounter() {
    iceForDriveThruCountDown = timers[0].duration;
    renderCounterIceForDriveThru();
}

function resetDiningRoomCounter() {
    diningRoomCheckCountDown = 30;
    renderCounterDiningRoomCheck();
}

function resetEmptyTrashCansCounter() {
    emptyTrashCansCountDown = 45;
    renderCounterEmptyTrashCans();
}

function displayceDriveThruSuccessMessage() {
    resetIceDriveThruCounter();
}

function displayDiningRoomSuccessMessage() {
    resetDiningRoomCounter();
}

function displayEmptyTrashCansSuccessMessage() {
    resetEmptyTrashCansCounter();
}

function updateIceForDriveThruTimer() {
    if (iceForDriveThruCountDown > 0) {
        iceForDriveThruCountDown--;
        //console.log(countDown);
    }
    renderCounterIceForDriveThru();
}

function updateDiningRoomCheckTimer() {
    if (diningRoomCheckCountDown > 0) {
        diningRoomCheckCountDown--;
        //console.log(countDown);
    }
    renderCounterDiningRoomCheck();
}


function updateEmptyTrashCansTimer() {
    if (emptyTrashCansCountDown > 0) {
        emptyTrashCansCountDown--;
        //console.log(countDown);
    }
    renderCounterEmptyTrashCans();
}


function renderCounterIceForDriveThru() {
    const counterIceForDriveThru = document.getElementById("iceForDriveThruCounter");
    counterIceForDriveThru.innerHTML = iceForDriveThruCountDown;
}

function renderCounterDiningRoomCheck() {
    const counterDiningRoomCheck = document.getElementById("diningRoomCheckCounter");
    counterDiningRoomCheck.innerHTML = diningRoomCheckCountDown;
}

function renderCounterEmptyTrashCans() {
    const counterEmptyTrashCans = document.getElementById("emptyTrashCansCounter");
    counterEmptyTrashCans.innerHTML = emptyTrashCansCountDown;
}
