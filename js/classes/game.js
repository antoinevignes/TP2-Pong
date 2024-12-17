export class Game {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  get position() {
    return { x: this.x, y: this.y };
  }

  set position({ x, y }) {
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
