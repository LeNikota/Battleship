import "../style.css";
import * as dom from './dom'
import PubSub from "./pubsub";
import Gameboard from './gameboard'
import Ship from './ship'
import Player from './player'

dom.init()

const playerBoard = new Gameboard();
let player = new Player();
let ai = new Player();


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

function handleEnemyBoardClick({x, y}) {
  try {
    player.attackOpponent(x, y)
    dom.renderBoard('enemy', ai.getBoard(), true, false)
    if(player.checkWin()){
      handleEndGameEvent()
      return;
    }
    
    ai.randomAttackOpponent()
    dom.renderBoard('player', player.getBoard(), true)
    if(ai.checkWin()){
      handleEndGameEvent()
      return;
    }
  } catch (error) {
    dom.displayWarning(error);
  }
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
  player.setBoard(playerBoard)
  player.setOpponent(ai)
  ai.setBoard(new Gameboard().placeShipsRandomly(Ship))
  ai.setOpponent(player)
  dom.toggleDialogWindow()
  dom.renderBoard('player', playerBoard)
}

function handleEndGameEvent() {
  console.log('you won');
  //todo logic goes here
}

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick)
PubSub.subscribe('enemyBoardClick', handleEnemyBoardClick)
PubSub.subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent)
PubSub.subscribe('resetBoard', handleResetBoardEvent)
PubSub.subscribe('startGame', handleStartGameEvent)

// todo complete this project already there's no time left! university awaits! and english learning too
//! may be revert colors, primary black and others more light (color palette site), i thing it will fix the isuee, try right away chaning in the broswer pane those varables
//!add ability to move ships when they already placed on the setup board
//!check how site looks on mobile
// todo make AI smarter
// todo add menu so a player can save a game and restart (use dialog window)
// todo use localStorage so when player exit he can continue playing? (or go to menu and saves the game in its state) - not necessary