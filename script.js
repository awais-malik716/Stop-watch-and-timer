let checkTime = () => {

    let timeNow = new Date();

    let hours = timeNow.getHours();

    document.querySelector("#hours").innerHTML = hours;

    let minutes = timeNow.getMinutes();

    document.querySelector("#minutes").innerHTML = minutes;

    let seconds = timeNow.getSeconds();

    document.querySelector("#seconds").innerHTML = seconds;

}

setInterval(checkTime, 1000);

// stop watch

let stopMiniSeconds = 0;
let secondsStop = 0;
let minutesStop = 0;
let hourStop = 0;


let startWatch = () => {


    let miniSecondsPlus = () => {
        stopMiniSeconds++;
        document.querySelector("#mini-seconds-plus").innerHTML = stopMiniSeconds;
        if (stopMiniSeconds == 100) {
            stopMiniSeconds -= 100;
        }
    }
    setInterval(miniSecondsPlus, 10)


    let secondsPlus = () => {
        secondsStop++;
        document.querySelector("#seconds-plus").innerHTML = secondsStop;
        if (secondsStop == 60) {
            secondsStop -= 60;
        }
    }

    setInterval(secondsPlus, 1000)

    let minutesPlus = () => {
        minutesStop++;
        document.querySelector("#minutes-plus").innerHTML = minutesStop;
        if (minutesStop == 60) {
            minutesStop -= 60;
        }
    }

    setInterval(minutesPlus, 61000)

    let hourPlus = () => {
        hourStop++;
        document.querySelector("hour-plus").innerHTML = hourStop;
        if (hourStop = 60) {
            hourStop -= 60;
        }
    }
}

let reset = () => {
    stopMiniSeconds = 0;
    secondsStop = 0;
    minutesStop = 0;
    hourStop = 0;
}


// Timer

let givenTime = document.querySelector("#time-input");

let time = document.querySelector("#timer");

let startTimer = () => {
    time.value--;

    if (time.value == 0) {
        time++;
    }
}

let setTimer = () => {
    time.value = (givenTime.value);
    setInterval(startTimer, 1000);
}
