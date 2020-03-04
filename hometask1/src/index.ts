// 1

abstract class Shape {
  protected _color: string;
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color;
  }

  protected _filled: boolean;
  get filled(): boolean {
    return this._filled;
  }
  set filled(filled: boolean) {
    this._filled = filled;
  }

  constructor();
  constructor(color: string, filled: boolean);
  constructor(color?: string, filled?: boolean) {
    if (color !== undefined && filled !== undefined) {
      this._color = color;
      this._filled = filled;
    } else {
      this._color = "green";
      this._filled = true;
    }
  }

  toString() {
    return `A Shape with color of ${this._color} and ${
      this._filled ? "filled" : "Not filled"
    }.`;
  }
  abstract getPerimeter(): number;
}

class Triangle extends Shape {
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

// 2
const getDistance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  return Math.hypot(x1 - x2, y1 - y2);
};

class Point {
  _x: number;
  get x(): number {
    return this._x;
  }
  set x(x: number) {
    this._x = x;
  }

  _y: number;
  get y(): number {
    return this._y;
  }
  set y(y: number) {
    this._y = y;
  }

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this._x = x !== undefined ? x : 0;
    this._y = y !== undefined ? y : 0;
  }
  toString() {
    return `(${this._x},${this._y})`;
  }

  distance(): number;
  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(pointOrX?: Point | number, y?: number) {
    if (pointOrX === undefined && y === undefined) {
      return getDistance(0, 0, this._x, this._y);
    }
    if (typeof pointOrX !== "number") {
      return getDistance(pointOrX.x, pointOrX.y, this._x, this._y);
    }
    return getDistance(pointOrX, y, this._x, this._y);
  }
}

// 3

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
