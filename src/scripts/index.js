import '../style.css';
import * as dom from './dom';
import PubSub from './pubsub';
import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';

dom.init();

const playerBoard = new Gameboard();
const player = new Player();
const ai = new Player();
player.setOpponent(ai);
ai.setOpponent(player);

function handleSetUpBoardClick({
  size, isHorizontal, x, y,
}) {
  try {
    playerBoard.placeShip(
      isHorizontal ? new Ship(size) : new Ship(size).toggleOrientation(),
      x,
      y,
    );
    dom.updateSetupWindow(playerBoard);
  } catch (error) {
    dom.displayMessage(error);
  }
}

function handleEnemyBoardClick({ x, y }) {
  try {
    player.attackOpponent(x, y);
    dom.renderBoard('enemy', ai.getBoard(), false);
    if (player.checkWin()) {
      handleEndGameEvent(true);
      return;
    }

    ai.randomAttackOpponent();
    dom.renderBoard('player', player.getBoard());
    if (ai.checkWin()) {
      handleEndGameEvent(false);
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
    dom.displayMessage(error);
  }
}

function handleResetBoardEvent() {
  playerBoard.reset();
  dom.updateSetupWindow(playerBoard);
}

function handleStartGameEvent() {
  if (playerBoard.getShips().length !== 10) {
    dom.displayMessage('Not all ships have been placed');
    return;
  }
  player.setBoard(playerBoard);
  ai.setBoard(new Gameboard().placeShipsRandomly(Ship));

  dom.toggleDialogWindow();
  dom.renderBoard('player', playerBoard);
}

function handleEndGameEvent(win) {
  dom.pointerEvents(false);

  const message = win ? 'You win' : 'You lose';
  let countdown = 9;

  dom.displayMessage(message, 'notification');

  const countdownIntervalId = setInterval(() => {
    dom.displayMessage(`${message}, new game in ${countdown--} seconds`, 'notification');
  }, 1000);

  setTimeout(() => {
    clearInterval(countdownIntervalId);
    dom.displayMessage('Starting new game...', 'notification', 1000);
    playerBoard.reset();
    dom.resetBoards();
    dom.toggleDialogWindow();
    dom.pointerEvents(true);
  }, 10000);
}

PubSub.subscribe('setupBoardClick', handleSetUpBoardClick);
PubSub.subscribe('enemyBoardClick', handleEnemyBoardClick);
PubSub.subscribe('placeShipRandomly', handlePlaceShipRandomlyEvent);
PubSub.subscribe('resetBoard', handleResetBoardEvent);
PubSub.subscribe('startGame', handleStartGameEvent);
