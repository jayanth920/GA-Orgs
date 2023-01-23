const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');

//creates req.body
app.use(express.urlencoded({extended:true}));

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render('index.ejs',{
            fruits:allFruits
        });
    })
});

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
});

app.post('/fruits/', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    });
});

app.listen(3000, () => {
    console.log('listening....');
});
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser:true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
