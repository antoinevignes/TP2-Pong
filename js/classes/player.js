import { Game } from "./game.js";

export class Player extends Game {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  moveTo(y) {
    this.y = y - this.height / 2;
  }
}
