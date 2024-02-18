/* eslint-disable quotes */
/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Donne des informations à propos du user'),
    async execute(interaction) {
        await interaction.reply(`Username : ${interaction.user.username}, Arrivée : ${interaction.member.joinedAt}`);
    },
};