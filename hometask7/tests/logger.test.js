import { logger } from "../src/logger";

describe("logger", () => {
  test("newTurn()", () => {
    const spy = jest.spyOn(console, "log");
    logger.newTurn();
    expect(spy).toHaveBeenCalled;
  });
  test("correct()", () => {
    const spy = jest.spyOn(console, "log");
    logger.correct();
    expect(spy).toHaveBeenCalled;
  });
  test("wrong()", () => {
    const spy = jest.spyOn(console, "log");
    logger.wrong();
    expect(spy).toHaveBeenCalled;
  });
  test("rolled()", () => {
    const spy = jest.spyOn(console, "log");
    logger.rolled(1);
    expect(spy).toHaveBeenCalled();
  });
  test("victory()", () => {
    const spy = jest.spyOn(console, "log");
    logger.victory();
    expect(spy).toHaveBeenCalled();
  });
});
