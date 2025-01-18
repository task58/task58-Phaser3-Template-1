const path = require("path");
const pathToPhaser = path.join(__dirname,"node_modules/phaser")
const phaser = path.join(pathToPhaser,"dist/phaser.js")

module.exports = {
    mode : "development",
    entry : "./src/main.ts",
    output : {
        path : __dirname+"/dist",
        filename : "bundle.js"
    },
    resolve : {
        extensions : [".ts",".js"],
        alias : {
            phaser : phaser
        }
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                loader : "ts-loader"
            },
            {
                test: /phaser\.js&/, 
                loader:"expose-loader"
                
            },
            {
                test:/\.(gif|png|jpg)$/,
                loader:"url-loader"
            },
            {
                test:/\.json$/,
                loader:"raw-loader",
                type:"javascript/auto"
            },
			{
				test:/\.m4a$/,
				use : [
					{
						loader : "file-loader",
						options:{
							name:"[name]_[hash].[ext]",
							outputPath:(url, resourcePath)=>{
								if(/bgm/.test(resourcePath)){
									return "assets/sounds/bgm/"+url
								}else{
									return "assets/sounds/others/"+url
								}
							},
							publicPath:(url, resourcePath)=>{
								if(/bgm/.test(resourcePath)){
									return "/assets/sounds/bgm/"+url
								}else{
									return "/assets/sounds/others/"+url
								}
							}
						}
					}
				]
			}
        ]
    },
    devServer:{
        static:{
            directory : path.resolve(__dirname,"./dist")
        },
        host:"127.0.0.1",
        port:8080,
        open:true
    }
}