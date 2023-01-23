const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

app.get('/fruits/', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render(
        'show.ejs',
        {
            fruit: fruits[req.params.indexOfFruitsArray]
        }
    );
})

app.listen(3000, () => {
    console.log('listening...');
});
