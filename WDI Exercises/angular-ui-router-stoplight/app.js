angular
.module("stoplight", [])
.controller("stoplightController", [stoplightControllerFunction])

function stoplightControllerFunction(){
  this.colors = ['red', 'yellow','green']
  this.turn = function(color){
    this.bg = color
  }
}
