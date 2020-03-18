import Item from "./item";
import Pages from "./pages";

export default class Comics extends Item {
  constructor(
    private _title: string,
    private _author: string,
    private _artist: string,
    pages: Pages
  ) {
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
  set artist(artist: string) {
    this._artist = artist;
  }
  get artist(): string {
    return this._artist;
  }

  toString() {
    return `Comics: ${this.title} by ${this.author}, the artist is ${
      this.artist
    }, number of pages: ${this.pages.numberOfPages()}`;
  }
}
