var cells = document.querySelectorAll("td");
var info = document.getElementById("info");
var hasWinner = false;
var currentPlayer;

document.getElementById("reset").addEventListener("click", reset);
reset();

for(var i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", function(){
    var cell = this;
    if(cell.className === "" && !hasWinner){
      cell.classList.add("played");
      cell.classList.add(currentPlayer);
      if(!detectWinner()){
        changePlayer();
      }
    }
  });
}

function changePlayer(){
  if(currentPlayer === "player1"){
    currentPlayer = "player2";
  }else{
    currentPlayer = "player1";
  }
  info.className = currentPlayer;
}

function reset(){
  hasWinner = false;
  for(var i = 0; i < cells.length; i++){
    cells[i].className = "";
  }
  changePlayer();
}

function detectWinner(){
  var winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(var i = 0; i < winningCombos.length; i++){
    var combo = winningCombos[i];
    var player1Count = 0;
    var player2Count = 0;
    for(var c = 0; c < combo.length; c++){
      var cell = cells[combo[c]];
      if(cell.classList.contains("player1")){
        player1Count++;
      }else if(cell.classList.contains("player2")){
        player2Count++;
      }
    }
    if(player1Count === 3 || player2Count === 3){
      hasWinner = true;
      info.classList.add("won");
      for(var c = 0; c < combo.length; c++){
        cells[combo[c]].classList.add("won");
      }
      return true;
    }
  }
}
