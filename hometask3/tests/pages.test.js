import Pages from "./../src/pages";
import Page from "./../src/page";

describe("Pages", () => {
  test("getPages()", () => {
    const pagesArr = [new Page(1, "type", "material"), new Page(2, "type", "material")];
    const pages = new Pages(pagesArr);
    expect(pages.getPages()).toEqual(pagesArr);
  });
  test("numberOfPages()", () => {
    const pages = new Pages([new Page(1, "type", "material"), new Page(2, "type", "material")]);
    expect(pages.numberOfPages()).toBe(2);
  });
});
