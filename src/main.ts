import "phaser"

import Scenes from "./scenes/scenes"

const config : Phaser.Types.Core.GameConfig = {
    width : 500,
    height : 500,
    type : Phaser.AUTO,
    parent : "game",

    scale : {
        mode : Phaser.Scale.FIT,
        autoCenter : Phaser.Scale.CENTER_BOTH,
        parent : "game"
    },

    scene : Scenes,

    

}

export class Game extends Phaser.Game {
    constructor(config:Phaser.Types.Core.GameConfig){
        super(config)
    }
}

window.addEventListener("load",()=>{
    const game = new Game(config);
    game.scene.start("load")
})