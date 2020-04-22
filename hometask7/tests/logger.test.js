import { logger } from "../src/logger";

describe("logger", () => {
  const spy = jest.spyOn(console, "log");
  test("newTurn()", () => {
    logger.newTurn();
    expect(spy).toHaveBeenCalled;
  });

  test("correct()", () => {
    logger.correct();
    expect(spy).toHaveBeenCalled;
  });

  test("wrong()", () => {
    logger.wrong();
    expect(spy).toHaveBeenCalled;
  });

  test("rolled()", () => {
    logger.rolled(1);
    expect(spy).toHaveBeenCalled();
  });

  test("victory()", () => {
    logger.victory();
    expect(spy).toHaveBeenCalled();
  });
});
