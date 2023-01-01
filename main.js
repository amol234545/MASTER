const prompt = require("prompt-sync")({sigint:true})
const process = require("node:process")
const log = console.log
const error = message => {throw new Error(message)}
function readArgs() {
    return process.argv
}
function fixNumber(number) {
   return number - 1
}
log(readArgs()[fixNumber(3)])