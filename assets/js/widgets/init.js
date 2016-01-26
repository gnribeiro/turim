jQuery(function($){
    window.aws = {};
});


jQuery(function($){
    Site = function Site( ){
      this.init();
    }

    Site.prototype =  {
        init : function(){
          this.reservationDatepicker();
          this.uploadFile();
        },

        reservationDatepicker: function(){
            if($("#date-reserve").length){
                var picker = new Pikaday({
                    field: document.getElementById('#date-reserve'),
                    format: 'D MMM YYYY'
                });
            }
        },

        uploadFile: function(){

            if($(".a-input-file").length){
               $(".a-input-file").on('change', function(evt){

                    var files     = evt.target.files;
                    var inputFake = $(this).siblings('.a-input-fake');

                    $(inputFake).html('');

                    if(files.length && files[0].name){
                        $(inputFake).html(files[0].name);
                    }
               });
            }
        }
    }

    new Site();
});