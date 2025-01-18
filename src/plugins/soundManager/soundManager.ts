export default class SoundManager extends Phaser.Scene {
	
	private static _instance:SoundManager
	public static get instance():SoundManager {return this._instance}

	soundInstances:Map<string,Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound>
	soundkeys:Array<string>

	bgm:Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound

	constructor(){
		super({
			key : "soundManager"
		})
		this.soundkeys=[]
		this.soundInstances = new Map()
		this.bgm = null
		SoundManager._instance = this
	}

	addSoundKey(key:string){
		this.soundkeys.push(key)
	}

	createSoundInstances(){
		this.soundkeys.forEach((val:string)=>{
			this.soundInstances.set(val,this.sound.add(val))
		})
	}

	playBGM(key:string){
		
		this.bgm = this.soundInstances.get(key)

		if(this.bgm == null)return;
		this.bgm.loop = true;
		this.bgm.volume = 0.5
		this.bgm.play()
	}

	pauseBGM(){
		this.bgm.pause()
	}

	resumeBGM(){
		this.bgm.resume()
	}

	stopBGM(){
		this.bgm.stop()
		this.bgm = null
	}

}