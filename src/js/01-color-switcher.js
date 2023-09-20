function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
btnStop.disabled = true;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
};

function onStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerId)
};