//import { GameManager } from "./Classes/gameManger.js"
const GameManager = require('./Classes/gameManger.js')
require('dotenv').config()
//const knex = require('knex')(require('./knexfile.js')['development']);
const { Client, IntentsBitField} = require('discord.js')

const myIntents = new IntentsBitField()
myIntents.add(IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.Guilds)

const client = new Client({ intents: '37377' });
const PREFIX = '!'
 
const gameManager = new GameManager;

client.once('ready', () => {
    console.log('Logged In')
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login('MTAwNzA0NDk1NjMxOTM5MTg1NQ.G3tiPh.lrs7ugjYCifrQOVhP5RqGz6DqKpLvhQ1o0xCT8')