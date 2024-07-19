const container = document.querySelector('.container');
const changeGridButton = document.querySelector('.change');
const width = 600;
let grid = 16;

changeGridButton.addEventListener('click', (e) => {
  grid = prompt('Pick number between 1 and 100');
  setGrid();
});

function createSquare() {
  const size = width / grid;
  const square = document.createElement('div');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.backgroundColor = '#000';
  square.classList.add('square');

  container.appendChild(square);
}

function setGrid() {
  container.innerHTML = '';
  for (let i = 0; i < grid * grid; i++) {
    createSquare();
  }
}

setGrid(grid);
