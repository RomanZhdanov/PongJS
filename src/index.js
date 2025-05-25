import Paddle from "/src/paddle";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(delta);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
