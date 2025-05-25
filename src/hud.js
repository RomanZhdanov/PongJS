export default class Hud {
  constructor(game) {
    this.game = game;
    this.height = 20;
  }

  update(delta) {}

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.game.gameWidth, this.height);

    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    ctx.fillText(`Lives: ${this.game.lives}`, 15, 15);
  }
}
