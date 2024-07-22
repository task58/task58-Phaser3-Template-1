/**
 * Gameオブジェクトに渡すコンフィグ
 */
class GameConfig{
    /** 画面の横幅*/
    static width = 1600

    /**画面の立幅 */
    static height = 900

    /** */
    static type = Phaser.AUTO

    /**ゲームを描画するcanvasを作るdivのid */
    static parent = "game"

    static scale = {
        mode : Phaser.Scale.FIT,
        autoCenter : Phaser.Scale.CENTER_BOTH,
        parent : "game"
    }
}

export default GameConfig