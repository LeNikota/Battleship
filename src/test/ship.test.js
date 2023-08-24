import Ship from "../ship.js";

describe("a ship", () => {
  it("should not sink without enough hits", () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBeFalsy();
  });

  it("should sink", () => {
    const ship = new Ship(3);
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy();
  });

  it('should change direction', () => {
    const ship = new Ship(3);
    expect(ship.getIsHorizontal()).toBeTruthy();
    ship.changePlacement()
    expect(ship.getIsHorizontal()).toBeFalsy();;
  });
});