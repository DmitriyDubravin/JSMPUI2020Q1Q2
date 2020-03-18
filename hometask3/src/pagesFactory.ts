import Page from "./page";

export const createPages = (numberOfPages: number, pageType: string) => {
  let settings: [string, string] = ['with text','simple paper'];
  switch (pageType) {
    case "magazine":
      settings = ["with article", "glossy paper"];
    case "comics":
      settings = ["with images", "glossy paper"];
  }
  return Array.from({ length: numberOfPages }).map((page, index) => {
    const i = index + 1;
    return new Page(i, ...settings);
  });
};
