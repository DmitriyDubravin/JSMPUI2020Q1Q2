export default abstract class Shape {
  protected _color: string;
  protected _filled: boolean;

  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color;
  }
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
