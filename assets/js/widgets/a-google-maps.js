jQuery(function($){

  if($("#a-google-map").length){
    function initialize() {
        var location = new google.maps.LatLng(38.723852, -9.149396);

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