const fs = require('fs')
const chalk = require('chalk')
const util = require('util')

const totalFiturr = () =>{
var mytext = fs.readFileSync("./BarMods2.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const listCase = () => {
const code = fs.readFileSync("./BarMods2.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*\`𝙏𝙊𝙏𝘼𝙇𝙁𝙄𝙏𝙐𝙍:\`* *${totalFiturr()}* \n\n` 
matches.forEach(function (x) {
   teks += " ┃友 " + x + "\n"
})
return teks
}
module.exports.listCase = listCase