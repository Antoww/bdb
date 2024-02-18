/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable semi */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Donne des infos sur le serveur.'),
    async execute(interaction) {
        await interaction.reply(`Ce serveur s'appelle **${interaction.guild.name}** et il y a **${interaction.guild.memberCount}** membres`);
    },
};