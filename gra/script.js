function createCell(x, y) {
    const cell = document.createElement('div');
    cell.className = "square";
    document.body.appendChild(cell);
    cell.style.width = '20px';
    cell.style.height = '20px';
}