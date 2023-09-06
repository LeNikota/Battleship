export default class Ship {
  #length;
  #hits;
  #isHorizontal;

  constructor(length = 1){
    this.#length = length;
    this.#hits = 0;
    this.#isHorizontal = true;
  }

  isSunk(){
    return this.#hits >= this.#length;
  }

  hit(){
    this.#hits++;
  }

  getOrientation(){
    return this.#isHorizontal;
  }

  toggleOrientation(){
    this.#isHorizontal = !this.#isHorizontal;
    return this;
  }

  getLength(){
    return this.#length;
  }
}