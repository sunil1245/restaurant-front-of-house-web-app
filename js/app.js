//const setTaskInterval = setInterval(getIceForDriveThru, 5000);
let countDown = 20;
console.log(countDown)
setInterval(updateTimer, 1000);

function getIceForDriveThru() {
    alert("Take ice to Drive-Thru");
}

function displaySuccessMessage() {
    alert("Great job!");
    //clearInterval(setTaskInterval);
}

function updateTimer() {
    if (countDown > 0) {
        countDown--;
        console.log(countDown);
    }
}