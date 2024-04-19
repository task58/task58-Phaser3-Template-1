import imageAssets from "../assets/imageAssets"



export default class LoadScene extends Phaser.Scene {
    constructor(){
        super({
            key : "load"
        })
    }

    preload(){
        const loadingText =(prog:number):string=>`Now Loading... ${Math.round(prog * 100)}`

        const currentLoadingText = this.add.text(10,10,loadingText(0))

        this.load.on("progress",(prog:number)=>{
            currentLoadingText.text = loadingText(prog);
        })

        for(var image of imageAssets){
            this.load.image(image.key,image.path)
        }

        for(var i=0;i < 100;i++){
            for(var image of imageAssets){
                this.load.image(image.key,image.path)
            }
        }

        this.load.on("complete",()=>{
            this.scene.start("title")
        })


    }
}       
