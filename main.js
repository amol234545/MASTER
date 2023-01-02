const prompt = require("prompt-sync")({sigint:true})
const process = require("node:process")
const fixNumber = number => number - 1;
const message = async (apikey,id,message) => {
    var {Universe} = (await import("@daw588/roblox.js"))
    var game = new Universe(id,apikey)
    await game.PublishMessageAsync("ConnectCallback",message)
};
const log = console.log
const error = message => {throw new Error(message)}
const readArgs = () => process.argv
