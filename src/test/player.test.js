import Player from '../player.js'
import Gameboard from '../gameboard'

describe('a player', () => {
  it('should attack another player', () => {
    const player1 = new Player(new Gameboard());
    const player2 = new Player(new Gameboard());
    player1.setOpponent(player2);
    player2.setOpponent(player1);

    const player1BoardTilesAfter = player1.getBoardTiles() 
    const player2BoardTilesAfter = player2.getBoardTiles()
    player1BoardTilesAfter[0][0] = {hit: true}
    player2BoardTilesAfter[0][0] = {hit: true}

    player1.attackOpponent(0, 0)
    expect(player2.getBoardTiles()).toEqual(player1BoardTilesAfter)
    player2.attackOpponent(0, 0)
    expect(player1.getBoardTiles()).toEqual(player2BoardTilesAfter)
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