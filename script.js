// Select container div
const container = document.getElementById('container');

/**
 * Creates a grid of divs inside the container.
 * @param {number} size - Number of squares per side for the grid.
 */
function createGrid(size) {
    // Clear any existing grid to avoid duplication
    container.innerHTML = '';

    // Calculate size of each square
    const squareSize = 960 / size;

    // Create the grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

// Create a default 16x16 grid
createGrid(16);

