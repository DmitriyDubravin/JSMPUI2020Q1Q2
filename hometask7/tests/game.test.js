import { Game } from "../src/game";
import { Player } from "../src/player";

describe("The test environment", () => {
  const game = new Game([new Player("p1"), new Player("p2")]);
  const fakeFn = () => {};
  test("addPlayer()", () => {
    game.addPlayer(new Player("p3"));
    expect(game.players.players[2].name).toBe("p3");
  });
  test("run()", () => {
    const spy = jest.spyOn(game, "roll").mockImplementation(fakeFn);
    game.run();
    expect(spy).toHaveBeenCalled();
  });
  test("roll() rollGenerator", () => {
    const game1 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = jest
      .spyOn(game1, "generateRoll")
      .mockImplementation(() => 2);
    const spyNextTurn = jest
      .spyOn(game1, "nextTurn")
      .mockImplementation(fakeFn);
    const spyEvaluation = jest
      .spyOn(game1.questionnaire, "evaluateAnswer")
      .mockImplementation(fakeFn);
    const spyWrongAnswer = jest
      .spyOn(game1, "wrongAnswer")
      .mockImplementation(fakeFn);
    const spyCorrectAnswer = jest
      .spyOn(game1, "correctAnswer")
      .mockImplementation(fakeFn);
    game1.roll();
    expect(spyRollGenerator).toHaveBeenCalled();
  });
  test("roll() even", () => {
    const game2 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = jest
      .spyOn(game2, "generateRoll")
      .mockImplementation(() => 2);
    game2.player.inPenaltyBox = true;
    const spyEvenFork = jest
      .spyOn(game2.player, "staysInPenalty")
      .mockImplementation(fakeFn);
    const spyNextTurn = jest
      .spyOn(game2, "nextTurn")
      .mockImplementation(fakeFn);
    const spyWrongAnswer = jest
      .spyOn(game2, "wrongAnswer")
      .mockImplementation(fakeFn);
    const spyCorrectAnswer = jest
      .spyOn(game2, "correctAnswer")
      .mockImplementation(fakeFn);
    game2.roll();
    expect(spyEvenFork).toHaveBeenCalled();
  });
  test("roll() odd", () => {
    const game3 = new Game([new Player("p1"), new Player("p2")]);
    const spyRollGenerator = jest
      .spyOn(game3, "generateRoll")
      .mockImplementation(() => 1);
    game3.player.inPenaltyBox = true;
    const spyOddFork = jest
      .spyOn(game3.player, "goesOutOfPenalty")
      .mockImplementation(fakeFn);
    const spyEvaluation = jest
      .spyOn(game3.questionnaire, "evaluateAnswer")
      .mockImplementation(() => true);
    const spyWrongAnswer = jest
      .spyOn(game3, "wrongAnswer")
      .mockImplementation(fakeFn);
    const spyCorrectAnswer = jest
      .spyOn(game3, "correctAnswer")
      .mockImplementation(fakeFn);
    game3.roll();
    expect(spyEvaluation).toHaveBeenCalled();
    expect(spyOddFork).toHaveBeenCalled();
  });
  test("roll() evaluations", () => {
    const game4 = new Game([new Player("p1"), new Player("p2")]);
    game4.player.inPenaltyBox = false;
    const spyEvaluation = jest
      .spyOn(game4.questionnaire, "evaluateAnswer")
      .mockImplementation(fakeFn);
    game4.roll();
    expect(spyEvaluation).toHaveBeenCalled();
  });
  test("wrongAnswer()", () => {
    const spyNextTurn = jest.spyOn(game, "nextTurn").mockImplementation(fakeFn);
    const spyGoesInPenalty = jest
      .spyOn(game.player, "goesInPenalty")
      .mockImplementation(fakeFn);
    game.wrongAnswer();
    expect(spyNextTurn).toHaveBeenCalled();
    expect(spyGoesInPenalty).toHaveBeenCalled();
  });
  test("correctAnswer()", () => {
    const spyNextTurn = jest.spyOn(game, "nextTurn").mockImplementation(fakeFn);
    game.correctAnswer();
    expect(spyNextTurn).toHaveBeenCalled();
    spyNextTurn.mockReset();
    game.player.purse = 6;
    game.correctAnswer();
    expect(spyNextTurn).not.toHaveBeenCalled();
  });
  test("nextTurn()", () => {
    const game10 = new Game([new Player("p1"), new Player("p2")]);
    const spyRoll = jest.spyOn(game10, "roll").mockImplementation(fakeFn);
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
