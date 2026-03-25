const http = require('http');
http.createServer((req, res) => {
    res.write('Bot is Alive!');
    res.end();
}).listen(8080);
const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'nowscraft.mcsh.io', // Ganti dengan IP servermu
        port: 2022,                // Ganti jika portnya berbeda
        username: 'Btbylipzie'      // Nama bot di dalam game
    });

    bot.on('login', () => {
        console.log('bat berhasil masuk ke server!');
    });

    bot.on('chat', (username, message) => {
        if (username === bot.username) return;
        bot.chat('Saya ai buatan asnoo/lipzie.');
    });

    // Menangani error dan kick agar bot otomatis login ulang
    bot.on('error', (err) => console.log('Error:', err));
    bot.on('end', () => {
        console.log('Bot terputus, mencoba login kembali dalam 5 detik...');
        setTimeout(createBot, 5000);
    });
}

createBot();
