const prompt = require("prompt-sync")({sigint:true})
const process = require("node:process")
const log = console.log
const warn = console.log
const error = console.error
function readArgs() {
    return process.argv
}