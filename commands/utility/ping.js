/* eslint-disable indent */
/* eslint-disable semi */
const { SlashCommandBuilder, Events } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong !'),
    async execute(interaction) {
        await interaction.reply(`Pong !`);
    },

}