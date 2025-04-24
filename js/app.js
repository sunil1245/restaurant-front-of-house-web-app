//const setTaskInterval = setInterval(getIceForDriveThru, 5000);
let countDown = 20;
console.log(countDown)
renderCounter();

setInterval(updateTimer, 1000);

function getIceForDriveThru() {
    alert("Take ice to Drive-Thru");
}

function displaySuccessMessage() {
    countDown = 20;
    renderCounter();
}

function updateTimer() {
    if (countDown > 0) {
        countDown--;
        console.log(countDown);
    }

    renderCounter();
}

function renderCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.innerHTML = countDown;
}