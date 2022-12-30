const prompt = require("prompt-sync")({sigint:true})
const name = prompt("What is your name?")
const log = console.log
const warn = console.log
const error = console.error
const wait = seconds => setTimeout(() => {},seconds * 1000)
log("Helo " + name)
wait(10)
