const fs = require("fs");

fileBuffer =  fs.readFileSync("tokens.txt");
to_string = fileBuffer.toString();
split_lines = to_string.split("\n");
var online = split_lines.length;

const express = require('express');
const app = express();
app.listen(8080)
app.get('/', (req,res)=>{
res.send("[+] Running!")
})

console.log(chalk.green("[+] Slater's Onliner"));

const discord = require("discord.js");
const chalk = require("chalk");

const tokens = fs.readFileSync('tokens.txt', 'utf-8').split(/\r?\n/).forEach(line => {
	onliner(line);
});

async function onliner(token) {
	const client = new discord.Client();
	client.on('ready', () => {
		//client.user.setActivity(`Rust`);
		console.log(chalk.blue(`${'    '}` + `${'Successfully Logged In As: '} ` + client.user.tag ));
	});
	client.login(token);
}

process.on('uncaughtException', (exception) => { });
process.on('unhandledRejection', (error) => { });
process.on('warn', () => { });
