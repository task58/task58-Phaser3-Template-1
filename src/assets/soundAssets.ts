class soundAsset {
	key:string
	data:any

	constructor(key:string, data:any){
		this.key = key;
		this.data = data;
	}
}

//BGM
import unnamed from "./sounds/Unnamed.m4a"

const soundAssets = [
	new soundAsset("sound_unnamed",unnamed)
]

export default soundAssets