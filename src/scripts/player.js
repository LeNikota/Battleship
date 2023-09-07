export default class Player {
  #board;
  #turn;
  #opponent;

  constructor(board, opponent = null) {
    this.#board = board;
    this.#turn = true;
    this.#opponent = opponent;
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

  randomAttackOpponent(){ // later: make ai smarter by if it hits a ship check adjacent tiles
    if(!this.#turn)
      throw('Not your turn')

    const opponentBoard = this.#opponent.getBoard();
    const opponentBoardTiles = opponentBoard.getTiles();
    const intactTilesCords = []
    for (let x = 0; x < opponentBoardTiles.length; x++) {
      for (let y = 0; y < opponentBoardTiles[x].length; y++) {
        if(!opponentBoardTiles[x][y].hit)
          intactTilesCords.push([x,y])
      }
    }

    const [x, y] = intactTilesCords[Math.floor(Math.random() * intactTilesCords.length)]
    
    opponentBoard.receiveAttack(x, y)
    this.#turn = false;
    this.#opponent.setTurn(true);
  }
}