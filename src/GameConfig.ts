class xGameConfig{
    static width = 1600
    static height = 900
    static type = Phaser.AUTO
    static parent = "game"

    static scale = {
        mode : Phaser.Scale.FIT,
        autoCenter : Phaser.Scale.CENTER_BOTH,
        parent : "game"
    }
}

export default xGameConfig