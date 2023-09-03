import "../style.css";
import * as dom from './dom'
import Gameboard from './gameboard'
import PubSub from "./pubsub";
import Ship from './ship'

dom.init()

const setupBoard = new Gameboard();


function handleSetUpBoardClick({size, x, y}) {
  setupBoard.placeShip(new Ship(size), x, y)
  dom.renderSetupBoard(setupBoard)
}

function handlePlaceShipRandomlyEvent() {
  setupBoard.placeShipsRandomly(Ship);
  dom.renderSetupBoard(setupBoard);
}

function handleResetBoardEvent() {
  setupBoard.reset();
  dom.renderSetupBoard(setupBoard);
}

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick)
PubSub.subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent)
PubSub.subscribe('resetBoard', handleResetBoardEvent)


// gameboard should allow to reset itself and randomly place ships
// change name of functions and variables from shipPlacement to shipOrintation
// let gameboard = new Gameboard() //use its build-in method to notify a user about out of bound placement of a ship or across other ships
// make ships rotatable on setup
//complete this project already there's no time left! university awaits! and english learning too