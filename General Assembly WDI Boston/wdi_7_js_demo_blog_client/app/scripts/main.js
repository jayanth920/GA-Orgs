$( document ).ready(function() {
  'use strict';

  var App = {};

  App.Views = {
    indexPosts: function () {
      $.ajax({
        url: 'http://localhost:3000/posts',
        type: 'GET',
        dataType: 'jsonp'
      })
      .done(function(data) {
        var postTemplate, html;
        postTemplate = JST['templates/posts/index.hbs'];
        html = postTemplate({people: data});
        $('#posts-target').html(html);
      });
    },
    showPost: function(postId) {
      $.ajax({
        url: 'http://localhost:3000/posts/' + postId,
        type: 'GET',
        dataType: 'jsonp'
      })
      .done(function(data) {
        console.log(data);
        var postTemplate, html;
        postTemplate = JST['templates/posts/show.hbs'];
        html = postTemplate(data);
        $('#posts-target').html(html);
      });
    }
  };

  App.Router = {
    '/posts': App.Views.indexPosts,
    '/posts/:postId': App.Views.showPost
  };

  var router = new Router(App.Router);
  router.init();

});
