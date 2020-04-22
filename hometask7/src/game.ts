import { Categories } from "./enums";
import { checkEven } from "./helpers";
import { Questionnaire } from "./questionnaire";
import { Player } from "./player";
import { Players } from "./players";
import { logger } from "./logger";

export class Game {
  private questionnaire: Questionnaire;
  private players: Players;
  private player: Player;
  private winCount: number = 5;

  constructor(players: Player[]) {
    this.questionnaire = new Questionnaire(Categories, 50);
    this.players = new Players(players);
    this.player = this.players.current;
  }

  public addPlayer(player: Player) {
    this.players.add(player);
  }

  public run() {
    this.roll();
  }

  private roll() {
    const roll = this.generateRoll();

    if (this.player.inPenaltyBox) {
      if (checkEven(roll)) {
        this.player.staysInPenalty();
        this.nextTurn();
        return;
      }
      this.player.goesOutOfPenalty();
    }

    this.player.setPlace(roll);
    this.questionnaire.setCategory(this.player.place).askQuestion();
    this.questionnaire.evaluateAnswer()
      ? this.wrongAnswer()
      : this.correctAnswer();
  }

  private wrongAnswer() {
    logger.wrong();
    this.player.goesInPenalty();
    this.nextTurn();
  }

  private correctAnswer() {
    logger.correct();
    this.player.addCoin();
    if (this.player.purse >= this.winCount) {
      logger.victory();
      return;
    }
    this.nextTurn();
  }

  private nextTurn() {
    logger.newTurn();
    this.player = this.players.next();
    this.roll();
  }

  private generateRoll(): number {
    const roll = Math.floor(Math.random() * 6) + 1;
    logger.rolled(roll);
    return roll;
  }
}
