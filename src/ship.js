export default class Ship {
  #length;
  #hits;
  #direction;

  constructor(length){
    this.#length = length | 1;
    this.#hits = 0;
    this.#direction = 'horizontal';
  }

  isSunk(){
    return this.#hits >= this.#length;
  }

  hit(){
    this.#hits++;
  }

  getDirection(){
    return this.#direction;
  }

  changeDirection(){
    this.#direction = this.#direction === 'horizontal' ? 'vertical' : 'horizontal'
  }
}