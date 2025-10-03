var divTimer = document.getElementById("divTimer");
var btnStart = document.getElementById("btnStart");
var btnPause = document.getElementById("btnPause");
var btnReset = document.getElementById("btnReset");

// Define os valores iniciais
var hours = 0, minutes = 0, seconds = 0;
var interval;
var running = false; // Variável para controlar o estado do cronômetro

function updateTimer() {
    seconds++;

    // Verifica se os segundos, minutos ou horas atingiram o limite
    // se atingiram o limite, reinicia o contador
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    divTimer.innerText =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

btnStart.addEventListener("click", () => {
    if (!running) {
        interval = setInterval(updateTimer, 1000); // Força a execução do método a cada um segundo
        running = true;
    }
});

btnPause.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
});

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
    seconds = 0; minutes = 0; hours = 0;
    divTimer.innerText = "00:00:00";
});
