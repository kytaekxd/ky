// lib/sendSticker.js
const { writeFileSync, unlinkSync } = require('fs')
const path = require('path')
const { tmpdir } = require('os')
const sharp = require('sharp')
const crypto = require('crypto')

async function sendSticker(conn, chatId, imageBuffer, quotedMsg, options = {}) {
    const fileName = path.join(tmpdir(), crypto.randomBytes(6).toString('hex') + '.webp')

    const webpBuffer = await sharp(imageBuffer)
        .resize(512, 512, { fit: 'contain' })
        .webp()
        .toBuffer()

    writeFileSync(fileName, webpBuffer)

    await conn.sendMessage(chatId, {
        sticker: { url: fileName },
        ...options
    }, { quoted: quotedMsg })

    unlinkSync(fileName)
}

module.exports = sendSticker