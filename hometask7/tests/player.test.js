import { Player } from "../src/player";
import { checkSetter, checkGetter } from "./support";

describe("Player", () => {
  const player = new Player("p1");

  test("get name", () => {
    checkGetter(player, "name", 'name');
  });
  test("set place", () => {
    checkSetter(player, "place", 1);
  });
  test("get place", () => {
    checkGetter(player, "place", 1);
  });
  test("set purse", () => {
    checkSetter(player, "purse", 1);
  });
  test("get purse", () => {
    checkGetter(player, "purse", 1);
  });
  test("set inPenaltyBox", () => {
    checkSetter(player, "inPenaltyBox", true);
  });
  test("get inPenaltyBox", () => {
    checkGetter(player, "inPenaltyBox", true);
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
