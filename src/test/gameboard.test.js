import exp from "constants";
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
    expect(gameboard.getTile(0,0).ship).toBe(ship)
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
    gameboard.receiveAttack(3,3)
    gameboard.receiveAttack(6,5)
    expect(gameboard.getTile(3,3)).toEqual({hit:true});
    expect(gameboard.getTile(6,5)).toEqual({hit:true, ship});
   });

  it('should prevent attacking the same tile twice', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(5,5)
    expect(() => gameboard.receiveAttack(5,5)).toThrow()
  });

  // it('should return result of the attack', () => {
  //   //or register a sunk ship somewhere
  //   const gameboard = new Gameboard();
  //   const ship1 = new Ship(1)
  //   const ship2 = new Ship(3)
  //   gameboard.placeShip(ship1, 5, 5)
  //   gameboard.placeShip(ship2, 2, 2)
  //   expect(gameboard.receiveAttack(5,5)).toBe();
  // });
})