document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resizeButton = document.getElementById('resize-grid');
    const GRID_SIZE = 960; // Total size of the grid in pixels

    /**
     * Creates a grid of divs inside the container.
     * @param {number} size - Number of squares per side for the grid.
     */
    function createGrid(size) {
        // Clear any existing grid to avoid duplication
        container.innerHTML = '';

        // Calculate size of each square
        const squareSize = GRID_SIZE / size;

        // Create the grid
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }
    }

    /**
     * Adds a hover effect to grid squares, changing their background color on hover.
     */
    function addHoverEffect() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
        });
    }

    /**
     * Handles the resizing of the grid by creating a new one with user-specified size.
     */
    resizeButton.addEventListener('click', () => {
        let size = parseInt(prompt('Enter new grid size (maximum 100):'));

        if (size && size > 0 && size <= 100) {
            createGrid(size);
            addHoverEffect();
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    // Initialize the default grid
    createGrid(16);
    addHoverEffect();

});
