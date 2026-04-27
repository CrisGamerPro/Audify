const https = require('https');
const fs = require('fs');

const files = [
  ['ffmpeg.min.js', 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/umd/ffmpeg.min.js'],
  ['ffmpeg-core.js', 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.js'],
  ['ffmpeg-core.wasm', 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.wasm'],
  ['814.ffmpeg.js', 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/umd/814.ffmpeg.js']
];

async function download() {
  for (const [name, url] of files) {
    console.log('Descargando ' + name + '...');
    await new Promise((resolve, reject) => {
      const req = https.get(url, res => {
        if (res.statusCode !== 200) {
          console.log(name + ' error: HTTP ' + res.statusCode);
          reject(new Error('HTTP ' + res.statusCode));
          return;
        }
        const file = fs.createWriteStream(name);
        res.pipe(file);
        file.on('finish', () => {
          const size = fs.statSync(name).size;
          console.log(name + ' listo (' + size + ' bytes)');
          resolve();
        });
      });
      req.on('error', reject);
    });
  }
  console.log('Completado!');
}

download().then(() => process.exit()).catch(e => { console.error(e); process.exit(1); });