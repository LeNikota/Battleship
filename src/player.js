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
}