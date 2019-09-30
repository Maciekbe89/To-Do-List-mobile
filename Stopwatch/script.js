const btnTime = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        time = Date.now();
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
    const totalTime = ((Date.now() - time) / 1000).toFixed(2);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime - minutes * 60;
    panel.textContent = (minutes > 0 ? minutes.toString().padStart(2, 0) + ':' : '') + seconds.toFixed(2).padStart(5, 0);
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