import imageAssets from "../assets/imageAssets"
import soundAssets from "../assets/soundAssets"
import SoundManager from "../plugins/soundManager/soundManager"


export default class LoadScene extends Phaser.Scene {
    constructor(){
        super({
            key : "load"
        })
    }

    private isFileLoadCompleted:boolean

    preload(){
        this.isFileLoadCompleted = false


        const loadingText =(prog:number):string=>`Now Loading... ${Math.round(prog * 100)}`

        const currentLoadingText = this.add.text(10,10,loadingText(0))

        this.load.on("progress",(prog:number)=>{
            currentLoadingText.text = loadingText(prog);
        })

        //画像をロード
        for(var image of imageAssets){
            this.load.image(image.key,image.base64)
        }

		for (var sound of soundAssets) {
			this.load.audio({
				key : sound.key,
				url : sound.data
			});
			SoundManager.instance.addSoundKey(sound.key)
			console.log(`Added Sound : ${sound.key}`);
		}

        this.load.on("complete",()=>{
            console.log("Load Files : complete")
            this.isFileLoadCompleted = true
        })


    }

    update(time: number, delta: number): void {
        if(this.isFileLoadCompleted){
            console.log("All Load Completed. Start the Title Scene!")
            this.scene.switch("title")
        }
    }
}       
