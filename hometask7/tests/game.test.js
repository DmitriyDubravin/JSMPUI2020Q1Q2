import { Game } from "../src/game";
import { Player } from "../src/player";
import { spyAndMock } from "./support";

describe("The test environment", () => {
  const game = new Game([new Player("p1"), new Player("p2")]);
  const fakeFn = () => {};

  test("addPlayer()", () => {
    game.addPlayer(new Player("p3"));
    expect(game.players.players[2].name).toBe("p3");
  });

  test("run()", () => {
    const spy = spyAndMock(game, "roll", fakeFn);
    game.run();
    expect(spy).toHaveBeenCalled();
  });

  test("roll() rollGenerator", () => {
    const game1 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = spyAndMock(game1, "generateRoll", () => 2);
    const spyNextTurn = spyAndMock(game1, "nextTurn", fakeFn);
    const spyEvaluation = spyAndMock(
      game1.questionnaire,
      "evaluateAnswer",
      fakeFn
    );
    const spyWrongAnswer = spyAndMock(game1, "wrongAnswer", fakeFn);
    const spyCorrectAnswer = spyAndMock(game1, "correctAnswer", fakeFn);

    game1.roll();
    expect(spyRollGenerator).toHaveBeenCalled();
  });

  test("roll() even", () => {
    const game2 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = spyAndMock(game2, "generateRoll", () => 2);
    game2.player.inPenaltyBox = true;
    const spyEvenFork = spyAndMock(game2.player, "staysInPenalty", fakeFn);
    const spyNextTurn = spyAndMock(game2, "nextTurn", fakeFn);
    const spyWrongAnswer = spyAndMock(game2, "wrongAnswer", fakeFn);
    const spyCorrectAnswer = spyAndMock(game2, "correctAnswer", fakeFn);
    game2.roll();
    expect(spyEvenFork).toHaveBeenCalled();
  });

  test("roll() odd", () => {
    const game3 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = spyAndMock(game3, "generateRoll", () => 1);
    game3.player.inPenaltyBox = true;
    const spyOddFork = spyAndMock(game3.player, "goesOutOfPenalty", fakeFn);
    const spyEvaluation = spyAndMock(
      game3.questionnaire,
      "evaluateAnswer",
      () => true
    );
    const spyWrongAnswer = spyAndMock(game3, "wrongAnswer", fakeFn);
    const spyCorrectAnswer = spyAndMock(game3, "correctAnswer", fakeFn);
    game3.roll();
    expect(spyEvaluation).toHaveBeenCalled();
    expect(spyOddFork).toHaveBeenCalled();
  });

  test("roll() evaluations", () => {
    const game4 = new Game([new Player("p1"), new Player("p2")]);
    game4.player.inPenaltyBox = false;
    const spyEvaluation = spyAndMock(
      game4.questionnaire,
      "evaluateAnswer",
      fakeFn
    );
    game4.roll();
    expect(spyEvaluation).toHaveBeenCalled();
  });

  test("wrongAnswer()", () => {
    const spyNextTurn = spyAndMock(game, "nextTurn", fakeFn);
    const spyGoesInPenalty = spyAndMock(game.player, "goesInPenalty", fakeFn);
    game.wrongAnswer();
    expect(spyNextTurn).toHaveBeenCalled();
    expect(spyGoesInPenalty).toHaveBeenCalled();
  });

  test("correctAnswer()", () => {
    const spyNextTurn = spyAndMock(game, "nextTurn", fakeFn);
    game.correctAnswer();
    expect(spyNextTurn).toHaveBeenCalled();
    spyNextTurn.mockReset();
    game.player.purse = 6;
    game.correctAnswer();
    expect(spyNextTurn).not.toHaveBeenCalled();
  });

  test("nextTurn()", () => {
    const game10 = new Game([new Player("p1"), new Player("p2")]);
    const spyRoll = spyAndMock(game10, "roll", fakeFn);
    const currentName = game10.player.name;
    game10.nextTurn();
    const nextName = game10.player.name;
    expect(currentName).not.toBe(nextName);
    expect(spyRoll).toHaveBeenCalled();
  });

  test("generateRoll()", () => {
    const roll = game.generateRoll();
    expect(typeof roll).toBe("number");
  });
});
