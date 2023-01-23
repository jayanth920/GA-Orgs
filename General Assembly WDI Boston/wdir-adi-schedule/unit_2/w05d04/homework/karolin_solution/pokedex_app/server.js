//DEPENDENCIES
const express        = require ( 'express' );
const methodOverride = require ( 'method-override' );

const app            = express ();

//DATABASE
const pokemon        = require (  '../../pokedex/models/pokemon.js' );

//PORT
const PORT           = 3000;

//MIDDLEWARE
//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// use public folder for static assets
app.use( express.static( 'public' ) );
// use method override
app.use( methodOverride( '_method' ) );


//See JSON here:
app.get('/',  ( req , res ) => {
  res.send(pokemon);
})

//INDEX Route
app.get( '/pokemon',  ( req, res ) => {
  res.render( './pokemon/index.ejs', { pokemon : pokemon });
});

//NEW Route
app.get( '/pokemon/new',  ( req, res ) => {
  res.render('./pokemon/new.ejs',{id :'0' + pokemon.length + 1 });
});

//SHOW Route
app.get( '/pokemon/:id',   ( req, res ) => {
  //helper function to find Pokemon by ID:
  function findPokemonById( poke ) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  const showOne = pokemon.find( findPokemonById );
  res.render( './pokemon/show.ejs', { pokemon : showOne })
});

//EDIT Route
app.get( '/pokemon/:id/edit',   ( req, res ) => {
  //helper function to find Pokemon by ID:
  function findPokemonById( poke ) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  const showOne = pokemon.find( findPokemonById );
  res.render('./pokemon/edit.ejs', {pokemon : showOne});
});

//CREATE Route
app.post( '/pokemon',  ( req, res ) => {
  //create an object with the same data(keys) and data structure as other pokemon
  const createOne = {};
  createOne.id                 = req.body.id;
  createOne.name               = req.body.name ;
  createOne.img                = req.body.img ;
  createOne.type               = req.body.type.split(' ');
  createOne.stats              = {};
  createOne.stats.hp           = req.body.hp ;
  createOne.stats.attack       = req.body.attack ;
  createOne.stats.spattack     = req.body.spattack ;
  createOne.stats.defense      = req.body.defense ;
  createOne.stats.spdefense    = req.body.spdefense ;
  createOne.stats.speed        = req.body.speed ;
  createOne.damages            = {};
  createOne.damages.normal     = req.body.normal ;
  createOne.damages.fire       = req.body.fire ;
  createOne.damages.water      = req.body.water ;
  createOne.damages.electric   = req.body.electric ;
  createOne.damages.grass      = req.body.grass ;
  createOne.damages.ice        = req.body.ice ;
  createOne.damages.fight      = req.body.fight ;
  createOne.damages.poison     = req.body.poison ;
  createOne.damages.ground     = req.body.ground ;
  createOne.damages.flying     = req.body.flying ;
  createOne.damages.psychic    = req.body.psychic ;
  createOne.damages.bug        = req.body.bug ;
  createOne.damages.rock       = req.body.rock ;
  createOne.damages.ghost      = req.body.ghost ;
  createOne.damages.dragon     = req.body.dragon ;
  createOne.damages.dark       = req.body.dark ;
  createOne.damages.steel      = req.body.steel ;
  //push the above object into the pokemon array
  pokemon.push( createOne );
  // console.log(createOne);
  res.redirect( '/pokemon' );
});

//UPDATE Route
app.put( '/pokemon/:id',  ( req, res ) => {
  //helper function to find Pokemon by ID:
  function findPokemonById(poke) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  const updateOne     = pokemon.find( findPokemonById );
  //update specific values of Pokemon object
  updateOne.id      = req.body.id;
  updateOne.name    = req.body.name;
  updateOne.img     = req.body.img;
  updateOne.type    = req.body.type.split(' ');
  //stats are an object inside an object, loop through each stat and update
  Object.keys( updateOne.stats ).forEach(function( oneStat ) {
    updateOne.stats[oneStat] = req.body[oneStat];
  });
  //damages are an object inside an object, loop through each damage and update
  Object.keys( updateOne.damages ).forEach( function( oneDamage ) {
    updateOne.damages[oneDamage]  = req.body[oneDamage];
  });
  res.redirect( '/pokemon/' + req.body.id );
});

//DESTROY Route
app.delete ( '/pokemon/:id',  ( req, res ) => {
  //helper function to find Pokemon by ID:
  function findPokemonById(poke) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  //get that index position
  const deleteOne = pokemon.indexOf( pokemon.find( findPokemonById ));
  //remove the pokemon at that index position
  pokemon.splice( deleteOne, 1);
  res.redirect ( '/pokemon' );
});

//Just for fun
const catchAndRelase =  () => {
  totalPokemon = Math.floor( pokemon.length );
  catchOne = Math.floor( Math.random() * ( totalPokemon + 1 ));
  return pokemon[catchOne].name;
}

//Server
app.listen( PORT, () => {
  console.log( catchAndRelase() + ' found on port ' + PORT + '!!! At' , new Date(), 'Restart server to catch another one!!!' )
});



//useful resources:

//iterating over objects using ejs:
//http://stackoverflow.com/questions/31764552/ejs-how-to-iterate-object
