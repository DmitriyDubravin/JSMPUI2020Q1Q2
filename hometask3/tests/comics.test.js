import Comics from "./../src/comics";
import Pages from "./../src/pages";
import Page from "./../src/page";
import { checkGetter, checkSetter } from "./support";

describe("Comics", () => {
  test("set title()", () => {
    checkSetter(new Comics(), "title", "Title");
  });
  test("get title()", () => {
    checkGetter(new Comics(), "title", "Title");
  });
  test("set author()", () => {
    checkSetter(new Comics(), "author", "Name");
  });
  test("get author()", () => {
    checkGetter(new Comics(), "author", "Name");
  });
  test("set artist()", () => {
    checkSetter(new Comics(), "artist", "Name");
  });
  test("get artist()", () => {
    checkGetter(new Comics(), "artist", "Name");
  });
  test("toString", () => {
    const title = "Title";
    const author = "Name";
    const artist = "Name";
    const pages = new Pages([
      new Page(1, "type", "material"),
      new Page(2, "type", "material")
    ]);
    const book = new Comics(title, author, artist, pages);
    expect(book.toString()).toBe(
      `Comics: ${title} by ${author}, the artist is ${artist}, number of pages: ${pages.numberOfPages()}`
    );
  });
});
