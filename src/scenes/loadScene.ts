import imageAssets from "../assets/imageAssets"


export default class LoadScene extends Phaser.Scene {
    constructor(){
        super({
            key : "load"
        })
    }

    private isBase64LoadCompleted:boolean
    private isFileLoadCompleted:boolean

    preload(){
        this.isBase64LoadCompleted = false
        this.isFileLoadCompleted = false

        let base64LoadCount = 0

        const loadingText =(prog:number):string=>`Now Loading... ${Math.round(prog * 100)}`

        const currentLoadingText = this.add.text(10,10,loadingText(0))

        this.load.on("progress",(prog:number)=>{
            currentLoadingText.text = loadingText(prog);
        })

        for(var image of imageAssets){
            this.textures.addBase64(image.key,image.base64)
        }

        this.textures.on("onload",(key:string)=>{
            console.log(`Base64 : ${key} is loaded`)
            base64LoadCount++

            if(imageAssets.length == base64LoadCount){
                this.isBase64LoadCompleted = true
                console.log("Load base64 textures : complete")
            }
        })

        this.load.on("complete",()=>{
            console.log("Load Files : complete")
            this.isFileLoadCompleted = true
        })


    }

    update(time: number, delta: number): void {
        if(this.isFileLoadCompleted && this.isBase64LoadCompleted){
            console.log("All Load Completed. Start the Title Scene!")
            this.scene.switch("title")
        }
    }
}       
