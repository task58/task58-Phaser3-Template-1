export default class TestScene extends Phaser.Scene {
    constructor(){
        super({
            key : "test"
        })
    }

    preload():void{
        const TestText = this.add.text(10,10,"testTest!")
        
    }
}