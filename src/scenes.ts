//Scenes
import LoadScene from "./scenes/loadScene"; //ロード画面
import TitleScene from "./scenes/titleScene"; //タイトル画面
import MenuScene from "./scenes/menuScene"; //メニュー画面

//Plugins
import InputManager from "./plugins/inputManager/InputManager"; //入力管理

//testScenes
import TestScene from "./scenes/testScene";

export default [LoadScene,TitleScene,MenuScene,InputManager]
export {LoadScene,TitleScene,MenuScene,InputManager}