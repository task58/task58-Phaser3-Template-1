/**
 * ユーザーのキーボード入力などを取得するためのプラグイン
 * @extends Phaser.Scene
 */
export default class InputManager extends Phaser.Scene{

    /**Phaser3のキーオブジェクト */
    private keys:Phaser.Input.Keyboard.Key[];

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

    /**
     * 
     * @param keycode キーコード。型はnumberだが``Phaser.Input.Keyboard.KeyCodes``の中身がnumberのため、それを使用可能
     * @returns キーが押されていれば``true``、押されていなければ``false``を返す。
     */
    keydown(keycode:number):boolean{
        return this.keys[keycode].isDown
    }

    /**
     * 
     * @param keycode キーコード。型はnumberだが``Phaser.Input.Keyboard.KeyCodes``の中身がnumberのため、それを使用可能
     * @returns キーが上がった時に``true``を返す。
     */
    keyup(keycode:number):boolean{
        return this.keys[keycode].isUp
    }

    /**InputManagerのインスタンス。一度launchしたらここから取得することを推奨。複数のInputManagerをlaunchすることは推奨しない。*/
    static get instance():InputManager{
        return InputManager._instance
    }
}