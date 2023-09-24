import PubSub from './pubsub';
import notificationImg from '../notification.svg';
import warningImg from '../warning.svg';

const dialogEl = document.querySelector('.dialog');
const setupBoardEl = document.querySelector('.setup.board');
const playerBoardEl = document.querySelector('.player.board');
const enemyBoardEl = document.querySelector('.enemy.board');
const boards = document.querySelectorAll('.board');
const shipSelectionEl = document.querySelector('.ship-selection');
const setupButtonContainerEl = document.querySelector('.setup-button-container');
const messageEl = document.querySelector('.message');

const SHIP_SIZES_LIST = {
  large: 4,
  big: 3,
  middle: 2,
  small: 1,
};
const BOARD_TYPES = {
  setup: setupBoardEl,
  player: playerBoardEl,
  enemy: enemyBoardEl,
};
const IMAGES_LIST = {
  notification: notificationImg,
  warning: warningImg,
};
let selectedShipEl = null;
let isHorizontal = true;
let messageTimeoutID = null;

function fillBoardsWithTiles() {
  boards.forEach((board) => {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const tile = document.createElement('div');
        tile.className = 'board__tile';
        tile.dataset.x = x;
        tile.dataset.y = y;
        board.appendChild(tile);
      }
    }
  });
}

function resetBoards() {
  clearBoard('setup');
  clearBoard('player');
  clearBoard('enemy');
  fillBoardsWithTiles();
  resetShipSelectionEl();
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

function pointerEvents(enable = true) {
  const html = document.documentElement;
  html.style.pointerEvents = enable ? 'auto' : 'none';
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
  if (!(selectedShipEl && target.classList.contains('board__tile'))) {
    return;
  }

  const size = SHIP_SIZES_LIST[selectedShipEl.classList[0]];
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  PubSub.publish('setupBoardClick', {
    size, isHorizontal, x, y,
  });
}

function enemyBoardElClick({ target }) {
  if (!target.classList.contains('board__tile')) {
    return;
  }

  const x = +target.dataset.x;
  const y = +target.dataset.y;

  PubSub.publish('enemyBoardClick', { x, y });
}

function setupButtonContainerElClick({ target }) {
  switch (target.textContent) {
    case 'Random':
      PubSub.publish('placeShipRandomly', null);
      break;
    case 'Reset':
      PubSub.publish('resetBoard', null);
      break;
    case 'Rotate (R)':
      toggleShipOrientation();
      break;
    case 'Start':
      PubSub.publish('startGame', null);
      break;
  }
}

function clearBoard(type) {
  const boardEl = BOARD_TYPES[type];

  while (boardEl.firstChild) {
    boardEl.removeChild(boardEl.lastChild);
  }
}

function clearShipSelectionEl() {
  while (shipSelectionEl.firstChild) {
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
  `;
}

function updateSetupWindow(board) {
  renderBoard('setup', board);

  if (board.getShips().length === 10) {
    deselectShip();
    clearShipSelectionEl();
  }

  if (board.getShips().length === 0) {
    deselectShip();
    resetShipSelectionEl();
  }

  if (selectedShipEl) {
    const amountDisplay = selectedShipEl.previousElementSibling;
    const amountLeft = amountDisplay.textContent[0] - 1;
    amountDisplay.textContent = `${amountLeft}x`;

    if (amountLeft < 1) {
      selectedShipEl.parentElement.remove();
      deselectShip();
    }
  }
}

function renderBoard(type, board, renderShip = true) {
  clearBoard(type);
  const boardEl = BOARD_TYPES[type];
  const tilesEl = [];

  board.getTiles().forEach((row) => {
    const tileRow = [];
    row.forEach((tile) => {
      const [x, y] = tile.cords;
      const tileEl = document.createElement('div');
      tileEl.classList.add('board__tile');

      if (tile.hit) {
        tileEl.classList.add('water');
      }
      if (tile.hit && tile.ship) {
        tileEl.classList.add('hit');
      }

      tileEl.dataset.x = x;
      tileEl.dataset.y = y;
      tileRow.push(tileEl);
    });
    tilesEl.push(tileRow);
  });

  if (!renderShip) {
    boardEl.append(...tilesEl.flat());
    return;
  }

  board.getShips().forEach(({ ship, x, y }) => {
    const isHorizontal = ship.getOrientation();
    const shipStart = isHorizontal ? y : x;
    const shipEnd = (isHorizontal ? y : x) + ship.getLength() - 1;

    if (shipStart === shipEnd) {
      tilesEl[x][y].classList.add('ship', 'one');
      return;
    }

    if (isHorizontal) {
      for (let i = y; i <= shipEnd; i++) {
        if (shipStart === i) {
          tilesEl[x][i].classList.add('ship', 'start');
        } else if (i < shipEnd) {
          tilesEl[x][i].classList.add('ship');
        } else {
          tilesEl[x][i].classList.add('ship', 'end');
        }
      }
    } else {
      for (let i = x; i <= shipEnd; i++) {
        if (shipStart === i) {
          tilesEl[i][y].classList.add('ship', 'vertical', 'start');
        } else if (i < shipEnd) {
          tilesEl[i][y].classList.add('ship', 'vertical');
        } else {
          tilesEl[i][y].classList.add('ship', 'vertical', 'end');
        }
      }
    }
  });

  boardEl.append(...tilesEl.flat());
}

function toggleDialogWindow() {
  dialogEl.style.display = dialogEl.style.display === 'none' ? 'flex' : 'none';
}

function displayMessage(message, type = 'warning', timer = 2000) {
  clearTimeout(messageTimeoutID);
  messageEl.classList.remove('warning', 'notification');
  messageEl.classList.add(type);
  messageEl.firstElementChild.src = IMAGES_LIST[type];
  messageEl.lastElementChild.textContent = message;

  const width = messageEl.firstElementChild.offsetWidth + messageEl.lastElementChild.offsetWidth + +getComputedStyle(messageEl, null).getPropertyValue('padding').match(/\d+/)[0];
  messageEl.style.width = `${width}px`;
  messageEl.style.top = '80%';

  messageTimeoutID = setTimeout(() => { messageEl.style.top = '140%'; }, timer);
}

function init() {
  fillBoardsWithTiles();
  shipSelectionEl.addEventListener('click', shipSelectionElClick);
  setupBoardEl.addEventListener('click', setupBoardElClick);
  enemyBoardEl.addEventListener('click', enemyBoardElClick);
  setupButtonContainerEl.addEventListener('click', setupButtonContainerElClick);
}

export {
  init, resetBoards, updateSetupWindow, renderBoard, displayMessage, toggleDialogWindow, pointerEvents,
};
