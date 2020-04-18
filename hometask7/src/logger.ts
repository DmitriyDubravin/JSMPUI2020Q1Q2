import { Players } from "./players";

export const logger = {
  newTurn() {
    console.log("---");
  },
  playersCount(count) {
    console.log("They are player number " + count);
  },
  added(player) {
    console.log(player.name + " was added");
  },
  correct() {
    console.log("Answer was correct!!!!");
  },
  wrong() {
    console.log("Question was incorrectly answered");
  },
  goesInPenalty(player) {
    console.log(player.name + " was sent to the penalty box");
  },
  goesOutPenalty(player) {
    console.log(player.name + " is getting out of the penalty box");
  },
  staysInPenalty(player) {
    console.log(player.name + " is not getting out of the penalty box");
  },
  has(player) {
    console.log(player.name + " now has " + player.purse + " Gold Coins.");
  },
  current(player) {
    console.log(player.name + " is the current player");
  },
  newLocation(player) {
    console.log(player.name + "'s new location is " + player.place);
  },
  rolled(roll: number) {
    console.log("They have rolled a " + roll);
  },
  victory() {
    console.log("-----Game is finished!-----");
  },
};
