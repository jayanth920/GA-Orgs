'use strict';

var gameRef, gameAuth, player;

$(function(){
  gameRef = new Firebase('https://<Firebase App>.firebaseio.com/game');

  var otherPlayer = function(player) {
    return player === 'X' ? 'O' : 'X';
  };

  //Get a "unique" id for the user
  if (!(gameAuth = gameRef.getAuth())) {
    gameRef.authAnonymously(function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        gameAuth = authData;
      }
    });
  }

  //User takes turn
  $('#move').on('click', function(e){
    $('#move').prop('disabled', true);
    gameRef.set({player: otherPlayer(player), waitingPlayer: gameAuth.uid});
  });

  //User restarts game
  $('#restart').on('click', function(e){
    $('#move').prop('disabled', true);
    gameRef.set({player: 'X'});
  });

  //On load, set up event handling on the object at "gameRef"
  gameRef.on('value', function(snapshot) {
    var message = snapshot.val();
    var disable = false;
    if (message) {
      if (gameAuth.uid === message.waitingPlayer) {
        player = otherPlayer(message.player);
        disable = true;
      } else {
        player = message.player;
      }
    }
    $('#player').text(player);
    $('#move').prop('disabled', disable);
  });
});
