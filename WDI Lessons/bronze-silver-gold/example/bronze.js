var cells = document.querySelectorAll("td");
var info = document.getElementById("info");
var currentPlayer;
changePlayer();

for(var i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", function(){
    var cell = this;
    if(cell.className === ""){
      cell.className = currentPlayer;
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
