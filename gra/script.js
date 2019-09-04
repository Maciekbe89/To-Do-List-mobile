const cellSize = 15;
const boardHeight = 20;
const boardWidth = 30;
const playerX = 1;
const playerY = 1;
const player2X = boardWidth - 2;
const player2Y = 1;
const playerHeight = 4;
let ballX = boardWidth / 2;
let ballY = boardHeight / 2;
let ballVelX = 1;
let ballVelY = 1;


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

function clearAll() {
    const elements = document.querySelectorAll('.active');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
}

function moveBall() {
    ballX += ballVelX;
    ballY += ballVelY;
    const nextCell = document.querySelector(`[data-x="${ballX}"][data-y="${ballY}"]`);
    if (ballY < 0 || ballY >= boardHeight) {
        ballVelY *= -1;
        ballY += ballVelY;

    }
    if ((ballX < 0 || ballX >= boardWidth) || (nextCell && nextCell.classList.contains('active'))) {
        ballVelX *= -1;
        ballX += ballVelX;
    }
}

function tick() {
    clearAll();
    drawPlayer(playerX, playerY);
    drawPlayer(player2X, player2Y);
    moveBall();
    drawBall(ballX, ballY);
}

setInterval(tick, 100);

window.onload = main;