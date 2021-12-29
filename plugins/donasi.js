let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [0857-4234-4873]
┣➥ *Dana:* [0857-4234-4873]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285742344873*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
