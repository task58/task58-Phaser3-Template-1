import "phaser"

import Scenes from "./scenes"
import GameConfig from "./GameConfig"

const config : Phaser.Types.Core.GameConfig = {
    width : GameConfig.width,
    height : GameConfig.height,
    type : GameConfig.type,
    parent : GameConfig.parent,

    scale : GameConfig.scale,

    scene : Scenes
}

console.log(Scenes)

export class Game extends Phaser.Game {
    constructor(config:Phaser.Types.Core.GameConfig){
        super(config)
    }
}

window.addEventListener("click",()=>{
    const game = new Game(config);

    game.scene.start("inputManager")
    game.scene.start("load")
})