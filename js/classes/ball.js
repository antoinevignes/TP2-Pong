import { Game } from "./game.js";

export class Ball extends Game {
  constructor(x, y, radius, color) {
    super(x, y, radius * 2, radius * 2, color);
    this.radius = radius;
    this.speedX = 2;
    this.speedY = 2;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }

  move(canvas) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebond sur les bords
    if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
      this.speedY = -this.speedY;
    }
    if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
      this.speedX = -this.speedX;
    }
  }
}
