const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// app.post('/products', (req,res) => {
//     console.log('create route accessed');
//     console.log('Req.body is: ', req.body);
//     res.send(req.body);
// });
app.post('/fruits', (req, res) => {
    // console.log(req.body);
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    res.redirect('/fruits');
});

app.get('/fruits/', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
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
