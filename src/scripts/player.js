export default class Player {
  #board;
  #turn;
  #opponent;
  #shipCords
  #adjacentTiles

  constructor(board, opponent = null) {
    this.#board = board;
    this.#turn = true;
    this.#opponent = opponent;

    /* AI properties for randomAttackOpponent */
    this.#shipCords = {
      start: null,
      end: null,
      waterEnd: false, // true if has reached the most right side of a ship, next attacks will go to the left side of the ship
      isHorizontal: null
    };
    this.#adjacentTiles = [[-1, 0], [1, 0], [0, -1] , [0, 1]]
  }

  attackOpponent(x, y){
    if(!this.#turn)
      throw('Not your turn')
    
    const opponentBoard = this.#opponent.getBoard()
    opponentBoard.receiveAttack(x, y)
    this.#turn = false;
    this.#opponent.setTurn(true);
  }

  setTurn(isMyTurn){
    this.#turn = isMyTurn;
  }
  
  setOpponent(opponent){
    if(opponent === this)
      throw('Setting yourself as an opponent')

    this.#opponent = opponent;
  }

  getBoard(){
    return this.#board;
  }

  setBoard(board){
    return this.#board = board;
  }
  
  getBoardTiles(){
    return this.#board.getTiles()
  }

  checkWin(){
    return this.#opponent.getBoard().checkAllShipsSunk()
  }

  randomAttackOpponent() {
    if (!this.#turn)
      throw ('Not your turn')
  
    const opponentBoard = this.#opponent.getBoard();
    const opponentBoardTiles = opponentBoard.getTiles();
    const intactTilesCords = []
    let attackCords = null
  
    if (this.#shipCords.start && this.#shipCords.end) {
      const startCord = this.#shipCords.start;
      const endCord = this.#shipCords.end;
  
      if (this.#shipCords.isHorizontal) {
        attackCords = !this.#shipCords.waterEnd ? [endCord[0], endCord[1] + 1] : [startCord[0], startCord[1] - 1]
      } else {
        attackCords = !this.#shipCords.waterEnd ? [endCord[0] + 1, endCord[1]] : [startCord[0] - 1, startCord[1]]
      }

      if(this.#shipCords.waterEnd){
        this.#shipCords.start = attackCords;
      } else{
        this.#shipCords.end = attackCords;
      }
    } else if (this.#shipCords.start) {
      const [x, y] = this.#shipCords.start;
      while (true) {
        const [xOffset, yOffset] = this.#adjacentTiles.pop();
        attackCords = [x + xOffset, y + yOffset]
        if (!opponentBoard.checkTileValidity(...attackCords))
          continue
        if (opponentBoard.getTile(...attackCords).hit)
          continue
  
        break
      }
    } else {
      for (let x = 0; x < opponentBoardTiles.length; x++) {
        for (let y = 0; y < opponentBoardTiles[x].length; y++) {
          if (!opponentBoardTiles[x][y].hit)
            intactTilesCords.push([x, y])
        }
      }
      attackCords = intactTilesCords[Math.floor(Math.random() * intactTilesCords.length)]
    }
  
    opponentBoard.receiveAttack(...attackCords)
    this.#turn = false;
    this.#opponent.setTurn(true);
  
    const tile = opponentBoard.getTile(...attackCords)
    if (!tile.ship) {
      if (this.#shipCords.end)
        this.#shipCords.waterEnd = true;
  
      return
    }
  
    if (tile.ship.isSunk()) {
      this.#shipCords = {
        start: null,
        end: null,
        waterEnd: false,
        isHorizontal: null
      };
      this.#adjacentTiles = [[-1, 0], [1, 0], [0, -1], [0, 1]]
      return
    }
    if (!this.#shipCords.start) {
      this.#shipCords.start = attackCords;
      return
    }
    if (!this.#shipCords.end) {
      this.#shipCords.end = attackCords
  
      let startCord = this.#shipCords.start
      let endCord = this.#shipCords.end
      this.#shipCords.isHorizontal = startCord[0] === endCord[0] // Check if ship is horizontal or vertical
  
      if (endCord[0] < startCord[0] || endCord[1] < startCord[1]){ // Swap start and end if necessary
        const temp = endCord;
        endCord = startCord;
        startCord = temp;
        this.#shipCords.start = startCord;
        this.#shipCords.end = endCord;
      }
  
      const possibleWaterEndCords = this.#shipCords.isHorizontal ? [endCord[0], endCord[1] + 1] : [endCord[0] + 1, endCord[1]]
  
      if (!opponentBoard.checkTileValidity(...possibleWaterEndCords) || opponentBoard.getTile(...possibleWaterEndCords).hit) {
        this.#shipCords.waterEnd = true;
      }
    }
  }
  
}