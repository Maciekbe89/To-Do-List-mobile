const cellSize = 20;


function createCell(x, y) {
    const cell = document.createElement('div');
    cell.className = "square";
    document.body.appendChild(cell);
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    cell.style.top = cellSize * y + 'px';
    cell.style.left = cellSize * x + 'px';
    cell.dataset.x = x;
    cell.dataset.y = y;
}

function drawBoard(maxX, maxY) {
    for (x = 0; x < maxX; x++) {
        for (y = 0; y < maxY; y++) {
            createCell(x, y);
        }
    }
}

function setActive(x, y) {
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add('active');
}

function setUnActive(x, y) {
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    cell.classList.remove('active');
}

function main() {
    drawBoard(10, 10);
}



window.onload = main;