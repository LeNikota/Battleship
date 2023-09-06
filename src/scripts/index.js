import "../style.css";
import * as dom from './dom'
import Gameboard from './gameboard'
import PubSub from "./pubsub";
import Ship from './ship'

dom.init()

const playerBoard = new Gameboard();


function handleSetUpBoardClick({size, isHorizontal, x, y}) {
  try {
    playerBoard.placeShip(
      isHorizontal ? new Ship(size) : new Ship(size).toggleOrientation(),
      x,
      y
    );
    dom.updateSetupWindow(playerBoard)
  } catch (error) {
    dom.displayWarning(error)
  }
}

function handleEnemyBoardClick({}) {
  
}

function handlePlaceShipRandomlyEvent() {
  try {
    playerBoard.placeShipsRandomly(Ship);
    dom.updateSetupWindow(playerBoard);
  } catch (error) {
    dom.displayWarning(error)
  }
}

function handleResetBoardEvent() {
  playerBoard.reset();
  dom.updateSetupWindow(playerBoard);
}

function handleStartGameEvent() {
  if (playerBoard.getShips().length !== 10) {
    dom.displayWarning('Not all ships have been placed')
    return;
  }

  dom.toggleDialogWindow()
  dom.renderBoard('player', playerBoard)
}

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick)
PubSub.subscribe('enemyBoardClick', handleEnemyBoardClick)
PubSub.subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent)
PubSub.subscribe('resetBoard', handleResetBoardEvent)
PubSub.subscribe('startGame', handleStartGameEvent)

// todo complete this project already there's no time left! university awaits! and english learning too
//!add ability to move ships when they already placed on the setup board
//!check how site looks on mobile
// todo make AI smarter
// todo add menu so a player can save a game and restart (use dialog window)
// todo use localStorage so when player exit he can continue playing? (or go to menu and saves the game in its state) - not necessary