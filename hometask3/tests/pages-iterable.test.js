import Pages from "../src/pages";
import Page from "../src/page";
import Magazine from "../src/magazine";

describe("PagesIterable", () => {
  test("index", () => {
    const magazine = new Magazine(
      "name",
      new Pages([
        new Page(1, "type", "material"),
        new Page(2, "type", "material"),
        new Page(3, "type", "material"),
        new Page(4, "type", "material")
      ])
    );
    expect(magazine.index).toBe(0);
    let index = 1;
    for (let page of magazine) {
      expect(magazine.index).toBe(index);
      index++;
    }
    expect(magazine.index).toBe(4);
    expect(typeof magazine.index).toBe("number");
  });
});
