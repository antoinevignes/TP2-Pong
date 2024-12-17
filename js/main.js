import { Ball } from "./classes/ball.js";

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const ball = new Ball(320, 180, 10, "red");

ball.draw(context);
