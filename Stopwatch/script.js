const btnTime = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        active = !active
        btnTime.textContent = 'pauza';
        idI = setInterval(start, 10);
    } else {
        active = !active
        btnTime.textContent = 'start';
        clearInterval(idI)
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);

}

const reset = () => {
    time = 0;
    panel.textContent = '-';
    active = false;
    btnTime.textContent = 'start';
    clearInterval(idI)
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);