/* eslint-disable quotes */
/* eslint-disable indent */
const { SlashCommandBuilder, Client, Guild, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const guild = client.guilds.cache.get('561646328317476866');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Donne des informations à propos du user'),
    async execute(interaction) {
        await interaction.reply(`Username : ${interaction.user.username}, Arrivée : ${interaction.member.joinedAt}`);
        console.log(`[!] La commande ${__filename} a été executée par ${client.user.id}`)
    },
};