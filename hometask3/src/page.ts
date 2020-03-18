import { PageTypes, PageMaterials } from "./enums";

export default class Page {
  constructor(
    private pageNumber: number,
    private pageType: PageTypes,
    private pageMaterial: PageMaterials
  ) {}

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}
