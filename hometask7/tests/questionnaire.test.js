import { Questionnaire } from "../src/questionnaire";
import { Categories } from "../src/enums";
import { spyAndMock } from "./support";

describe("Questionnaire", () => {
  const questionnaire = new Questionnaire(Categories, 1);

  test("createQuestion()", () => {
    const question = questionnaire.createQuestion("any", "any");
    expect(question).toBe("any Question any");
  });

  test("setCategory()", () => {
    questionnaire.setCategory(1);
    const category = questionnaire.getCategory();
    expect(category).toBe("Science");
  });

  test("getCategory()", () => {
    questionnaire.setCategory(2);
    const category = questionnaire.getCategory();
    expect(category).toBe("Sports");
  });

  test("getQuestion()", () => {
    const question = questionnaire.getQuestion();
    expect(question).toBe("Sports Question 1");
  });

  test("askQuestion()", () => {
    const getCategory = spyAndMock(questionnaire, "getCategory", () => {});
    const getQuestion = spyAndMock(questionnaire, "getQuestion", () => {});
    questionnaire.askQuestion();
    expect(getCategory).toHaveBeenCalled();
    expect(getQuestion).toHaveBeenCalled();
  });

  test("evaluateAnswer()", () => {
    const evaluation = questionnaire.evaluateAnswer();
    expect(typeof evaluation).toBe("boolean");
  });
});
