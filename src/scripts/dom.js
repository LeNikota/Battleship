const setupBoard = document.querySelector('.setup.board')
const playerBoard = document.querySelector('.player.board')
const enemyBoards = document.querySelector('.enemy.board')
const boards = document.querySelectorAll('.board')
const shipSelection = document.querySelector('.ship-selection')


function fillBoardsWithTiles() {
  boards.forEach(board => {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const tile = document.createElement('div');
        tile.className = 'board__tile'
        tile.dataset.x = x;
        tile.dataset.y = y;
        board.appendChild(tile)
      }
    }
  });
}

function createShip(board, size = 1, x = 0, y = 0) {
  const ship = document.createElement('div');
  ship.className = 'ship';
  ship.style.width = `${50 * size}px`
  ship.style.left = `${50 * x - 3}px`
  ship.style.top = `${50 * y - 3}px`
  board.appendChild(ship)
}





// setup window (dialog window)
const shipsCords = {}
let selectedShip = null

function shipSelectionClick({ target }) {
  if (selectedShip) {
    selectedShip.classList.remove('selected')
    selectedShip = null;
  }

  switch (target.classList[0]) {
    case 'large':
    case 'big':
    case 'middle':
    case 'small':
      target.classList.add('selected')  
  }

  selectedShip = target; 
}

function setupBoardClick({ target }) {
  if(!selectedShip)
    return;

  const SIZE_LIST = {
    large: 4,
    big: 3,
    middle: 2,
    small: 1
  }
  const size = selectedShip.classList[0]
  const x = target.dataset.x
  const y = target.dataset.y

  createShip(setupBoard, SIZE_LIST[size], x, y)
  
  const amountDisplay = selectedShip.previousElementSibling
  const amountLeft = amountDisplay.textContent[0];
  amountDisplay.textContent = `${amountLeft - 1}x`
  selectedShip.classList.remove('selected')
  selectedShip = null;
}



function init() {
  fillBoardsWithTiles()
  shipSelection.addEventListener('click', shipSelectionClick)
  setupBoard.addEventListener('click', setupBoardClick)
}

export { init }