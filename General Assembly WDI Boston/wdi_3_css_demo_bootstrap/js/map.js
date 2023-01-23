jQuery(document).ready(function(){

  jQuery('#map').gMap({ address: 'Cambridge',
    panControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: true,
    scrollwheel: true,
    icon: {
      image: "http://www.google.com/mapfiles/marker.png",
      shadow: "http://www.google.com/mapfiles/shadow50.png",
      iconsize: [20, 34],
      shadowsize: [37, 34],
      iconanchor: [9, 34],
      shadowanchor: [19, 34]
    },
    zoom:14,
    markers: [
    { 'address' : 'Cambridge'}
    ]


  }); 
});
