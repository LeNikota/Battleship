export default class Gameboard {
  #tiles;
  // #ships;

  constructor(){
    this.#tiles = Array.from(new Array(10), () => new Array(10).fill(false))
    // this.#ships = []; //delete unused
  }

  placeShip(ship, x, y){
    const length = (ship.getLength() - 1);

    if(ship.getIsHorizontal() && (x < 0 || y < 0 || x > 9 || y > 9 || x + length > 10))
      throw('Placement is out of bounds')
    if(!ship.getIsHorizontal() && (x < 0 || y < 0 || x > 9 || y > 9 || y + length > 10))
      throw('Placement is out of bounds')

    if (ship.getIsHorizontal()) {
      for (let i = x; i <= x + length; i++) {
        this.#tiles[i][y] = { hit: false, ship }        
      }
    } else {
      for (let i = y; i <= y + length; i++) {
        this.#tiles[x][i] = { hit: false, ship }        
      }
    }
  }

  getTile(x, y){
    return this.#tiles[x][y];
  }
}