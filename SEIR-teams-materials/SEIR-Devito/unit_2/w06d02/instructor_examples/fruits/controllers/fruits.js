const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruits.js');

router.get('/seed', (req, res) => {
    Fruit.create([
        {
            name:'apple',
            color:'red',
            readyToEat: true
        },
        {
            name:'orange',
            color:'orange',
            readyToEat: true
        },
        {
            name:'banana',
            color:'green',
            readyToEat: false
        }
    ], (err,data) => {
        res.redirect('/fruits');
    })
});

router.put('/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/fruits');
    })
});

router.get('/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('edit.ejs',{
            fruit:foundFruit
        });
    })
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.delete('/:id', (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/fruits');
    });
});

router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render('index.ejs',{
            fruits:allFruits
        });
    })
});

router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
});

router.post('/', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    });
});


module.exports = router;
