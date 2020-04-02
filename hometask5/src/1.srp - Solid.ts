class UberTree {
  private _life: number = 10;
  private processFactor: number = 250;
  public die() {
    this._life = 0;
  }
  public grow() {
    this._life += 1;
  }
  public cut() {
    const wood = this._life * 10;
    this._life = 0;
    return wood;
  }
  public process() {
    return this.cut() * this.processFactor;
  }
}

// --- --- --- //

class Tree {
  private _life: number = 10;
  get life() {
    return this._life;
  }
  public grow() {
    this._life += 1;
  }
  public die() {
    this._life = 0;
  }
}
class SawMill {
  private efficiency: number = 7;
  public process(tree: Tree) {
    const wood = tree.life * this.efficiency;
    tree.die();
    return wood;
  }
}
class PaperFactory {
  private paperQuality: number = 0.95;
  private factor: number = 250;
  public process(wood: number) {
    return wood * this.factor * this.paperQuality;
  }
}
