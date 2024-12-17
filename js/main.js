import { Ball } from "./classes/ball.js";
import { Player } from "./classes/player.js";

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const ball = new Ball(320, 180, 10, "red");
const player1 = new Player(10, 150, 5, 80, "blue");
const player2 = new Player(625, 150, 5, 80, "green");

canvas.addEventListener("mousemove", (e) => {
  const canvasRect = canvas.getBoundingClientRect();
  const mouseY = e.clientY - canvasRect.top;
  player1.moveTo(mouseY);
  player2.moveTo(mouseY);
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  ball.move(canvas);
  ball.draw(context);

  player1.draw(context);
  player2.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop();
