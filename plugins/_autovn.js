/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autovn === true) return m.reply('udah Otomatis Recording bodo\n\nOwner nya bodo gesss')
if (autovn === true) return 
autovn = true
m.reply(`Success Activated Mode Auto Recording`)

}
handler.help = ['onvn']
handler.tags = ['info', 'main']

handler.command = /^(onv|onvn)$/i

module.exports = handler