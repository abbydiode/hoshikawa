const localization = require('../../resources/localization.json')

module.exports.handle = interaction => {
    const channel = interaction.options.getChannel('channel');
    const message = interaction.options.getString('message');
    if (channel.isText()) {
        interaction.reply(`✅ Sent message to ${message} ${channel}`);
        channel.send(message);
    } else {
        interaction.reply(localization.error_no_text_channel);
    }
};