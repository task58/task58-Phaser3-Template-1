import testimage from "./images/test_64x64.png"

class imageAsset {
    key:string
    base64:string
}

const imageAssets:imageAsset[] = [
    {key:"test_white",base64:testimage}
]


export default imageAssets