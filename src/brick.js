import { detectCollision } from "/src/collisionDetection";

export default class Brick {
  constructor(game, position, points) {
    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.points = points;

    this.markedForDeletion = false;
  }

  update(delta) {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.x = this.game.ball.speed.x + 0.1;
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.score += this.points;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
