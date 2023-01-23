const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const methodOverride = require('method-override');
// app.use((request, response, next)=>{
//     console.log('a request has been received');
//     next();
// })

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/fruits/:indexOfFruitsArray/edit', (request, response)=>{
    response.render('edit.ejs',{
        fruit:fruits[request.params.indexOfFruitsArray],
        index: request.params.indexOfFruitsArray
    });
});

app.put('/fruits/:indexOfFruitsArray', (request, response)=>{
    if(request.body.readyToEat === 'on'){
        request.body.readyToEat = true;
    } else {
        request.body.readyToEat = false;
    }
    fruits[request.params.indexOfFruitsArray] = request.body;
    response.redirect('/fruits');
})

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});

app.delete('/fruits/:indexOfFruitsArray', (request, response)=>{
    fruits.splice(request.params.indexOfFruitsArray, 1);
    response.redirect('/fruits');
});
// app.post('/products', (req, res)=>{
//     console.log('create route accessed!');
//     console.log('Req.body is: ', req.body);
//     res.send(req.body);
// });

app.post('/fruits', (request, response)=>{
    if(request.body.readyToEat === 'on'){
        request.body.readyToEat = true;
    } else {
        request.body.readyToEat = false;
    }
    fruits.push(request.body);
    response.redirect('/fruits');
})

app.get('/fruits/new', (request, response)=>{
    response.render('new.ejs');
});

app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});
