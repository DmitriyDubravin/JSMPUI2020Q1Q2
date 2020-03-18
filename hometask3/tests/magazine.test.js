import Magazine from "./../src/magazine";
import Pages from "./../src/pages";
import Page from "./../src/page";
import { checkGetter, checkSetter } from "./support";

describe("Magazine", () => {
  test("set title()", () => {
    checkSetter(new Magazine(), "title", "Title");
  });
  test("get title()", () => {
    checkGetter(new Magazine(), "title", "Title");
  });
  test("toString", () => {
    const title = "Title";
    const pages = new Pages([new Page(1, "type", "material"), new Page(2, "type", "material")]);
    const magazine = new Magazine(title, pages);
    expect(magazine.toString()).toBe(
      `Magazine: ${title} with number of pages: ${pages.numberOfPages()}`
    );
  });
});
