import xGameConfig from "../GameConfig"
import { InputManager } from "../scenes"

export default class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key:"title"
        })
    }

    preload(){

        const TitleText = this.add.text(xGameConfig.width/2,250,"タイトルです")
        TitleText.setOrigin(0.5,0.5).setFont("メイリオ").setFontSize(100)

        const image = this.add.image(10,10,"atom_Hydrogen_64x64")
    }
    
    update(): void {

        if(InputManager.instance.keydown(Phaser.Input.Keyboard.KeyCodes.SPACE)){
            this.scene.switch("menu")
        }
        
    }
}