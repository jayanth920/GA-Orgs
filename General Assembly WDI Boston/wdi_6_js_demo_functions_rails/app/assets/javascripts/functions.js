console.log("Hello from JavaScript in Rails!");



sayHi();

function sayHi() {
  console.log("Hi!");
}

function perimeter(a, b) {
  return 2 * a + 2 * b;
}

// Function Expression
var circumference = function(r) {
  return 2 * Math.PI * r;
};

circumference(10);


var global_name = "David"; // Global name, global bad
var interest_rate = 5.0; // Not so good

// Self-invoking anonymous function!!!!
(function() {
  var safe_name = "David";

  var fib = (function(x) {
    return x <= 1 ? 1 : fib(x - 1) + fib(x - 2)
  });

  var factorial = (
    function(x) {
      if(x <= 1) {
        return x;
      }
      else {
        return x * factorial(x - 1);
      }
    }
  );

  function square(x) {
    return x * x;
  }
  console.log(factorial(4))
  console.log(square(10));

  console.log("SAFETYDANCE");
})();


/////////////////
/// CALLBACKS ///
/////////////////
var bigString = "On Friday, Netflix unleashed the entire second season of its political thriller House of Cards, encouraging fans to abandon any real-world weekend plans for some quality time with the morally bankrupt Frank and Claire Underwood. But when does a cozy night in with Washington's favorite fictional power couple become a full-on 'binge-watching' session?.The name for mainlining episode after episode has its roots in the 1990s with DVD sets and TV marathons, but the practice reached a new level of recognition in 2013 as Netflix and other video services experimented with original content (like Orange Is the New Black) and offered numerous catch-up opportunities for critics’ favorites (like Breaking Bad). Despite its increased prominence, though, there's never really been a good, single working definition of what binge-watching actually is.Previous attempts differ from each other in interesting ways when you read them closely. For 2013's Word of the Year award—which ultimately went to 'selfie'—the Oxford Dictionaries defined binge-watching as 'watch[ing] multiple episodes of a television program in rapid succession, typically by means of DVDs or digital streaming.” Dictionary.com takes a much broader stance on what types of entertainment can be binge-watched, and it suggests that it happens without ever getting up: 'To watch (multiple videos, episodes of a TV show, etc.) in one sitting or over a short period of time.' Trend stories about binge-watching rarely get into precise numbers, but their anecdotes offer some clues: In a 2011 Washington Post article about binge-watching on college campuses, one student reported watching 49 episodes of Lost in two weeks—3.4 episodes per day on average—while another student watched 120 episodes of How I Met Your Mother in four weeks: about 4.3 episodes each day.".split("");

function isLetter(oneLetter){
  return(oneLetter >= "a" && oneLetter <= "z");
}

function isT(char){
  return ('t' === char );
}

function checkString(someString, callback){
  for(var i = 0; i < someString.length; i++){
    if(callback(someString[i])){
      console.log(someString[i] + " = true");
    }
  }
}

checkString(bigString, isLetter);
checkString(bigString, isT);




















