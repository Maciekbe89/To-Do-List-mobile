const cellSize = 15;
const boardHeight = 20;
const boardWidth = 30;
const playerHeight = 4;
let playerX = 1;
let playerY = boardHeight / 2 - playerHeight / 2;
let player2X = boardWidth - 2;
let player2Y = boardHeight / 2 - playerHeight / 2;
let ballX = boardWidth / 2;
let ballY = boardHeight / 2;
let ballVelX = 1;
let ballVelY = 1;
let intervalId;


const containerDiv = document.createElement('div');
containerDiv.className = 'container';
document.body.appendChild(containerDiv);


function createCell(x, y) {
    const cell = document.createElement('div');
    cell.className = "square";
    containerDiv.appendChild(cell);
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



function drawPlayer(playerX, playerY) {

    for (let y = playerY; y < playerY + playerHeight; y++) {
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

function stop() {
    clearInterval(intervalId);
}

function main() {
    drawBoard(boardWidth, boardHeight);
    drawPlayer(playerX, playerY);
    drawPlayer(player2X, player2Y);
    drawBall(ballX, ballY);
    intervalId = setInterval(tick, 100);
    document.addEventListener("keydown", (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 87 && playerY > 0) {
            playerY--;
        }
        if (e.keyCode === 83 && playerY < boardHeight - playerHeight) {
            playerY++;
        }
        if (e.keyCode === 38 && player2Y > 0) {
            player2Y--;
        }
        if (e.keyCode === 40 && player2Y < boardHeight - playerHeight) {
            player2Y++;
        }
    });
}
window.onload = main;