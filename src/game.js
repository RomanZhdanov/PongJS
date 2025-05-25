import Paddle from "/src/paddle";
import Ball from "/src/ball";
import Brick from "/src/brick";
import Input from "/src/input";
import { buildLevel, level1 } from "/src/levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    const bricks = buildLevel(this, level1);

    this.gameObjects = [this.paddle, this.ball, ...bricks];

    new Input(this.paddle);
  }

  update(delta) {
    this.gameObjects.forEach((object) => object.update(delta));
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }
}
