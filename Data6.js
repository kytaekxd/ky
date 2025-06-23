const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

async function uploadToCatbox(fileBuffer, fileName) {
    try {
        const form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('userhash', '');
        form.append('fileToUpload', fileBuffer, fileName);

        const response = await fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: form,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                ...form.getHeaders()
            }
        });

        const result = await response.text();

        if (result.startsWith('https://files.catbox.moe/')) {
            return result;
        } else {
            throw new Error('Upload gagal: ' + result);
        }
    } catch (error) {
        console.error('Error upload ke Catbox:', error.message);
        return null;
    }
}