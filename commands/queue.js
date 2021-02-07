const Discord = require("discord.js")

exports.run = async (client, message, msg) => {

    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You're not in a voice channel !`));

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - No songs currently playing !`));

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setDescription(`**Server queue - ${message.guild.name} ${client.emotes.queue}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`)));

};