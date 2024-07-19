const container = document.querySelector('.container');
const changeGridButton = document.querySelector('.change');
const width = 600;
let grid = 16;

changeGridButton.addEventListener('click', (e) => {
  while (true) {
    grid = prompt('Pick a number between 1 and 100');
    if (parseInt(grid) > 0 && parseInt(grid) <= 100) {
      grid = grid;
      setGrid();
      return false;
    }
    console.log('Number needs to be between 1 and 100');
  }
});

function createSquare() {
  const size = width / grid;
  const square = document.createElement('div');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.backgroundColor = '#fff';
  square.classList.add('square');

  square.addEventListener('mouseenter', (event) => {
    event.currentTarget.classList.add('active');
  });

  container.appendChild(square);
}

function setGrid() {
  container.innerHTML = '';
  for (let i = 0; i < grid * grid; i++) {
    createSquare();
  }
}

setGrid(grid);
