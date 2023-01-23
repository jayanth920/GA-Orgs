$(document).ready(function() {
  $('#load_trending_tweets').on('click', TodoApp.fetchTrendingTweets);
});

var TodoApp = TodoApp || {};

TodoApp.fetchTrendingTweets = function(event) {
  $.ajax({
    url: '/tweets/trending',
    type: 'GET',
    dataType: 'json'
  })
  .done(TodoApp.displayTrendingTweets)
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}

TodoApp.displayTrendingTweets = function(result) {
  $('#trending_tweets').empty();
  result.forEach(TodoApp.displayTrend);
}

TodoApp.displayTrend = function(tweet) {
  var tweet_div = $('<div class=\'tweet\'>').text(tweet.name);
  $('#trending_tweets').append(tweet_div);
}


// Form field where I can input a username, and get their tweets
