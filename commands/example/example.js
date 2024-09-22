const { CommandInteraction, Client } = require('discord.js');

module.exports = {
  name: 'example',
  description: 'Example command.',
  type: 1,
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    interaction.followUp({
      content: 'This is a example command.',
    });
  },
};
