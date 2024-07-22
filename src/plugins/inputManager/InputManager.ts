export default class InputManager extends Phaser.Scene{

    keys:Phaser.Input.Keyboard.Key[];

    private static _instance:InputManager;


    constructor(){
        super({
            key:"inputManager"
        })

        InputManager._instance = this;
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

    keyup(keycode:number):boolean{
        return this.keys[keycode].isUp
    }

    static get instance():InputManager{
        return InputManager._instance
    }
}