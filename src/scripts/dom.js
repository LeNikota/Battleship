import PubSub from "./pubsub"

const dialogEl = document.querySelector('.dialog')
const setupBoardEl = document.querySelector('.setup.board')
const playerBoardEl = document.querySelector('.player.board')
const enemyBoardEl = document.querySelector('.enemy.board')
const boards = document.querySelectorAll('.board')
const shipSelectionEl = document.querySelector('.ship-selection')
const setupButtonContainerEl = document.querySelector('.setup-button-container')
const warningEl = document.querySelector('.warning')

const SHIP_SIZES_LIST = {
  large: 4,
  big: 3,
  middle: 2,
  small: 1
}
const BOARD_TYPES = {
  setup: setupBoardEl,
  player: playerBoardEl,
  enemy: enemyBoardEl
}
let selectedShipEl = null
let isHorizontal = true
let warningTimeoutID = null


function fillBoardsWithTiles() {
  boards.forEach(board => {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const tile = document.createElement('div');
        tile.className = 'board__tile'
        tile.dataset.x = x;
        tile.dataset.y = y;
        board.appendChild(tile)
      }
    }
  });
}

function createShip(board, size = 1, isHorizontal = true, x = 0, y = 0) {
  const ship = document.createElement('div');
  ship.className = 'ship';
  if (isHorizontal) {
    ship.style.width = `${50 * size}px`
  } else {
    ship.style.height = `${50 * size}px`
  }
  ship.style.top = `${50 * x - 3}px`
  ship.style.left = `${50 * y - 3}px`
  board.appendChild(ship)
}

function selectShip(shipEl) {
  if (selectedShipEl) {
    selectedShipEl.classList.remove('selected');
  }
  shipEl.classList.add('selected');
  selectedShipEl = shipEl;
}

function deselectShip() {
  if (selectedShipEl) {
    selectedShipEl.classList.remove('selected');
    selectedShipEl = null;
  }
}

function toggleShipOrientation() {
  isHorizontal = !isHorizontal;
  shipSelectionEl.classList.toggle('rotated');
}

function shipSelectionElClick({ target }) {
  if (!(target.classList[0] in SHIP_SIZES_LIST)) {
    return;
  }

  if (target === selectedShipEl) {
    deselectShip();
  } else {
    selectShip(target);
  }
}

function setupBoardElClick({ target }) {
  if (!selectedShipEl || target.className !== 'board__tile') {
    return;
  }

  const size = SHIP_SIZES_LIST[selectedShipEl.classList[0]];
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  PubSub.publish('setupBoardClick', {size, isHorizontal, x , y})
}

function enemyBoardElClick({ target }) {
  if (!selectedShipEl || target.className !== 'board__tile') {
    return;
  }

  PubSub.publish('enemyBoardClick', target)
}

function setupButtonContainerElClick({ target }) {
  switch (target.textContent) {
    case 'Random':
      PubSub.publish('placeShipRandomly', null)
      break;
    case 'Reset':
      PubSub.publish('resetBoard', null)
      break;
    case 'Rotate (R)':
      toggleShipOrientation()
      break;
    case 'Start':
      PubSub.publish('startGame', null)
      break;
  }
}

function clearBoard(type) {
  const boardEl = BOARD_TYPES[type]
  boardEl.querySelectorAll('.ship').forEach(ship => ship.remove())
}

function clearShipSelectionEl(){
  while(shipSelectionEl.firstChild) {
    shipSelectionEl.removeChild(shipSelectionEl.firstChild);
  }
}

function resetShipSelectionEl() {
  shipSelectionEl.innerHTML = `
    <div class="ship-selection-option">
      <p class="amount">1x</p>
      <div class="large" style="--size: 4"></div>
    </div>
    <div class="ship-selection-option">
      <p class="amount">2x</p>
      <div class="big" style="--size: 3"></div>
    </div>
    <div class="ship-selection-option">
      <p class="amount">3x</p>
      <div class="middle" style="--size: 2"></div>
    </div>
    <div class="ship-selection-option">
      <p class="amount">4x</p>
      <div class="small" style="--size: 1"></div>
    </div>   
  `
}

function updateSetupWindow(board) {
  clearBoard('setup')
  renderBoard('setup', board)

  if(board.getShips().length === 10){
    deselectShip()
    clearShipSelectionEl();
  }

  if(board.getShips().length === 0){
    deselectShip()
    resetShipSelectionEl()
  }

  if(selectedShipEl){
    const amountDisplay = selectedShipEl.previousElementSibling;
    const amountLeft = amountDisplay.textContent[0] - 1;
    amountDisplay.textContent = `${amountLeft}x`;

    if (amountLeft < 1) {
      selectedShipEl.parentElement.remove();
      deselectShip();
    }
  }
}

function renderBoard(type, board) {
  const boardEl = BOARD_TYPES[type]

  board.getShips().forEach(({ ship, x, y }) => {
    createShip(boardEl, ship.getLength(), ship.getOrientation(), x, y);
  });
}

function toggleDialogWindow() {
  dialogEl.style.display =
    dialogEl.style.display === "none" ? "flex" : "none";
}

function displayWarning(message) {
  clearTimeout(warningTimeoutID)
  warningEl.lastElementChild.textContent = message;
  warningEl.style.top = '80vh';
  warningTimeoutID  = setTimeout(() => warningEl.style.top = '120vh', 2000);
}

function init() {
  fillBoardsWithTiles()
  shipSelectionEl.addEventListener('click', shipSelectionElClick)
  setupBoardEl.addEventListener('click', setupBoardElClick)
  enemyBoardEl.addEventListener('click', enemyBoardElClick)
  setupButtonContainerEl.addEventListener('click', setupButtonContainerElClick)
}

export { init, updateSetupWindow, renderBoard, displayWarning, toggleDialogWindow }