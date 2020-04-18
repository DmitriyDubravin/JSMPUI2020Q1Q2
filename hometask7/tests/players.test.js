import { Players } from "../src/players";
import { Player } from "../src/player";

describe("Players", () => {
  const players = new Players([new Player("p1"), new Player("p2")]);
  test("add()", () => {
    players.add(new Player("p3"));
    expect(players.count).toBe(3);
  });
  test("next()", () => {
    let nextPlayer = players.next();
    expect(nextPlayer.name).toBe("p2");
    nextPlayer = players.next();
    nextPlayer = players.next();
    expect(nextPlayer.name).toBe("p1");
  });
  test("current()", () => {
    expect(players.current.name).toBe("p1");
  });
  test("count()", () => {
    expect(players.count).toBe(3);
  });
});
