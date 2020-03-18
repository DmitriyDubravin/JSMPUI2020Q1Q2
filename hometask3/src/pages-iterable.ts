import Pages from "./pages";

export default class PagesIterable {
  protected pages: Pages;
  index: number = 0;
  next() {
    if (this.index < this.pages.getPages().length) {
      return {
        value: `${this.toString()}, ${this.pages
          .getPages()
          [this.index++].toString()}`,
        done: false
      };
    } else {
      return { done: true };
    }
  }
}
