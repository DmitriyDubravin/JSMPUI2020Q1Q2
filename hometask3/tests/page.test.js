import Page from "./../src/page";
import { checkGetter, checkSetter } from "./support";

describe("Page", () => {
  test("toString()", () => {
    const number = 1;
    const type = "type";
    const material = "material";
    const page = new Page(number, type, material);
    expect(page.toString()).toBe(
      `here is page ${type} #${number} and it's material is ${material}`
    );
  });
});
