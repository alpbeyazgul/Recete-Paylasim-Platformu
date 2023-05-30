// Backend tarafında verileri sağlayan bir API oluşturabilirsiniz
// Örneğin Express.js kullanarak:
const express = require('express');
const app = express();

app.get('/tarifler', function(req, res) {
    // Tarifleri burada sağlayabilirsiniz
    res.json([
        {
            ad: 'Elmalı Kurabiye',
            malzemeler: ['Elma', 'Un', 'Şeker'],
            tarif: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            ad: 'Çikolatalı Kek',
            malzemeler: ['Çikolata', 'Un', 'Yumurta'],
            tarif: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]);
});

app.listen(3000, function() {
    console.log('Server başlatıldı: http://localhost:3000');
});
