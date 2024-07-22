import "phaser"

import Scenes from "./scenes" //Sceneの配列
import GameConfig from "./GameConfig" //Gameオブジェクトに渡すためのコンフィグ

const config : Phaser.Types.Core.GameConfig = {
    width : GameConfig.width,
    height : GameConfig.height,
    type : GameConfig.type,
    parent : GameConfig.parent,

    scale : GameConfig.scale,

    scene : Scenes
}

// console.log(Scenes)

export class Game extends Phaser.Game {
    constructor(config:Phaser.Types.Core.GameConfig){
        super(config)
    }
}

let gameInstance:Game; 

window.addEventListener("click",()=>{
    //すでにゲームのインスタンスが存在している場合、実行しない。
    if(gameInstance)return

    gameInstance = new Game(config);

    gameInstance.scene.start("inputManager")
    gameInstance.scene.start("load")
})