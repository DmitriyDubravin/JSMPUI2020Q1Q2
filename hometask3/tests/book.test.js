import Book from "./../src/book";
import Pages from "./../src/pages";
import Page from "./../src/page";
import { checkGetter, checkSetter } from "./support";

describe("Book", () => {
  test("set title()", () => {
    checkSetter(new Book(), "title", "Title");
  });
  test("get title()", () => {
    checkGetter(new Book(), "title", "Title");
  });
  test("set author()", () => {
    checkSetter(new Book(), "author", "Name");
  });
  test("get author()", () => {
    checkGetter(new Book(), "author", "Name");
  });
  test("toString", () => {
    const title = "Title";
    const author = "Name";
    const pages = new Pages([new Page(1, "type", "material"), new Page(2, "type", "material")]);
    const book = new Book(title, author, pages);
    expect(book.toString()).toBe(
      `Book: ${title} by ${author} with number of pages: ${pages.numberOfPages()}`
    );
  });
});
