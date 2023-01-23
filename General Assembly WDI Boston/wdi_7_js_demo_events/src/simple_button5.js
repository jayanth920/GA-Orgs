var EventDemo = EventDemo || {};

EventDemo.handleChildEvents = function(event,callback, targetId){
  if(event.target.id == targetId){
    // Only fire callback when the source of the event
    // is targetId
    callback();
  }
};

EventDemo.addDiv = function(pId){
  var container = document.getElementById('container'),
  button = document.getElementById('my_button'),
  el = document.createElement('p');

  el.setAttribute('id',pId);
  el.innerText = 'This is Added dynamically to the DOM';
  container.appendChild(el);
  button.hidden = true;
};

EventDemo.showEventInfo = function(event){
  var msg,
  phases = ['capture', 'target', 'bubble'];

  msg = 'event.bubbles = ' + event.bubbles;
  msg += "\n event.eventPhase = " + phases[event.eventPhase - 1];
  msg += "\n event.target (original element the event happened to) = " + event.target.id;  
  msg += "\n event.currentTarget = " + event.currentTarget.id;    
  alert(msg);
};

EventDemo.toggleButton = function(event){
  // IE doesn't pass an event. It only sets the
  // event on the global object 'window'
  event = event || window.event; // workaround for IE

  // 'this' in the event handler points to the element
  // that fired the event.
  
  if(event.target.classList.contains('button-div-active')){
    // Turn button off.
    event.target.innerHTML = "Off";
    event.target.classList.remove('button-div-active')
    event.target.classList.add('button-div')

  }else{
    // Turn button on
    event.target.innerHTML = "On";
    event.target.classList.remove('button-div')
    event.target.classList.add('button-div-active')    
  } 
}