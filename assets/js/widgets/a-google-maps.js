jQuery(function($){

  if($("#a-google-map").length){
    function initialize() {

        var coord    = $("#a-google-map").data('coord');

        if(coord === 'false' || coord === '')
          return

        coord = coord.split(',')
        console.log( parseFloat(coord[0]) , parseFloat(coord[1])    , "38.523483,-8.9996047")

        var location = new google.maps.LatLng(parseFloat(coord[0]) , parseFloat(coord[1]));

          var map = new google.maps.Map(document.getElementById('a-google-map'), {
            center: location,
            zoom: 15,
            scrollwheel: false,
            disableDefaultUI: true
          });

      // Specify location, radius and place types for your Places API search.
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }
});