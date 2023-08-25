export default class Gameboard {
  #tiles;
  #ships;

  constructor(){
    this.#tiles = Array.from(new Array(10), () => new Array(10).fill({hit: false}))
    this.#ships = [];
  }

  isTileValid(x, y){
    return !(x < 0 || y < 0 || x > 9 || y > 9)
  }

  placeShip(ship, x, y){
    const length = (ship.getLength() - 1);

    if(ship.getIsHorizontal() && (!this.isTileValid(x, y) || x + length > 10))
      throw('Placement is out of bounds')
    if(!ship.getIsHorizontal() && (!this.isTileValid(x, y) || y + length > 10))
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

    this.#ships.push(ship)
  }

  receiveAttack(x, y){
    const tile = this.#tiles[x][y];
    if(!this.isTileValid(x, y))
      throw('The tile is out of bounds')
    if(tile.hit)
      throw('The tile has been already hit')
    
    tile.hit = true;
    if(tile.ship){
      tile.ship.hit()
    }
  }

  getTile(x, y){
    return this.#tiles[x][y];
  }

  getTiles(){
    return this.#tiles;
  }

  checkAllShipsSunk(){
    return this.#ships.every((ship) => ship.isSunk())
  }
}