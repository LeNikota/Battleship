import exp from "constants";
import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe('gameboard', () => {
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
})