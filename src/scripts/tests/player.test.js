import Player from '../player.js'
import Gameboard from '../gameboard'
import Ship from '../ship.js'

describe('a player', () => {
  it('should check if the player wins', () => {
    const player1 = new Player(new Gameboard().placeShip(new Ship(1), 0, 0).placeShip(new Ship(2), 2, 0));
    const player2 = new Player(new Gameboard().placeShip(new Ship(3), 0, 0));
    player1.setOpponent(player2);
    player2.setOpponent(player1);

    player1.attackOpponent(0, 0)
    player2.attackOpponent(0, 0)
    expect(player1.checkWin()).toBeFalsy();
    expect(player2.checkWin()).toBeFalsy();
    
    player1.attackOpponent(0, 1)
    player2.attackOpponent(2, 0)
    player1.attackOpponent(0, 2)
    expect(player1.checkWin()).toBeTruthy();
    player2.attackOpponent(2, 1)
    expect(player2.checkWin()).toBeTruthy();
  });

  it('should attack another player', () => {
    const player1 = new Player(new Gameboard());
    const player2 = new Player(new Gameboard());
    player1.setOpponent(player2);
    player2.setOpponent(player1);

    const player1BoardTilesAfterAttack = player1.getBoardTiles() 
    const player2BoardTilesAfterAttack = player2.getBoardTiles()
    player1BoardTilesAfterAttack[0][0] = {hit: true}
    player2BoardTilesAfterAttack[0][0] = {hit: true}

    player1.attackOpponent(0, 0)
    expect(player2.getBoardTiles()).toEqual(player1BoardTilesAfterAttack)
    player2.attackOpponent(0, 0)
    expect(player1.getBoardTiles()).toEqual(player2BoardTilesAfterAttack)
  });

  it('should not allow setting youself as an opponent', () => {
    const player1 = new Player(new Gameboard());
    expect(()=> player1.setOpponent(player1)).toThrow('Setting yourself as an opponent')
  });
});

describe('an AI player', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.01)
  });
  afterAll(() => {
    jest.restoreAllMocks()
  });
  
  it('should attack a random tile', () => {
    const player = new Player(new Gameboard());
    const ai = new Player(new Gameboard());

    player.setOpponent(ai);
    ai.setOpponent(player);

    const playerBoardTilesAfterAttack = player.getBoardTiles() 
    playerBoardTilesAfterAttack[0][1] = {hit: true}

    ai.randomAttackOpponent();
    expect(player.getBoardTiles()).toEqual(playerBoardTilesAfterAttack)
  })

  it('should not randomly attack the same tile twice', () => {
    const player = new Player(new Gameboard());
    const ai = new Player(new Gameboard());

    player.setOpponent(ai);
    ai.setOpponent(player);

    const playerBoardTilesAfterAttack = player.getBoardTiles() 
    playerBoardTilesAfterAttack[0][0] = {hit: true}
    playerBoardTilesAfterAttack[0][1] = {hit: true}

    ai.randomAttackOpponent();
    player.attackOpponent(0, 0);
    expect(() => ai.randomAttackOpponent()).not.toThrow();
    expect(player.getBoardTiles()).toEqual(playerBoardTilesAfterAttack);
  })
});