import Triangle from "./triangle";
import Point from "./point";

console.log("\n\n#1");

// new Shape(); // throws error
const triangle = new Triangle("blue", false);
triangle.color = "red";
console.log(triangle);

const triangle2 = new Triangle([1, 2, 3, 4, 5, 6]);
const Pt2 = triangle2.getPerimeter();
console.log(Pt2);

const triangle3 = new Triangle(
  new Point(1, 2),
  new Point(3, 4),
  new Point(5, 6)
);
const Pt3 = triangle3.getPerimeter();
console.log(Pt3);

console.log("\n\n#2");

const p = new Point(3, 4);
console.log(p);
console.log(p.toString());
console.log(p.distance());
console.log(p.distance(1, 2));
console.log(p.distance(new Point(4, 18)));

console.log("\n\n#3");
const triangle4 = new Triangle(
  new Point(1, 2),
  new Point(1, 4),
  new Point(3, 2)
);
const type4 = triangle4.printType();
console.log(type4);
