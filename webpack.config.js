const path = require("path");
const pathToPhaser = path.join(__dirname,"node_modules/phaser")
const phaser = path.join(pathToPhaser,"dist/phaser.js")

console.log(__dirname)
console.log(phaser)

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
                
            }
        ]
    }
}