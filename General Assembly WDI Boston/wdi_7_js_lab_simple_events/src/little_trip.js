var Traveler = (function(window){
  // Single Var Pattern
  var sites = [
    ['Groton House',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2935.843569923143!2d-71.5871911!3d42.6222735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3c06577faf547%3A0x387c9ad686b569e6!2s503+Main+St!5e0!3m2!1sen!2sus!4v1392931116268" width="600" height="450" frameborder="0" style="border:0"></iframe>'],
    ['Cambridge Apt',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.5417607494032!2d-71.08927204999998!3d42.373604150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b6ee09731b%3A0x939d55bd78e6c0f6!2s46+Porter+St!5e0!3m2!1sen!2sus!4v1392930981320" width="600" height="450" frameborder="0" style="border:0"></iframe>'],
    ['My Starting T Stop',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23584.362511910098!2d-71.09009709999998!3d42.36287354999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370be8a8338b1%3A0xccd73517c2e79ce0!2sLechmere+Station!5e0!3m2!1sen!2sus!4v1392931359329" width="600" height="450" frameborder="0" style="border:0"></iframe>'],
    ['My Ending T Stop',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2948.5427566848925!2d-71.05524200000002!3d42.352271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1392932964665" width="600" height="450" frameborder="0" style="border:0"></iframe>'],
    ['My Work', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6779782586736!2d-71.04994429999999!3d42.349388500000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a7fd8d73c33%3A0x110497b13979eb26!2s51+Melcher+St!5e0!3m2!1sen!2sus!4v1392933036794" width="600" height="450" frameborder="0" style="border:0"></iframe>']
  ],
  currentSiteIndex = 0,
  mapContainer,
  travelContainer,
  tripHandler,
  setSiteMap = function(siteIndex){
    mapContainer = document.createElement('div');
    mapContainer.innerHTML = sites[siteIndex][1];

    travelContainer = document.getElementById('travel-container');
    travelContainer.innerHTML = '';
    travelContainer.appendChild(mapContainer);
  },
  tripHandler = function(event){
    // Hack for IE events
    event = event || window;

    // reset the currentSiteIndex if you've gone
    // thru them all
    if(currentSiteIndex === (sites.length - 1) ){
     currentSiteIndex = 0;
    }else{
      currentSiteIndex += 1;
    }

    // Change the button content.
   event.target.innerHTML = sites[currentSiteIndex][0];
   setSiteMap(currentSiteIndex);

  },
  initialize = function(){
    // Set the initial map when this file is loaded
    setSiteMap(0);
  };


  return {
    startText: sites[0][0],
    init: initialize,
    nextHandler: tripHandler
  };

})(window);
