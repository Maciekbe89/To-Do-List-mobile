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




function main() {
    drawBoard(boardWidth, boardHeight);
}
window.onload = main;