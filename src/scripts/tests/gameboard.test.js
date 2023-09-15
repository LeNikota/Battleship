import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe('gameboard', () => {
  let gameboard;
  beforeEach(()=> {
    gameboard = new Gameboard();
  })

  it('should check is a tile valid', () => {
    expect(gameboard.checkTileValidity(0,-1)).toBeFalsy()
    expect(gameboard.checkTileValidity(-1,0)).toBeFalsy()
    expect(gameboard.checkTileValidity(-1,-1)).toBeFalsy()
    expect(gameboard.checkTileValidity(9,10)).toBeFalsy()
    expect(gameboard.checkTileValidity(10,9)).toBeFalsy()
    expect(gameboard.checkTileValidity(10,10)).toBeFalsy()
    expect(gameboard.checkTileValidity(5,5)).toBeTruthy()
  });

  it('should place a ship', () => {
    const ship = new Ship(1)
    gameboard.placeShip(ship, 0,0);
    expect(gameboard.getTile(0,0).ship).toBe(ship)
  })

  it('should place a ship horizontally', () => {
    const ship = new Ship(4)
    gameboard.placeShip(ship, 0,0);
    expect(gameboard.getTile(0,0).ship).toBe(ship)
    expect(gameboard.getTile(0,1).ship).toBe(ship)
    expect(gameboard.getTile(0,2).ship).toBe(ship)
    expect(gameboard.getTile(0,3).ship).toBe(ship)
    expect(gameboard.getTile(0,4).ship).toBeUndefined();
  });

  it('should place a ship vertically', () => {
    const ship = new Ship(4).toggleOrientation()
    gameboard.placeShip(ship, 4,4);
    expect(gameboard.getTile(4,4).ship).toBe(ship)
    expect(gameboard.getTile(5,4).ship).toBe(ship)
    expect(gameboard.getTile(6,4).ship).toBe(ship)
    expect(gameboard.getTile(7,4).ship).toBe(ship)
    expect(gameboard.getTile(8,4).ship).toBeUndefined();
  });

  it('should prevent placing a ship beyond the gameboard boundaries', () => {
    expect(() => gameboard.placeShip(new Ship(1), 0,-1)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(1), -1,0)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(1), -1,-1)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(1), 10,9)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(1), 9,10)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(1), 10,10)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(4), 8,8)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(4), 0,6)).not.toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(4).toggleOrientation(), 8,9)).toThrow('Placement is out of bounds');
    expect(() => gameboard.placeShip(new Ship(4).toggleOrientation(), 6,9)).not.toThrow('Placement is out of bounds');
  });

  it('should prevent placing a ship across a placed ship', () => {
    gameboard.placeShip(new Ship(4), 3,3)
    expect(() => gameboard.placeShip(new Ship(4), 3,0)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(4), 3,3)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(4), 3,4)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(4).toggleOrientation(), 2,4)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(4).toggleOrientation(), 0,5)).toThrow('Placing near or across already placed ship');
  });

  it('should prevent placing a ship near a placed ship', () => {
    gameboard.placeShip(new Ship(3), 0,0)
    gameboard.placeShip(new Ship(3), 9,7)
    gameboard.placeShip(new Ship(3), 5,5)
    expect(() => gameboard.placeShip(new Ship(3), 4,5)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(3), 6,5)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(2), 5,3)).toThrow('Placing near or across already placed ship');
    expect(() => gameboard.placeShip(new Ship(2), 5,8)).toThrow('Placing near or across already placed ship');
    
    gameboard.reset()

    gameboard.placeShip(new Ship(3).toggleOrientation(), 0,0)
    gameboard.placeShip(new Ship(3).toggleOrientation(), 7,9)
    gameboard.placeShip(new Ship(3).toggleOrientation(), 5,5)
    expect(() => gameboard.placeShip(new Ship(2).toggleOrientation(), 3,5)).toThrow('Placing near or across already placed ship'); 
    expect(() => gameboard.placeShip(new Ship(3).toggleOrientation(), 5,4)).toThrow('Placing near or across already placed ship'); 
    expect(() => gameboard.placeShip(new Ship(3).toggleOrientation(), 5,6)).toThrow('Placing near or across already placed ship'); 
    expect(() => gameboard.placeShip(new Ship(2).toggleOrientation(), 8,5)).toThrow('Placing near or across already placed ship');
  });

  it('should receive attacks', () => {
    const ship = new Ship(3)
    gameboard.placeShip(ship, 5, 5)
    gameboard.receiveAttack(0,0)
    gameboard.receiveAttack(5,6)
    expect(gameboard.getTile(0,0)).toEqual({hit:true});
    expect(gameboard.getTile(0,1)).toEqual({hit:false});
    expect(gameboard.getTile(5,6)).toEqual({hit:true, ship});
   });

  it('should prevent attacking the same tile twice', () => {
    gameboard.receiveAttack(5,5)
    expect(() => gameboard.receiveAttack(5,5)).toThrow('The tile has been already hit')
  });

  it('should check if all ships are sunk', () => {
    gameboard.placeShip(new Ship(1), 0,0)
    gameboard.placeShip(new Ship(3), 5,5)
    gameboard.receiveAttack(0, 0);
    expect(gameboard.checkAllShipsSunk()).toBeFalsy();
    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(5, 6);
    gameboard.receiveAttack(5, 7);
    expect(gameboard.checkAllShipsSunk()).toBeTruthy();
  });

  it('should reset the gameboard tiles and ships', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    gameboard.placeShip(ship1, 0, 0);
    gameboard.placeShip(ship2, 2, 2);
    gameboard.receiveAttack(5,5);

    gameboard.reset();

    const tiles = gameboard.getTiles();
    const ships = gameboard.getShips();

    expect(tiles.every(row => row.every(tile => !tile.hit))).toBe(true);
    expect(ships).toHaveLength(0);
  });

  it('should give tiles around the provided ship', () => {
    const ship1 = new Ship(4)
    const ship2 = new Ship(1)
    const ship3 = new Ship(4).toggleOrientation()
    
    gameboard.placeShip(ship1, 0, 0)
    gameboard.placeShip(ship2, 9, 9)
    gameboard.placeShip(ship3, 5, 5)

    const allTiles = gameboard.getTiles()
    const expectedShip1Tiles = [...allTiles[0].slice(0,5), ...allTiles[1].slice(0,5)]
    const expectedShip2Tiles = [...allTiles[8].slice(8,10), ...allTiles[9].slice(8,10)]
    const expectedShip3Tiles = []

    for (let x = 4; x <= 9; x++) {
      expectedShip3Tiles.push(allTiles[x][4], allTiles[x][5], allTiles[x][6])
    }

    expect(gameboard.getTilesAroundShip(ship1)).toStrictEqual(expectedShip1Tiles);
    expect(gameboard.getTilesAroundShip(ship2)).toStrictEqual(expectedShip2Tiles);
    expect(gameboard.getTilesAroundShip(ship3)).toStrictEqual(expectedShip3Tiles);
  });

  describe('placeShipsRandomly', () => {
    it('should place ships randomly without errors', () => {
      expect(() => gameboard.placeShipsRandomly(Ship)).not.toThrow();
    });

    it('should clear the board before place ships randomly', () => {
      const ship = new Ship(4)
      gameboard.placeShip(ship, 0, 0)
      gameboard.placeShipsRandomly(Ship);
      expect(gameboard.getTile(0, 0).ship).not.toBe(ship);
    });

    it('should place all required ships', () => {
      gameboard.placeShipsRandomly(Ship);

      const ships = gameboard.getShips();
      const shipLengths = ships.map(({ ship }) => ship.getLength());

      expect(shipLengths).toEqual([4, 3, 3, 2, 2, 2, 1, 1, 1, 1]);
    });

    it('should reset the gameboard and throw an error if placement attempts exceed the limit', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0);

      expect(() => gameboard.placeShipsRandomly()).toThrow();

      const tiles = gameboard.getTiles();
      const ships = gameboard.getShips();

      expect(tiles.every(row => row.every(tile => !tile.hit))).toBe(true);
      expect(ships.length).toBe(0);

      jest.restoreAllMocks()
    });
  });
})