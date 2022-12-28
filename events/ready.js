const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {
  client.user.setPresence({
  activities: [{ name: `🌚 смотрю на разработчика`, type: ActivityType.Playing }],
  status: 'idle',
});
	console.log(chalk.green(`Бот по названием: ${client.user.tag} запущен!`));
});