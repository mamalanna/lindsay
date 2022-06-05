const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

require("dotenv").config()

clientId=process.env.CLIENT_ID
guildId=process.env.GUILD_ID

console.log(clientId, ' ', guildId)


const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);



 

 
 
 
 
 
 






1