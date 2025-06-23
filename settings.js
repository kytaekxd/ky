/*

credits ©danzyy1
ʙᴇʙᴀs ᴅɪ sᴇʙᴀʀ/ғʀᴇᴇ

*/


const fs = require('fs')

global.botname = "𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟏.𝟎"
global.version = "1.0"
global.owner = "6285173259367"
global.numberbot = ""
global.footer = "𝙳𝙰𝙽𝚉𝚈 𝙸𝚂 𝙷𝙴𝚁𝙴"
global.title = "© ᴅ𝙰𝙽𝚉𝚈 𝙳𝙴𝚅"
global.website = "https://whatsapp.com/channel/0029Vajenbo0LKZKlzkxH30Q"
global.idch = "120363314734246493@newsletter"
global.chjid = "https://https://whatsapp.com/channel/0029Vajenbo0LKZKlzkxH30Q"
global.wm = "𝙳𝙰𝙽𝚉𝚈 𝙳𝙴𝚅"

//===================================//
global.session = "session"


//=========== [ IMG-URL ] ===========//
global.thumb = "https://files.catbox.moe/2ylm5g.jpg"
global.image = {
Reply: "https://files.catbox.moe/2ylm5g.jpg"
}
//==================================//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
