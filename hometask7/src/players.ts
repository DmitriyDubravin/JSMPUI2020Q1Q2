import { Player } from "./player";
import { logger } from "./logger";

export class Players {
  private _current: number = 0;
  players: Player[] = [];

  constructor(players: Player[]) {
    players.forEach((player: Player) => {
      this.add(player);
    });
  }

  add(player: Player) {
    this.players.push(player);
    logger.added(player);
    logger.playersCount(this.count);
  }
  next(): Player {
    this._current += 1;
    if (this._current === this.players.length) {
      this._current = 0;
    }
    logger.current(this.current);
    return this.current;
  }
  get current() {
    return this.players[this._current];
  }
  get count() {
    return this.players.length;
  }
}
