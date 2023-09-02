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

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick)



// let gameboard = new Gameboard() //use its build-in method to not allow place ships on top of each other
//complete this project already there's no time left! university awaits! and english learning too