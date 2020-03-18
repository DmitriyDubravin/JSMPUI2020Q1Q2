import Book from "./book";
import Pages from "./pages";
import Magazine from "./magazine";
import Comics from "./comics";
import { createPages } from "./pagesFactory";

const book = new Book(
  "Harry Potter",
  "J. K. Rowling",
  new Pages(createPages(4, "book"))
);
for (let page of book) {
  console.log(page);
}

const magazine = new Magazine("G.O", new Pages(createPages(2, "magazine")));
for (let page of magazine) {
  console.log(page);
}

const comics = new Comics(
  "Spider-Man",
  "Stan Lee",
  "Some artist",
  new Pages(createPages(2, "comics"))
);
for (let page of comics) {
  console.log(page);
}
