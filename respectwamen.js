const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const request = require('request');
const SQLite = require('better-sqlite3');
const sql = new SQLite('./scores.sqlite');
const commands = require('./commands.json');
const config = require('./config.json');
const admins = require('./admins.json');
const fs = require('fs');
const Enmap = require('enmap');

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.admins=admins;
client.commands=commands;
client.sql=sql;
client.moment=moment;
client.request=request;

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

client.login(config.token);
