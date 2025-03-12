const setTaskInterval = setInterval(getIceForDriveThru, 5000);

function getIceForDriveThru() {
    alert("Take ice to Drive-Thru");
}

function displaySuccessMessage() {
    alert("Great job!");
    clearInterval(setTaskInterval);
}

