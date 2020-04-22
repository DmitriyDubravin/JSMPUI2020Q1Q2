import { logger } from "./logger";

export class Player {
  private _place: number = 0;
  private _purse: number = 0;
  private _inPenaltyBox: boolean = false;
  constructor(private _name: string) {}

  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set place(num: number) {
    this._place = num;
  }
  get place(): number {
    return this._place;
  }
  set purse(num: number) {
    this._purse = num;
  }
  get purse(): number {
    return this._purse;
  }
  set inPenaltyBox(bool: boolean) {
    this._inPenaltyBox = bool;
  }
  get inPenaltyBox(): boolean {
    return this._inPenaltyBox;
  }
  setPlace(roll: number) {
    this._place = this._place + roll;
    logger.newLocation(this);
  }
  addCoin() {
    this._purse = this._purse + 1;
    logger.has(this);
  }
  staysInPenalty() {
    logger.staysInPenalty(this);
  }
  goesOutOfPenalty() {
    logger.goesOutPenalty(this);
    this.inPenaltyBox = false;
  }
  goesInPenalty() {
    logger.goesInPenalty(this);
    this.inPenaltyBox = true;
  }
}
