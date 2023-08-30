const boards = document.querySelectorAll('.board')

function init() {
  boards.forEach(board => {
    for (let i = 0; i < 100; i++) {
      const tile = document.createElement('div');
      tile.className = 'board__tile'
      board.appendChild(tile)
    }
  })
}


export {init}