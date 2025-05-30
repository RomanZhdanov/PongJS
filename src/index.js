import Game from "/src/game";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
// game.start();

let lastTime = 0;

function gameLoop(timestamp) {
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(delta);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
