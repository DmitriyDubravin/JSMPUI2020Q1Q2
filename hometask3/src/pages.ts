import Page from "./page";

export default class Pages {
  constructor(private pages: Page[]) {}
  getPages() {
    return this.pages;
  }
  numberOfPages() {
    return this.pages.length;
  }
}
