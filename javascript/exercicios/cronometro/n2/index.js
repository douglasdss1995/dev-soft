let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let interval;
let running = false;

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("timer").innerText =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + "." +
        (milliseconds < 100 ? "0" + milliseconds : milliseconds);
}

document.getElementById("start").addEventListener("click", () => {
    if (!running) {
        interval = setInterval(updateTimer, 1); // Atualiza a cada 10ms
        running = true;
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
    running = false;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerText = "00:00:00.000";
    document.getElementById("timeMarks").innerHTML = ""; // Limpa os marcadores
});

document.getElementById("mark").addEventListener("click", () => {
    let markTime = document.getElementById("timer").innerText;
    let listItem = document.createElement("li");
    listItem.textContent = markTime;
    document.getElementById("timeMarks").appendChild(listItem);
});
