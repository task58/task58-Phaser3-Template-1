//Scenes
import LoadScene from "./scenes/loadScene"; //ロード画面
import TitleScene from "./scenes/titleScene"; //タイトル画面
import MenuScene from "./scenes/menuScene"; //メニュー画面

//Plugins
import InputManager from "./plugins/inputManager/InputManager"; //入力管理

//testScenes
import TestScene from "./scenes/testScene";
import SoundManager from "./plugins/soundManager/soundManager";

export default [
	InputManager,
	SoundManager,
	LoadScene,
	TitleScene,
	MenuScene,
]

export {
	LoadScene,
	TitleScene,
	MenuScene,
	InputManager,
	SoundManager
}