export default class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key:"title"
        })
    }

    preload(){
        const TestImage = this.add.image(50,50,"test_white")
    }
}