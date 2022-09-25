const discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const {  SelectMenuBuilder } = require('discord.js');
var request = require('request');
const api = process.env['api']
const axios = require("axios")

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {

    axios
  .get(`https://api.numberland.ir/v2.php/?apikey=3fdc7841abe587cf24358e44fbf247ab&method=getcountry`)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

    
}
}