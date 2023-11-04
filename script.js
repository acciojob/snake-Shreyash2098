//your code here
const gameContainer = document.getElementById('gameContainer');
const scoreDisplay = document.getElementById('score');
const gridSize = 40;
const cellSize = 10;

let snake = [{ row: 20, col: 1 }];
let food = { row: 10, col: 10 };
let direction = 'right';
let score = 0;

function createGrid() {
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.id = `pixel${row}_${col}`;
      gameContainer.appendChild(pixel);
    }
  }
}

function updateGame() {
  moveSnake();
  if (isGameOver()) {
    alert('Game over!');
    location.reload();
    return;
  }
  updateFood();
  drawSnake();
}

function moveSnake() {
  // Logic to move the snake
  // Update the snake array
  // Check for collisions with the food
  // Update the score
}

function isGameOver() {
  // Check if the game is over (e.g., snake hits a wall or itself)
  return false; // Replace with your game-over logic
}

function updateFood() {
  // Logic to update the position of the food
}

function drawSnake() {
  // Clear the previous snake positions
  // Add CSS class "snakeBodyPixel" to the snake body cells
  // Update the scoreDisplay
}

function handleKeyPress(e) {
  // Update the direction based on the key pressed
}

createGrid();
setInterval(updateGame, 100);
document.addEventListener('keydown', handleKeyPress);
