import { Player } from "../src/player";
import { checkSetterGetter } from "./support";

describe("Player", () => {
  const player = new Player("p1");

  test("name", () => {
    checkSetterGetter(player, "name", "name");
  });

  test("place", () => {
    checkSetterGetter(player, "place", 1);
  });

  test("purse", () => {
    checkSetterGetter(player, "purse", 1);
  });

  test("inPenaltyBox", () => {
    checkSetterGetter(player, "inPenaltyBox", true);
  });

  test("setPlace()", () => {
    player.setPlace(3);
    expect(player._place).toBe(4);
  });

  test("addCoin()", () => {
    player.addCoin();
    expect(player._purse).toBe(2);
  });

  test("staysInPenalty()", () => {
    player.staysInPenalty();
    expect(player._inPenaltyBox).toBe.false;
  });

  test("goesOutOfPenalty()", () => {
    player.goesOutOfPenalty();
    expect(player._inPenaltyBox).toBe.false;
  });

  test("goesInPenalty()", () => {
    player.goesInPenalty();
    expect(player._inPenaltyBox).toBe.true;
  });
});
