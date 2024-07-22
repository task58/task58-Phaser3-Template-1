//読み込みデータセットの型
class imageAsset {
    key:string
    base64:string
}

//テスト用画像
import testimage from "./images/test_64x64.png"

//原子
import atom_Hydrogen_64x64 from "./images/atom_Hydrogen_64x64.png"


const imageAssets:imageAsset[] = [
    {key:"test_white",base64:testimage},
    {key:"atom_Hydrogen_64x64",base64:atom_Hydrogen_64x64}
]


export default imageAssets