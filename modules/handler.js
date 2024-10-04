const { readdirSync } = require('fs');
const { connect } = require('mongoose');
const client = require('./client.js');

async function load() {
  //Login
  await client.login(client.config.token).catch((e) => console.error(e));

  //Database
  if (client.config.uri)
    connect(client.config.uri).then(console.log('Connected to database'));

  //Load Commands
  readdirSync('./commands').forEach((category) => {
    readdirSync(`./commands/${category}`).forEach((command) => {
      if (!command.endsWith('.js')) return;
      const file = require(`../commands/${category}/${command}`);
      if (file?.name && file?.description && file?.type && file?.run)
        client.commands.set(file.name, file);
    });
  });

  //Load Listeners
  readdirSync('./listeners').forEach((listener) => {
    if (!listener.endsWith('.js')) return;
    require(`../listeners/${listener}`);
  });
}

load();
