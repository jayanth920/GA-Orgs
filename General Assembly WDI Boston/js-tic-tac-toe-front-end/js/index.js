//jquery authenticate and get
$(function(){
  'use strict';
  var sa = '//localhost:3000';
  $('#login').on('click', function(){
    $.ajax({
      url: sa + '/login',
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr) {
      $('#token').val(data['token']);
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#token').val('login failed');
    });
  });
  $('#register').on('click', function(){
    $.ajax(sa + '/register', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('registration failed');
    });
  });

  $('#games-index').on('click', function(){
    $.ajax(sa + '/games', {
      dataType: 'json',
      method: 'GET',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  $('#games-create').on('click', function(){
    $.ajax(sa + '/games',{
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  $('#game-show').on('click', function(){
    $.ajax(sa + '/games/' + $('#id').val(), {
      dataType: 'json',
      method: 'GET',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus) {
      data.game.cells.forEach(function(cell, i){
        $('#' + i).val(cell);
      });
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  var gamePatch = function(done, game) {
    $.ajax(sa + '/games/' + $('#id').val(), {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify(game),
      dataType: 'json',
      method: 'PATCH',
      headers: { Authorization: 'Token token=' +
      $('#token').val() }
    }).done(done).fail(function(jqxhr, status, errorThrown) {
      console.log(errorThrown);
    });
  };

  $('#game-join').on('click', function() {
    gamePatch(function(data, status, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }, {game: {} });
  });

  $('#board').on('change', function(e) {
    var cell = {index: -1, value: ''};
    var $target = $(e.target);
    cell.index = $target.attr('id');
    cell.value = $target.val();
    gamePatch(function(data, status, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }, {game: {cell: cell} });
  });

  $('#game-watch').on('click', function() {
    var game = resourceWatcher(sa + '/games/' +
      $('#id').val() + '/watch', {
          Authorization: 'Token token=' + $('#token').val(),
          timeout: 60
    });
    game.on('change', function(d){
      var data = JSON.parse(d);
      if (data.timeout) {
        game.close();
        return console.warn(data.timeout);
      }
      var gameData = data.game;
      var cell = gameData.cell;
      $('#' + cell.index).val(cell.value);
    });
    game.on('error', function(e){
      console.error(e);
    });
  });
});
