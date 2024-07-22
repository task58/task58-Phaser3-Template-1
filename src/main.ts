import "phaser"

import Scenes from "./scenes"
import xGameConfig from "./GameConfig"

const config : Phaser.Types.Core.GameConfig = {
    width : xGameConfig.width,
    height : xGameConfig.height,
    type : xGameConfig.type,
    parent : xGameConfig.parent,

    scale : xGameConfig.scale,

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