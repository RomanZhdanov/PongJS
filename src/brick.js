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
      this.game.ball.speed.x =
        Math.sign(this.game.ball.speed.x) *
        (Math.abs(this.game.ball.speed.x) + 0.2);
      this.game.ball.speed.y = -(
        Math.sign(this.game.ball.speed.y) *
        (Math.abs(this.game.ball.speed.y) + 0.2)
      );
      this.game.score += this.points;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
