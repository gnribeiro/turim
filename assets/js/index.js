jQuery(function(a) {
    $(window).on('load , hashchange', function() {
        if(location.hash === "#recrutamento") {
          if($('a[data-a-widget="Amodal"]').length){
            $('a[data-a-widget="Amodal"]').click();
          }
        }
    });
 window.players = {};

function setVideosSlider(el){
    $(el).mediaelementplayer({
        loop           : true,
        videoWidth     : '100%',
        videoHeight    : '100%',
        enableAutosize : true,
        features       : [],
        success        : function(media, node, player){
            window.players[el] = player;
            media.addEventListener('ended', function(e) {
                // $('#slideshow').slick('slickPlay');
            });
        }
    });
}

$('#slideshow').on('init', function(event, slick){
    var slides = $('#slideshow  .slide:not(".slick-cloned")');
    if( $(slides[0]).attr('data-slide-video') == 'video'){
        setVideosSlider("#playerpage-0");
    }

    $("#slideshow .slick-prev").html();
    $(".slick-next" , '#slideshow').html();
});

$('#slideshow').slick({
    dots: false,
    arrows:true
})
.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slides = $('#slideshow  .slide:not(".slick-cloned")');

    if($(slides[currentSlide]).attr('data-slide-video') == 'video'){
        if(window.players.hasOwnProperty("#playerpage-"+currentSlide))
            window.players["#playerpage-"+currentSlide].pause();
    }

    if( $(slides[nextSlide]).attr('data-slide-video') == 'video'){
        if(!window.players.hasOwnProperty("#playerpage-"+nextSlide)){
            setVideosSlider("#playerpage-"+nextSlide);
        }
        else{
             window.players["#playerpage-"+nextSlide].play();
        }
    }
});



/*
 $('#slideshow').on('init', function(event, slick){
      var slides = $('#slideshow .slide');

      if( $(slides[0]).attr('data-slide-video') == 'video'){

        $("#playerpage-0").mediaelementplayer({
                loop: false,
                videoWidth         : '100%',
                videoHeight        : '100%',
                enableAutosize     : true,
                features: ['playpause','volume','progress'],
                success: function(media, node, player) {
                //     console.log("successFisrt" , player);
                // player.addEventListener('ended Fisrt', function(e){
                //     console.log("end");
                //         player.load();
                //         player.play();
                //     });



                window.players['#playerpage-0'] = player;
                media.addEventListener('ended', function(e) {
                    console.log( e.type ,  "ended Firsr" , player);
                     $('#slideshow').slick('slickPlay');
                });

                media.addEventListener('play', function(e) {
                    console.log( e.type ,  "e.loadstart" , slick);
                    $('#slideshow').slick('slickPause');
                });
              }
          });
      }
  });


  $('#slideshow').slick({
    dots: false,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true

  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

      var slides = $('#slideshow  .slide:not(".slick-cloned")');

      if($(slides[currentSlide]).attr('data-slide-video') == 'video'){
          window.players["#playerpage-"+currentSlide].pause();
      }

      if( $(slides[nextSlide]).attr('data-slide-video') == 'video'){

        if(! window.players.hasOwnProperty("#playerpage-"+nextSlide)){
            $("#playerpage-"+nextSlide).mediaelementplayer({
                loop: true,
                videoWidth         : '100%',
                videoHeight        : '100%',
                enableAutosize     : true,
                features: ['playpause','progress'],
                success: function(media, node, player) {

                window.players["#playerpage-"+nextSlide] = player;
                    media.addEventListener('ended', function(e){
                      console.log( e.type ,  "ended" , player);

                        $('#slideshow').slick('slickPlay');
                    });
                    media.addEventListener('play', function(e) {
                      $('#slideshow').slick('slickPause');
                    });
                }
            })
          }

          else{
            window.players["#playerpage-"+nextSlide].play();
          }


        // $("#playerpage-"+nextSlide).mediaelementplayer("load");
        // if($(".mejs-overlay-play" , ".slide-"+nextSlide).is(":visible"))
        //   $(".mejs-overlay-play" , ".slide-"+nextSlide).click();
      }

  }).on('afterChange', function(event, slick, currentSlide, nextSlide){

          var slides = $('#slideshow  .slide:not(".slick-cloned")');

          if($(slides[currentSlide]).attr('data-slide-video') == 'video'){
            console.log('afterChange');
            $('#slideshow').slick('slickPause');
          }

  });
*/

    if($('.a-tab-visibility').length)
        $('.a-tab-visibility').removeClass('a-tab-visibility');


    var b = (a("[data-widget]"), []);
    a("[data-a-widget]").each(function(c, d) {
        var e = a(d).attr("data-a-widget"),

        f = a(d).attr("data-a-widget-options") ? a(d).attr("data-a-widget-options") : "{}";
        f = a.parseJSON(f), "function" == typeof window.aws[e] && b.push(new window.aws[e](d, f));
    });
});