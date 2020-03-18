import Item from "./item";
import Pages from "./pages";

export default class Book extends Item {
  constructor(private _title: string, private _author: string, pages: Pages) {
    super(pages);
  }

  set title(title: string) {
    this._title = title;
  }
  get title(): string {
    return this._title;
  }
  set author(author: string) {
    this._author = author;
  }
  get author(): string {
    return this._author;
  }

  toString() {
    return `Book: ${this.title} by ${
      this.author
    } with number of pages: ${this.pages.numberOfPages()}`;
  }
}
