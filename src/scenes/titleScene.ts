import xGameConfig from "../GameConfig"

export default class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key:"title"
        })
    }


    preload(){
        const TitleText = this.add.text(xGameConfig.width/2,250,"タイトルです")
        TitleText.setOrigin(0.5,0.5).setFont("メイリオ").setFontSize(100)
    }
    
    update(): void {
        
    }
}