const { Collection, MessageFlags } = require('discord.js');
const { client } = require('../modules');

client.on('interactionCreate', async (interaction) => {
  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  if (command.ownersOnly && !client.config.owners.includes(interaction.user.id))
    return interaction.reply({
      content: `Invalid permission to run this command.`,
      flags: MessageFlags.Ephemeral,
    });

  if (command.cooldown && !client.commandCooldowns.has(command.name)) {
    client.commandCooldowns.set(command.name, new Collection());
  }

  if (command.cooldown) {
    const now = Date.now();
    const cooldowns = client.commandCooldowns.get(command.name);

    if (cooldowns.has(interaction.user.id)) {
      const expirationTime =
        cooldowns.get(interaction.user.id) + command.cooldown * 1000;

      if (now < expirationTime) {
        const timeLeft = ((expirationTime - now) / 1000).toFixed(1);
        return interaction.reply({
          content: `⏳ Please wait ${timeLeft}s before using \`/${command.name}\` again.`,
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    cooldowns.set(interaction.user.id, now);
    setTimeout(
      () => cooldowns.delete(interaction.user.id),
      command.cooldown * 1000
    );
  }

  try {
    await command.run(client, interaction);
  } catch (error) {
    console.error(error);
    interaction.reply({
      content: '⚠️ There was an error executing this command.',
      flags: MessageFlags.Ephemeral,
    });
  }
});
