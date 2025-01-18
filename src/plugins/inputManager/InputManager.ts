/**
 * Input Manager  
 * プレイヤー入力を管轄する。  
 * ``Phaser.Scene``を継承しているためSceneとして登録しないと使用不可
 */
export class InputManager extends Phaser.Scene {

	private keys: Phaser.Input.Keyboard.Key[];
	private ActionBinds:Map<string,InputAction>
	actions:Map<string,boolean>

	private oldKeys: boolean[];

	private static _instance: InputManager;


	constructor() {
		super({
			key:"inputManager"
		});

		InputManager._instance = this;
	}

	preload() {
		this.keys = [];
		this.oldKeys = [];
		this.ActionBinds = new Map()
		this.actions = new Map()

		var kc = Phaser.Input.Keyboard.KeyCodes;

		for (var i: number = 0; i < 300; i++) {
			this.keys[i] = this.input.keyboard.addKey(i);
		}
	}

	update(time: number, delta: number): void {
		for (var i: number = 0; i < 300; i++) {
			this.oldKeys[i] = this.keys[i].isDown;
		}
		this.ActionBinds.forEach((action:InputAction,key:string)=>{
			let result = false
			if(action){
				action.KeyCodes.forEach((val:number)=>{
					let resA:boolean = false;
					switch(action.type){
						case "key":
							resA = this.key(val)
							break;
						case "keydown":
							resA = this.keydown(val)
							break;
						case "keyup":
							resA = this.keydown(val)
							break;
					}

				result = resA ? true : result
				})
			}

			this.actions.set(key,result)
		})
	}

	/**
	 * キーが押されている場合に``true``を返す
	 * @param keycode ``Phaser.Input.Keyboard.KeyCodes``から選ぶとよい
	 * @returns
	 */
	key(keycode: number): boolean {
		return this.keys[keycode].isDown;
	}

	/**
	 * キーが押された瞬間に``true``を返す。
	 * @param keycode ``Phaser.Input.Keyboard.KeyCodes``から選ぶとよい
	 * @returns
	 */
	keydown(keycode: number): boolean {
		return this.keys[keycode].isDown && !this.oldKeys[keycode]
	}

	/**
	 * キーが離された瞬間に``true``を返す
	 * @param keycode ``Phaser.Input.Keyboard.KeyCodes``から選ぶとよい
	 * @returns
	 */
	keyup(keycode: number): boolean {
		return this.keys[keycode].isUp && this.oldKeys[keycode]
	}

	// setAction(actionName: string,KeyCodes:number[]){
	// 	let input:InputAction = {
	// 		name : actionName,
	// 		type : "key",
	// 		KeyCodes : KeyCodes
	// 	}
	// 	this.ActionBinds.set(actionName,input)
	// }

	/**
	 * InputManagerに新規のActionを設定する。  
	 * 同じactionNameのものがすでに設定されている場合、上書きされる。
	 * @param actionName 
	 * @param KeyCodes 
	 */
	setAction(actionName:string,KeyCodes:number[]):this;

	/**
	 * InputManagerに新規のActionを設定する。  
	 * 同じactionNameのものがすでに設定されている場合、上書きされる。
	 * @param inputAction 
	 */
	setAction(inputAction:InputAction):this;

	setAction(arg1:unknown,arg2?:unknown):this{
		if(typeof arg1 === "string"){
			if(arg2 instanceof Array){
				let input:InputAction = {
					name:arg1,
					type:"key",
					KeyCodes:arg2
				}
				this.ActionBinds.set(arg1,input)
				return this;
			}
		}else if(isInputAction(arg1)){
			this.ActionBinds.set(arg1.name,arg1)
			return this;
		}else{
			throw new Error("IllegalArgument : InputManager.setAction()")
		}
	}

	/**
	 * 該当のactionNameに割り当てられたキーが有効状態か調べる。
	 * @param actionName ``setAction``時に指定した``actionName``あるいは``InputAction.name``
	 * @returns 有効なら``true``
	 */
	isAction(actionName: string): boolean {
		return this.actions.get(actionName)
	}

	static get instance(): InputManager{
		return InputManager._instance
	}
}


export interface InputAction {
	name:string
	type:ActionType
	KeyCodes:number[]
}

export function isInputAction(value:unknown):value is InputAction{
	if(typeof value !== "object")return false;

	const {name,type,KeyCodes} = value as Record<keyof InputAction, unknown>

	if(typeof name !== "string")return false;
	if(!isActionType(type))return false;
	if(!(KeyCodes instanceof Array))return false;
	for(let i of KeyCodes){
		if(typeof i !== "number")return false;
	}
	return true;
}

export type ActionType = "key" | "keydown" | "keyup"

function isActionType(value:unknown):value is ActionType{
	if(typeof value !== "string")return false;

	switch(value){
		case "key":
		case "keydown":
		case "keyup":
			return true;
		default:
			return false;
	}
}

export default InputManager