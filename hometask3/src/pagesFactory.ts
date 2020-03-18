import Page from "./page";
import { PageTypes, PageMaterials } from "./enums";

interface Settings {
  [pageType: string]: [PageTypes, PageMaterials];
}

const settings: Settings = {
  magazine: [PageTypes.Article, PageMaterials.Glossy],
  comics: [PageTypes.Images, PageMaterials.Glossy]
};

export const createPages = (numberOfPages: number, pageType: string) => {
  const pageSettings: [PageTypes, PageMaterials] = settings[pageType] || [
    PageTypes.Text,
    PageMaterials.Simple
  ];

  return Array.from({ length: numberOfPages }).map((page, index) => {
    const i = index + 1;
    return new Page(i, ...pageSettings);
  });
};
