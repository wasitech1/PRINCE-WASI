let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://github.com/PRINCE-GDS/THE-PRINCE-BOTraw/main/Assets/mp3/Audio5.mp3"
    let url = "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j"
    let murl = "www.instagram/itx_mee_wasi"
    let hash = global.princebot
    let img = "https://telegra.ph/file/4328ab447f799361842f6.jpg"
    let num = "923192173398"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
