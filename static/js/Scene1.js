
class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image('bg_1', 'public/assets/spritesheets/bg-1.png');
    this.load.image('bg_2', 'public/assets/spritesheets/bg-2.png');
    this.load.image('ground', 'public/assets/spritesheets/ground.png');
    this.load.spritesheet("player", "public/assets/spritesheets/bee.png", {
      frameWidth: 37,
      frameHeight: 39
    });
  }

  create() {
    this.add.text(20, 20, "Loading...");
    setTimeout(() => {
      this.scene.start("playGame");
    }, 1000);
  }
}
