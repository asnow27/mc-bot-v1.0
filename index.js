const http = require('http');
http.createServer((req, res) => { res.write('Bot is Alive!'); res.end(); }).listen(8080);

const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'nowscraft.mcsh.io',
        port: 25565, // Sesuaikan port jika bukan 25565
        username: 'Btbylipzie',
        version: '1.20.6' // <--- WAJIB DIISI MANUAL
    });

    bot.on('login', () => {
        console.log('✅ Berhasil Login!');
    });

    bot.on('spawn', () => {
        console.log('🎮 Bot Muncul di Game.');
    });

    bot.on('error', (err) => {
        console.log('❌ Error:', err.message);
    });

    bot.on('end', () => {
        console.log('⚠️ Terputus, mencoba lagi...');
        setTimeout(createBot, 5000);
    });
}

createBot();
