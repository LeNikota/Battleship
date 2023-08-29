const playerBoard = document.querySelector('.player-board')
const enemyBoard = document.querySelector('.enemy-board')

function init() {
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.className = 'player-board__tile'
    playerBoard.appendChild(tile)
  }

  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.className = 'enemy-board__tile'
    enemyBoard.appendChild(tile)
  }
}


export {init}