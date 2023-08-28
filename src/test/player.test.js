import Player from '../player.js'
import Gameboard from '../gameboard'

describe('a player', () => {
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

  it('should take turns with another player', () => {
    const player1 = new Player(new Gameboard());
    const player2 = new Player(new Gameboard());
    player1.setOpponent(player2);
    player2.setOpponent(player1);
    player1.attackOpponent(0, 0)
    expect(() => player1.attack(1, 1)).toThrow()
    player2.attackOpponent(0, 0)
    expect(() => player2.attack(0, 0)).toThrow()
  });

  it('should not allow setting youself as an opponent', () => {
    const player1 = new Player(new Gameboard());
    expect(()=> player1.setOpponent(player1)).toThrow()
  });
});

describe('an AI player', () => { // later: make ai smarter by if it hits a ship check adjacent tiles
  beforeAll(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3)
  });
  afterAll(() => {
    jest.restoreAllMocks()
  });
  
  it('should attack a random tile', () => {
    const player = new Player(new Gameboard());
    const aiPlayer = new Player(new Gameboard());

    player.setOpponent(aiPlayer);
    aiPlayer.setOpponent(player);

    const playerBoardTilesAfterAttack = player.getBoardTiles() 
    playerBoardTilesAfterAttack[3][3] = {hit: true}

    aiPlayer.randomAttackOpponent();
    expect(() => aiPlayer.randomAttackOpponent()).toThrow();
    expect(player.getBoardTiles()).toEqual(playerBoardTilesAfterAttack)
  })

  it('should take turns with another player', () => {
    const player = new Player(new Gameboard());
    const aiPlayer = new Player(new Gameboard());

    player.setOpponent(aiPlayer);
    aiPlayer.setOpponent(player);

    aiPlayer.randomAttackOpponent();
    expect(() => aiPlayer.randomAttackOpponent()).toThrow();
  })
});