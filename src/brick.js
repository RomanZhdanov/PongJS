export default class Brick {
  constructor(game, position) {
    this.game = game;
    // this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 80;
    this.height = 24;
  }

  update(delta) {}

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
