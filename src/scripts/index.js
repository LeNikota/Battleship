import "../style.css";
import * as dom from './dom'
import Gameboard from './gameboard'
import PubSub from "./pubsub";
import Ship from './ship'

dom.init()

const setupBoard = new Gameboard();


function handleSetUpBoardClick({size, isHorizontal, x, y}) {
  try {
    setupBoard.placeShip(
      isHorizontal ? new Ship(size) : new Ship(size).toggleOrientation(),
      x,
      y
    );
    dom.renderSetupBoard(setupBoard)
  } catch (error) {
    dom.displayWarning(error)
  }
}

function handlePlaceShipRandomlyEvent() {
  try {
    setupBoard.placeShipsRandomly(Ship);
    dom.renderSetupBoard(setupBoard);
  } catch (error) {
    dom.displayWarning(error)
  }
}

function handleResetBoardEvent() {
  setupBoard.reset();
  dom.renderSetupBoard(setupBoard);
}

function handleStartGameEvent() {
  if (setupBoard.getShips().length !== 10) {
    dom.displayWarning('Not all ships have been placed')
    return;
  }

  //some logic to start game
}

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick)
PubSub.subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent)
PubSub.subscribe('resetBoard', handleResetBoardEvent)
PubSub.subscribe('startGame', handleStartGameEvent)

//!add ability to move ships when they already placed on the setup board
// change name of functions and variables from shipPlacement to shipOrintation
// let gameboard = new Gameboard() //use its build-in method to notify a user about out of bound placement of a ship or across other ships
// make ships rotatable on setup
// make AI smarter
//complete this project already there's no time left! university awaits! and english learning too


// use localStorage so when player exit he can continue playing? - not necessary