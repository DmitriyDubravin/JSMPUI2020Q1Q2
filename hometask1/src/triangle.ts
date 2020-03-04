import Shape from "./shape";
import Point from "./point";

export default class Triangle extends Shape {
  private v1: Point;
  private v2: Point;
  private v3: Point;

  constructor(p1: Array<number>);
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1?: string, p2?: boolean);
  constructor(
    p1?: Array<number> | Point | string,
    p2?: Point | boolean,
    p3?: Point
  ) {
    if (Array.isArray(p1)) {
      super();
      this.v1 = new Point(p1[0], p1[1]);
      this.v2 = new Point(p1[2], p1[3]);
      this.v3 = new Point(p1[4], p1[5]);
    } else if (typeof p1 === "string" && typeof p2 === "boolean") {
      super(p1, p2);
      this.v1 = new Point();
      this.v2 = new Point();
      this.v3 = new Point();
    }
    if (
      typeof p1 !== "string" &&
      !Array.isArray(p1) &&
      typeof p2 !== "boolean" &&
      p3 !== undefined
    ) {
      super();
      this.v1 = p1;
      this.v2 = p2;
      this.v3 = p3;
    }
  }
  toString() {
    return `Triangle[v1=(${(this.v1.x, this.v1.y)}),v2=(${(this.v2.x,
    this.v2.y)}),v3=(${(this.v3.x, this.v3.y)})]`;
  }
  getPerimeter() {
    return (
      this.v1.distance(this.v2) +
      this.v2.distance(this.v3) +
      this.v3.distance(this.v1)
    );
  }
  printType() {
    const d1 = this.v1.distance(this.v2);
    const d2 = this.v2.distance(this.v3);
    const d3 = this.v3.distance(this.v1);
    if (d1 === d2 && d2 === d3 && d3 === d1) {
      return "equilateral";
    }
    if (d1 === d2 || d1 === d3 || d3 === d2) {
      return "isosceles";
    }
    return "scalene";
  }
}
