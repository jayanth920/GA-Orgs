function chooseYourOwnAdventure (){
  alert("Must be 21 and over to play")
  var age = prompt("How old are you?")
  console.log(age)
    if (age > 20) { alert("Hi!")
    }else {
    alert("GOODBYE!")
    return
}
var trump = prompt("You're walking through down Pennsylvania ave ave, minding your own business, and you run into a trump! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(trump) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      alert("You only need one of the two! You beat the trump--nice work!");
    } else {
      alert("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a trump. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the trump. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in trump Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      alert("Great! You pay the trump and continue on your merry way.");
    } else {
      alert("Dang! This trump only takes BittCoins. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to strump through the forest another day.");
    } else {
      alert("You're not fast and you didn't get a head start? You never had a chance! The trump eats you.");
    }
    break;
  default:
    alert("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

}
 chooseYourOwnAdventure();
