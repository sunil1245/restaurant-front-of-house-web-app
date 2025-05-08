//const setTaskInterval = setInterval(getIceForDriveThru, 5000);
let iceForDriveThruCountDown = 20;
let diningRoomCheckCountDown = 30;
let emptyTrashCansCountDown = 45;

renderCounterIceForDriveThru();
renderCounterDiningRoomCheck();
renderCounterEmptyTrashCans();



setInterval(updateIceForDriveThruTimer, 1000);
setInterval(updateDiningRoomCheckTimer, 1000);
setInterval(updateEmptyTrashCansTimer, 1000);

function getIceForDriveThru() {
    alert("Take ice to Drive-Thru");
}

function resetIceDriveThruCounter() {
    iceForDriveThruCountDown = 20;
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
