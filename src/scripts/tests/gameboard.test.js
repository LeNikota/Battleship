import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe('gameboard', () => {
  it('should check is a tile valid', () => {
    expect(Gameboard.checkTileValidity(0,-1)).toBeFalsy()
    expect(Gameboard.checkTileValidity(-1,0)).toBeFalsy()
    expect(Gameboard.checkTileValidity(-1,-1)).toBeFalsy()
    expect(Gameboard.checkTileValidity(9,10)).toBeFalsy()
    expect(Gameboard.checkTileValidity(10,9)).toBeFalsy()
    expect(Gameboard.checkTileValidity(10,10)).toBeFalsy()
    expect(Gameboard.checkTileValidity(5,5)).toBeTruthy()
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
    expect(gameboard.getTile(0,1).ship).toBe(ship)
    expect(gameboard.getTile(0,2).ship).toBe(ship)
    expect(gameboard.getTile(0,3).ship).toBe(ship)
    expect(gameboard.getTile(0,4).ship).toBeUndefined();
  });

  it('should place a ship vertically', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4).changePlacement()
    gameboard.placeShip(ship, 4,4);
    expect(gameboard.getTile(4,4).ship).toBe(ship)
    expect(gameboard.getTile(5,4).ship).toBe(ship)
    expect(gameboard.getTile(6,4).ship).toBe(ship)
    expect(gameboard.getTile(7,4).ship).toBe(ship)
    expect(gameboard.getTile(8,4).ship).toBeUndefined();
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
    expect(() => gameboard.placeShip(new Ship(4), 0,6)).not.toThrow();
    expect(() => gameboard.placeShip(new Ship(4).changePlacement(), 8,9)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4).changePlacement(), 6,9)).not.toThrow();
  });

  it('should prevent placing a ship near or across a placed ship', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(4), 3,3)
    expect(() => gameboard.placeShip(new Ship(4), 3,0)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4), 3,3)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4), 3,4)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4).changePlacement(), 2,4)).toThrow();
    expect(() => gameboard.placeShip(new Ship(4).changePlacement(), 0,5)).toThrow();
  });

  it('should receive attacks', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3)
    gameboard.placeShip(ship, 5, 5)
    gameboard.receiveAttack(0,0)
    gameboard.receiveAttack(5,6)
    expect(gameboard.getTile(0,0)).toEqual({hit:true});
    expect(gameboard.getTile(0,1)).toEqual({hit:false});
    expect(gameboard.getTile(5,6)).toEqual({hit:true, ship});
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
    gameboard.receiveAttack(5, 6);
    gameboard.receiveAttack(5, 7);
    expect(gameboard.checkAllShipsSunk()).toBeTruthy();
  });
})