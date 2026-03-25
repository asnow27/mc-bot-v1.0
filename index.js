const http = require('http');
// Membuat server web mini untuk UptimeRobot
http.createServer((req, res) => {
    res.write('Bot is Alive!');
    res.end();
}).listen(8080);

const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'nowscraft.mcsh.io',
        port: 2022,
        username: 'Btbylipzie'
    });

    bot.on('login', () => {
        console.log('Bot [Btbylipzie] berhasil masuk ke server!');
    });

    // Bot hanya akan membalas jika ada yang mengetik "!info"
    bot.on('chat', (username, message) => {
        if (username === bot.username) return;
        if (message === '!info') {
            bot.chat('Halo! Saya bot 24/7 buatan asnoo/lipzie.');
        }
    });

    bot.on('error', (err) => {
        console.log('Terjadi kesalahan:', err);
    });

    bot.on('end', () => {
        console.log('Bot terputus. Mencoba masuk lagi dalam 5 detik...');
        setTimeout(createBot, 5000);
    });
}

createBot();
