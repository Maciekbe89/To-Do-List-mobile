const cellSize = 15;
const boardHeight = 20;
const boardWidth = 30;
const playerX = 1;
const playerY = 1;
const player2X = boardWidth - 2;
const player2Y = 1;
const playerHeight = 4;
const ballX = boardWidth / 2;
const ballY = boardHeight / 2;


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
    for (let x = 0; x < maxX; x++) {
        for (let y = 0; y < maxY; y++) {
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
    drawBoard(boardWidth, boardHeight);
    drawPlayer(playerX, playerY);
    drawPlayer(player2X, player2Y);
    drawBall(ballX, ballY);
}

function drawPlayer(playerX, playerY) {

    for (let y = playerY; y <= playerHeight; y++) {
        setActive(playerX, y);
    }

}

function drawBall(ballX, ballY) {
    setActive(ballX, ballY);
}

window.onload = main;