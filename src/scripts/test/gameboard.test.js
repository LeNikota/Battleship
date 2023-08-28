import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe('gameboard', () => {
  it('should check is a tile valid', () => {
    const gameboard = new Gameboard();
    expect(gameboard.isTileValid(0,-1)).toBeFalsy()
    expect(gameboard.isTileValid(-1,0)).toBeFalsy()
    expect(gameboard.isTileValid(-1,-1)).toBeFalsy()
    expect(gameboard.isTileValid(9,10)).toBeFalsy()
    expect(gameboard.isTileValid(10,9)).toBeFalsy()
    expect(gameboard.isTileValid(10,10)).toBeFalsy()
    expect(gameboard.isTileValid(5,5)).toBeTruthy()
  });

  it('should place a ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(1)
    gameboard.placeShip(ship, 0,0);
    expect(gameboard.getTile(0,0).ship).toBe(ship)
  })

  it('should place a ship horizontally', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4)
    gameboard.placeShip(ship, 0,0);
    expect(gameboard.getTile(0,0).ship).toBe(ship) //to the future me there is something wrong with ship placement check it, x and y on the paper and row and columns in the array are different
    expect(gameboard.getTile(1,0).ship).toBe(ship)
    expect(gameboard.getTile(2,0).ship).toBe(ship)
    expect(gameboard.getTile(3,0).ship).toBe(ship)
  });

  it('should place a ship vertically', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4).changePlacement()
    gameboard.placeShip(ship, 4,4);
    expect(gameboard.getTile(4,4).ship).toBe(ship)
    expect(gameboard.getTile(4,5).ship).toBe(ship)
    expect(gameboard.getTile(4,6).ship).toBe(ship)
    expect(gameboard.getTile(4,7).ship).toBe(ship)
  });

  it('should prevent placing a ship beyond the gameboard boundaries', () => {
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(new Ship(1), 0,-1)).toThrow();
    expect(() => gameboard.placeShip(new Ship(1), -1,0)).toThrow();
    expect(() => gameboard.placeShip(new Ship(1), -1,-1)).toThrow();
    expect(() => gameboard.placeShip(new Ship(1), 10,9)).toThrow();
    expect(() => gameboard.placeShip(new Ship(1), 9,10)).toThrow();
    expect(() => gameboard.placeShip(new Ship(1), 10,10)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4), 8,8)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4), 8,5)).toThrow();
    const ship = new Ship(4).changePlacement();
    expect(() => gameboard.placeShip(ship, 5,8)).toThrow();
  });

  it('should receive attacks', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3)
    gameboard.placeShip(ship, 5, 5)
    gameboard.receiveAttack(0,0)
    gameboard.receiveAttack(6,5)
    expect(gameboard.getTile(0,0)).toEqual({hit:true});
    expect(gameboard.getTile(0,1)).toEqual({hit:false});
    expect(gameboard.getTile(6,5)).toEqual({hit:true, ship});
   });

  it('should prevent attacking the same tile twice', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(5,5)
    expect(() => gameboard.receiveAttack(5,5)).toThrow()
  });

  it('should check if all ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(1), 0,0)
    gameboard.placeShip(new Ship(3), 5,5)
    gameboard.receiveAttack(0, 0);
    expect(gameboard.checkAllShipsSunk()).toBeFalsy();
    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(6, 5);
    gameboard.receiveAttack(7, 5);
    expect(gameboard.checkAllShipsSunk()).toBeTruthy();
  });
})