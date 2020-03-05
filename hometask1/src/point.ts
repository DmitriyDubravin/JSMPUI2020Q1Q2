export default class Point {
  _x: number;
  _y: number;

  get x(): number {
    return this._x;
  }
  set x(x: number) {
    this._x = x;
  }
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
  getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
    return Math.hypot(x1 - x2, y1 - y2);
  };
  distance(): number;
  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(pointOrX?: Point | number, y?: number) {
    if (pointOrX === undefined && y === undefined) {
      return this.getDistance(0, 0, this._x, this._y);
    }
    if (typeof pointOrX !== "number") {
      return this.getDistance(pointOrX.x, pointOrX.y, this._x, this._y);
    }
    return this.getDistance(pointOrX, y, this._x, this._y);
  }
}
