import Pages from "../src/pages";
import Page from "../src/page";
import Magazine from "../src/magazine";

describe("Item", () => {
  test("iterator", () => {
    const magazine = new Magazine(
      "name",
      new Pages([
        new Page(1, "type", "material"),
        new Page(2, "type", "material")
      ])
    );
    let result;
    for (let page of magazine) {
      result = page;
    }
    expect(result).toEqual(
      `Magazine: name with number of pages: 2, here is page type #2 and it's material is material`
    );
  });
});
