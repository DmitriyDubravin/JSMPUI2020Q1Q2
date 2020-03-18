import Item from "./item";
import Pages from "./pages";

export default class Magazine extends Item {
  constructor(private _title: string, pages: Pages) {
    super(pages);
  }

  set title(title: string) {
    this._title = title;
  }
  get title(): string {
    return this._title;
  }

  toString() {
    return `Magazine: ${
      this.title
    } with number of pages: ${this.pages.numberOfPages()}`;
  }
}
