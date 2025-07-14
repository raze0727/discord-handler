const {
  CommandInteraction,
  Client,
  ApplicationCommandType,
} = require('discord.js');

module.exports = {
  name: 'example',
  description: 'Example command.',
  cooldown: 0,
  ownersOnly: false,
  type: ApplicationCommandType.ChatInput,
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    interaction.reply({
      content: 'This is a example command.',
    });
  },
};
