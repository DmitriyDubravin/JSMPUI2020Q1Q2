import { Game } from "./game";
import { Player } from "./player";

const game = new Game([new Player("Chet"), new Player("Pat")]);
game.addPlayer(new Player("Sue"));
game.addPlayer(new Player("Joe"));
game.run();
