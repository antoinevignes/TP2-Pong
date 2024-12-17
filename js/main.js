import { Ball } from "./classes/ball.js";

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const ball = new Ball(320, 180, 10, "red");

function gameLoop() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.height);

  ball.move(context);
  ball.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop();
