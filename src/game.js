import Paddle from "/src/paddle";
import Ball from "/src/ball";
import Brick from "/src/brick";
import Input from "/src/input";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    const bricks = [];

    for (let i = 0; i < 15; i++) {
      bricks.push(new Brick(this, { x: i * 52, y: 30 }));
    }

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
