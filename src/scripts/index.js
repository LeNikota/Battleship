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
player.setOpponent(ai)
ai.setOpponent(player)


function handleSetUpBoardClick({size, isHorizontal, x, y}) {
  try {
    playerBoard.placeShip(
      isHorizontal ? new Ship(size) : new Ship(size).toggleOrientation(),
      x,
      y
    );
    dom.updateSetupWindow(playerBoard)
  } catch (error) {
    dom.displayMessage(error)
  }
}

function handleEnemyBoardClick({x, y}) {
  try {
    player.attackOpponent(x, y)
    dom.renderBoard('enemy', ai.getBoard(), true, false)
    if(player.checkWin()){
      handleEndGameEvent(true)
      return;
    }
    
    ai.randomAttackOpponent()
    dom.renderBoard('player', player.getBoard(), true)
    if(ai.checkWin()){
      handleEndGameEvent(false)
      return;
    }
  } catch (error) {
    dom.displayMessage(error);
  }
}

function handlePlaceShipRandomlyEvent() {
  try {
    playerBoard.placeShipsRandomly(Ship);
    dom.updateSetupWindow(playerBoard);
  } catch (error) {
    dom.displayMessage(error)
  }
}

function handleResetBoardEvent() {
  playerBoard.reset();
  dom.updateSetupWindow(playerBoard);
}

function handleStartGameEvent() {
  if (playerBoard.getShips().length !== 10) {
    dom.displayMessage('Not all ships have been placed')
    return;
  }
  player.setBoard(playerBoard)
  ai.setBoard(new Gameboard().placeShipsRandomly(Ship))
  
  dom.toggleDialogWindow()
  dom.renderBoard('player', playerBoard)
}

function handleEndGameEvent(win) {
  dom.pointerEvents(false)

  const message = win ? 'You win' : 'You lose' 
  let countdown = 9;
  
  dom.displayMessage(message, 'notification')

  let countdownIntervalId = setInterval(() => {
    dom.displayMessage(`${message}, new game in ${countdown--} seconds`, 'notification')
  }, 1000)

  setTimeout(() => {
    clearInterval(countdownIntervalId)
    dom.displayMessage('Starting new game...', 'notification', 1000)
    playerBoard.reset()
    dom.resetBoards()
    dom.toggleDialogWindow()
    dom.pointerEvents(true)
  }, 10000)
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
// todo fix notification area CSS
// todo make tiles around destroyed ship become visible (water) (as there is no need to hide them)
// todo add menu so a player can save a game and restart (use dialog window)
// todo use localStorage so when player exit he can continue playing? (or go to menu and saves the game in its state) - not necessary


// todo when everything is complete use pritter in some places to make code look consistent
// ? ask CHATGPT can i improve something or write in a more clear way, add and commit as an optimization 
// todo When everything complete test the game (all functionality (if saves are added, quitting in the middle of the game, closing the tab) winning, losing many times then (again quitting, saving)); if there will be time check how others achieve the result