export default class Gameboard {
  #tiles;
  #ships;

  constructor(){
    this.#tiles = Array.from(new Array(10), () => new Array(10).fill().map(() => ({hit: false})))
    this.#ships = [];
  }

  checkTileValidity(x, y){
    return !(x < 0 || y < 0 || x > 9 || y > 9)
  }

  checkPlacementValidity(x, y, length, isHorizontal) {
    const tilesToCheck = [];
  
    if (isHorizontal) {
      const yOffsetLeft = (y === 0) ? 0 : -1;
      const yOffsetRight = (y === 9) ? 1 : 2;
  
      if (x !== 0)
        tilesToCheck.push(...this.#tiles[x - 1].slice(y + yOffsetLeft, y + length + yOffsetRight));
      tilesToCheck.push(...this.#tiles[x].slice(y + yOffsetLeft, y + length + yOffsetRight));
      if (x !== 9)
        tilesToCheck.push(...this.#tiles[x + 1].slice(y + yOffsetLeft, y + length + yOffsetRight));
  
    } else {
      const xOffsetTop = (x === 0) ? 0 : -1;
      const xOffsetBottom = (x === 9 - length) ? 0 : 1;
  
      for (let i = x + xOffsetTop; i <= x + length + xOffsetBottom; i++) {
        if (y !== 0)
          tilesToCheck.push(this.#tiles[i][y - 1]);
        tilesToCheck.push(this.#tiles[i][y]);
        if (y !== 9)
          tilesToCheck.push(this.#tiles[i][y + 1]);
      }
    }
  
    return !tilesToCheck.some((tile) => "ship" in tile);
  }

  placeShip(ship, x, y){
    const length = (ship.getLength() - 1);
    const isHorizontal = ship.getOrientation();

    if(isHorizontal && (!this.checkTileValidity(x, y) || y + length >= 10))
      throw('Placement is out of bounds')
    if(!isHorizontal && (!this.checkTileValidity(x, y) || x + length >= 10))
      throw('Placement is out of bounds')
    if(!this.checkPlacementValidity(x, y, length, isHorizontal))
      throw('Placing near or across already placed ship')

    
    
    if (isHorizontal) {
      for (let i = y; i <= y + length; i++) {
        this.#tiles[x][i] = { hit: false, ship }        
      }
    } else {
      for (let i = x; i <= x + length; i++) {
        this.#tiles[i][y] = { hit: false, ship }        
      }
    }

    this.#ships.push({ship, x, y})
    return this;
  }

  placeShipsRandomly(Ship) {
    this.reset();
    const MAX_ATTEMPTS_PER_SHIP = 100;
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    for (const length of shipLengths) {
      let shipPlaced = false;
      let attempts = 0;

      while (!shipPlaced) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const isVertical = !!Math.floor(Math.random() * 2);
        const ship = new Ship(length)
        if(isVertical) ship.toggleOrientation()

        try {
          this.placeShip(ship, x, y)
          shipPlaced = true;
        } catch {
          attempts++;
          if(attempts > MAX_ATTEMPTS_PER_SHIP) {
            this.reset();
            throw `Exceeded placement attempts limit for a ship of length ${length}`;
          }
        }
      }
    }
    return this;
  }

  reset(){
    this.#tiles = Array.from(new Array(10), () => new Array(10).fill().map(() => ({hit: false})))
    this.#ships = [];
  }

  receiveAttack(x, y){
    if(!this.checkTileValidity(x, y))
      throw('The tile is out of bounds')

    const tile = this.#tiles[x][y];
    
    if(tile.hit)
      throw('The tile has been already hit')
    
    tile.hit = true;
    if(tile.ship){
      tile.ship.hit()
    }
  }

  getTile(x, y){
    return {...this.#tiles[x][y]};
  }

  getTiles(){
    return this.#tiles.map(row => row.map(tile => ({...tile})));
  }

  getShips(){
    return this.#ships;
  }

  checkAllShipsSunk(){
    return this.#ships.every(({ship}) => ship.isSunk())
  }
}