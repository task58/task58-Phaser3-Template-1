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
            }
        ]
    },
    devServer:{
        static:{
            directory : path.resolve(__dirname,"./dist")
        },
        host:"127.0.0.1",
        port:1558,
        open:true
    }
}