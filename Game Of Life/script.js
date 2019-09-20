const cellSize = 20;
const boardHeight = 20;
const boardWidth = 30;



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
    if (isAlive === true) {
        cell.classList.add('active');
    }
}

function drawBoard(maxX, maxY) {
    for (let x = 0; x < maxX; x++) {
        for (let y = 0; y < maxY; y++) {
            createCell(x, y, Math.random() > 0.5);
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
    let cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    let isActive = checkCell(x, y);
    if (isActive) {
        if (countNeighbours(x, y) === 2 || countNeighbours(x, y) === 3) {
            cell.classList.add('active');
        } else {
            cell.classList.remove('active');
        }
    }
    if (!isActive) {
        if (countNeighbours === 3) {
            cell.classList.add('active');
        }
    }
}


function main() {
    drawBoard(boardWidth, boardHeight);
}
window.onload = main;