const discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { SelectMenuBuilder } = require('discord.js');
const axios = require("axios")

const api = process.env['api']

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("buy")
    .setDescription("خرید شماره مجازی"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const row = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('satrt !')
					.setStyle("1"),
			)

    
    
    const em1 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Number Buy ✅`)
    .setDescription(`به سرویس خرید فوری و ارزان شماره مجازی ما خوش آمدید\nبرای شروع بر روی دکمه start کلیک کنید`)
      .setThumbnail('https://cdn.discordapp.com/attachments/752437522965200952/1022810793462476850/unknown.png')
    .setTimestamp()
    .setFooter({ text: 'Number land', iconURL: 'https://cdn.discordapp.com/attachments/752437522965200952/1022810793462476850/unknown.png' });
    
    await interaction.reply({ ephemeral: true, embeds: [em1], components: [row] });


    const row2 = new ActionRowBuilder()
    .addComponents(
				new SelectMenuBuilder()
					.setCustomId('op')
					.setPlaceholder('چیزی انتخاب نشده است')
					.addOptions(
						{
							label: 'تلگرام',
							value: 'o1',
						},{
							label: 'دیسکورد',
							value: 'o2',
						},{
							label: 'واتس اپ',
							value: 'o3',
						},{
							label: 'اینستاگرام',
							value: 'o4',
						},{
							label: 'کلاب هوس',
							value: 'o5',
						},{
							label: 'استیم',
							value: 'o6',
						},{
							label: 'توییتر',
							value: 'o7',
						}
					),
			);


    const row3 = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('firstButton')
            .setLabel('تلگرام')
            .setStyle('1')
          	.setDisabled(false),
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId('secondButton')
            .setLabel('دیسکورد')
            .setStyle('2')
          	.setDisabled(false),
        )
		    .addComponents(
          new ButtonBuilder()
            .setCustomId('thirdButton')
            .setLabel('اینستاگرام')
            .setStyle('3')
          	.setDisabled(false),
        )
		    .addComponents(
          new ButtonBuilder()
            .setCustomId('fourthButton')
            .setLabel('واتس اپ')
            .setStyle('4')
          	.setDisabled(false),
        )
    const em2 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`پلتفرم را انتخاب کنید`)
    .setDescription(`با استفاده از منوی زیر پلتفرمی که میخواهید با شماره مجازی به آن وارد شوید را انتخاب کنید`)
      .setThumbnail('https://cdn.discordapp.com/attachments/752437522965200952/1022810793462476850/unknown.png')
    .setTimestamp()
    .setFooter({ text: 'Number land', iconURL: 'https://cdn.discordapp.com/attachments/752437522965200952/1022810793462476850/unknown.png' });
    

    const filter = i => i.customId === 'primary' 

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {

      
	await i.update({ embeds: [em2], components: [row3] });

      const filterr = i => i.customId === 'firstButton'
    const collectorr = interaction.channel.createMessageComponentCollector({ filterr, time: 15000 });
      axios.get(`https://my.numberbaran.ir/v2/${api}/getServiceList?kind=vip`).then(async(res) => {
        let count = res.data.result[0].count
        console.log(res.data)
      })
      
    
    collectorr.on('collect', async i => {
      
      await i.update({  embeds: [em2], components: [row3] });
	
    });


      
    });


    
    
 
    
  },
};

