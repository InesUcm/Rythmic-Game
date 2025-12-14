import MenuInicio from "./menuInicio.js"
import Level from "./level.js"
import MenuLost from "./menuLost.js"
import MenuWin from "./menuWin.js"

let config = {
  type: Phaser.AUTO,
  parent: "juego",
  pixelArt: true,
  scale: {
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    mode: Phaser.Scale.FIT,
    width: 768,
    height: 512,
    zoom: 1,
  },
  scene: [MenuInicio, Level, MenuLost, MenuWin],
	fps: {
		target: 60
	},
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
    checkCollision: {
      up: true,
      down: true,
      left: true,
      right: true,
    },
  },
  title: "PVLI Extraordinaria 23/24",
  version: "template",
  transparent: false,
};

new Phaser.Game(config);
