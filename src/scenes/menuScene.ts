export default class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key:"menu"
        })
    }


    preload(){
        const TitleText = this.add.text(250,250,"メニューです")
        TitleText.setOrigin(0.5,0.5).setFont("メイリオ").setFontSize(100)

        const image = this.add.image(10,10,"atom_Hydrogen_64x64")
    }
    
    update(): void {
        
    }
}