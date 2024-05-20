export default class InputManager extends Phaser.Scene{

    keys:Phaser.Input.Keyboard.Key[];


    constructor(){
        super({
            key:"inputManager"
        })
    }

    preload(){
        this.keys = []

        var kc = Phaser.Input.Keyboard.KeyCodes;

        for(var i:number = 0;i < 300;i++){
            this.keys[i] = this.input.keyboard.addKey(i);
        }
    }

    keydown(keycode:number):boolean{
        return this.keys[keycode].isDown
    }

    keyup():boolean{
        return true
    }
}