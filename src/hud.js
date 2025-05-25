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
    ctx.fillText(`Lives: ${this.game.lives}`, 10, 15);
    ctx.fillText(`Score: ${this.game.score}`, 100, 15);
    ctx.fillText(`Level: ${this.game.currentLevel + 1}`, 200, 15);
  }
}
