const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.send('the main app');
    } else {
        res.redirect('/sessions/new');
    }
})

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.listen(3000, ()=>{
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})
