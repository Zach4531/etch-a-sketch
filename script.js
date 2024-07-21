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
  square.classList.add('square');
  square.dataset.count = 0;
  square.style.backgroundColor = setRGB();
  square.style.opacity = 0;

  square.addEventListener('mouseenter', (event) => {
    let element = event.currentTarget;
    if (element.dataset.count < 11) {
      element.dataset.count++;
      element.style.opacity = `${element.dataset.count * 10}%`;
      return;
    }

    // element.style.backgroundColor = setRGB();
  });

  container.appendChild(square);
}

function setGrid() {
  container.innerHTML = '';
  for (let i = 0; i < grid * grid; i++) {
    createSquare();
  }
}

function setRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
setGrid(grid);
