const cellSize = 20;
let interval;
const startBoard = [];
const boardHeight = 20;
const boardWidth = 30;

for (let i = 0; i < boardWidth; i++) {
    startBoard[i] = [];
}
// const boardHeight = startBoard.length;
// const boardWidth = startBoard[0].length;

function createCell(x, y, isAlive) {
    const cell = document.createElement('div');
    cell.className = "square";
    document.body.appendChild(cell);
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    cell.style.top = cellSize * y + 'px';
    cell.style.left = cellSize * x + 'px';
    cell.dataset.x = x;
    cell.dataset.y = y;
    if (isAlive) {
        cell.classList.add('active');
    }
}

function drawBoard(maxX, maxY) {
    for (let x = 0; x < maxX; x++) {
        for (let y = 0; y < maxY; y++) {
            createCell(x, y, Math.random() > 0.5);
            // createCell(x, y, 0);
        }
    }
}

function fillBoard() {
    for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
            let cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (startBoard[x][y]) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        }
    }
}

function countNeighbours(x, y) {
    let total = 0;

    // x-1, y-1
    let cell = document.querySelector(`[data-x="${x-1}"][data-y="${y-1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }

    // x, y-1
    cell = document.querySelector(`[data-x="${x}"][data-y="${y-1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x+1}"][data-y="${y-1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x+1}"][data-y="${y}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x+1}"][data-y="${y+1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x}"][data-y="${y+1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x-1}"][data-y="${y+1}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    cell = document.querySelector(`[data-x="${x-1}"][data-y="${y}"]`);
    if (cell && cell.classList.contains('active')) {
        total++;
    }
    return total;
}

const checkCell = (x, y) => {
    let cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    return cell.classList.contains('active');
}

const checkNeighbours = (x, y) => {
    let isActive = checkCell(x, y);
    if (isActive) {
        if (countNeighbours(x, y) === 2 || countNeighbours(x, y) === 3) {
            startBoard[x][y] = 1;
        } else {
            startBoard[x][y] = 0;
        }
    } else {
        if (countNeighbours(x, y) === 3) {
            startBoard[x][y] = 1;
        }
    }
}

function stop() {
    clearInterval(interval);
}

function start() {
    stop();
    interval = setInterval(tick, 100);
}

function reset() {
    for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
            startBoard[x][y] = 0;
        }
    }
    fillBoard();
    stop();
}

function random() {
    stop();
    for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
            startBoard[x][y] = Math.random() > 0.5 ? 0 : 1;
        }

    }
    fillBoard();
}

function position(e) {
    if (!e.target.dataset.x || !e.target.dataset.y) {
        return;
    }
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;
    if (startBoard[x][y] === 0) {
        startBoard[x][y] = 1;
    } else {
        startBoard[x][y] = 0;
    }
    fillBoard();
}


document.body.addEventListener('click', position);

const btnStart = document.querySelector('button.start');
btnStart.addEventListener('click', start);

const btnPause = document.querySelector('button.pause');
btnPause.addEventListener('click', stop);

const btnReset = document.querySelector('button.reset');
btnReset.addEventListener('click', reset);

const btnRandom = document.querySelector('button.random');
btnRandom.addEventListener('click', random);


function changeCell() {
    for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
            checkNeighbours(x, y);
        }
    }
}

function tick() {
    changeCell();
    fillBoard();
}


function main() {
    drawBoard(boardWidth, boardHeight);
}
window.onload = main;