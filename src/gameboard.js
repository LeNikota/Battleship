export default class Gameboard {
  #tiles;
  #ships;

  constructor(){
    this.#tiles = Array.from(new Array(10), () => new Array(10).fill(false))
    // this.#ships = []; //delete unused
  }

  
}