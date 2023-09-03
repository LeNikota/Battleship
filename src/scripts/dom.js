  import PubSub from "./pubsub"

  const setupBoardEl = document.querySelector('.setup.board')
  const playerBoardEl = document.querySelector('.player.board')
  const enemyBoardsEl = document.querySelector('.enemy.board')
  const boards = document.querySelectorAll('.board')
  const shipSelectionEl = document.querySelector('.ship-selection')
  const setupButtonContainerEl = document.querySelector('.setup-button-container')

  const SHIP_SIZES_LIST = {
    large: 4,
    big: 3,
    middle: 2,
    small: 1
  }
  let selectedShipEl = null


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

    PubSub.publish('setupBoardClick', {size, x , y})
  }

  function setupButtonContainerElClick({ target }) {
    switch (target.textContent) {
      case 'Random':
        PubSub.publish('placeShipRandomly', null)
        break;
      case 'Reset':
        PubSub.publish('resetBoard', null)
        break;
      case 'Start':
        
        break;
    }
  }

  function clearSetupBoard() {
    setupBoardEl.querySelectorAll('.ship').forEach(ship => ship.remove())
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


  function renderSetupBoard(board) {
    clearSetupBoard()
    board.getShips().forEach(({ship, x, y}) => {
      createShip(setupBoardEl, ship.getLength(), ship.getIsHorizontal(), x, y);
    })

    if(board.getShips().length === 10){
      clearShipSelectionEl();
      deselectShip()
    }

    if(board.getShips().length === 0){
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

  function init() {
    fillBoardsWithTiles()
    shipSelectionEl.addEventListener('click', shipSelectionElClick)
    setupBoardEl.addEventListener('click', setupBoardElClick)
    setupButtonContainerEl.addEventListener('click', setupButtonContainerElClick)
  }

  export { init, renderSetupBoard }