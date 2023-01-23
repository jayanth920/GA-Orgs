var cells = document.querySelectorAll("td");
var info = document.getElementById("info");
var currentPlayer;

document.getElementById("reset").addEventListener("click", reset);
reset();

for(var i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", function(){
    var cell = this;
    if(cell.className === ""){
      cell.classList.add("played");
      cell.classList.add(currentPlayer);
      changePlayer();
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
  for(var i = 0; i < cells.length; i++){
    cells[i].className = "";
  }
  changePlayer();
}
