var EventDemo = EventDemo || {};

EventDemo.toggleButton = function(event){
  if(event.target.getAttribute('on') == 'true'){
    // Button on
    event.target.setAttribute('on', false);
    event.target.innerHTML = "Off";
    button.style.color = 'gray';
  }else{
    // Button off
    event.target.setAttribute('on', true);          
    event.target.innerHTML = "On";
    button.style.color = 'blue';
  } 
}