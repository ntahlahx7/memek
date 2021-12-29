let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *IM3:* 6285742344873
• *DANA:* 6285742344873

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalo Gak Mau Subscribe Aja Channel Zero 

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285742344873', 'Julian Kastara', idnya)
  }
  return true
}

module.exports = handler
