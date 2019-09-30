const btnTime = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');
const title = document.querySelector('title');
let offSet = 0;

let time = false;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        //if (!time) {
        time = Date.now();
        //}
        active = !active
        btnTime.textContent = 'pauza';
        idI = setInterval(start, 10);
    } else {
        offSet += Date.now() - time;
        active = !active
        btnTime.textContent = 'start';
        clearInterval(idI)
    }

}

const start = () => {
    const totalTime = ((Date.now() - time + offSet) / 1000).toFixed(2);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime - minutes * 60;
    panel.textContent = title.textContent = (minutes > 0 ? minutes.toString().padStart(2, 0) + ':' : '') + seconds.toFixed(2).padStart(5, 0);
}

const reset = () => {
    time = Date.now();
    panel.textContent = '-';
    active = false;
    btnTime.textContent = 'start';
    clearInterval(idI)
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);