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
            this.dropkick();
            this.reservation();
            this.slickgallery();

        },


        slickgallery: function(){
            if($('.a-slick-gallery')) {

                var swiper = new Swiper('.swiper-container', {
                   pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30
                })


            }

        },

        dropkick:function(){
            if($(".a-field-select").length){
                $(".a-field-select").dropkick({
                    mobile: true
                });
            }
        },


        reservationDatepicker: function(){
            if($("#date-reserve").length){
                var picker = new Pikaday({
                    field: document.getElementById('date-reserve'),
                    format: 'D MMM YYYY'
                });
            }
            this.reservaDatepicker();
            if($(".fa.fa-calendar" , '.a-input-text--date-reserva-content').length){
                $(".fa.fa-calendar" , '.a-input-text--date-reserva-content').on('click' , function(e){
                    $(this).siblings('input.a-input-text--date-reserva').click();
                });
            }



        },


        reservaDatepicker: function(){
            if($("#arrivalDate").length){
                var startDate;
                var  endDate;

                var updateStartDate = function() {
                    startPicker.setStartRange(startDate);
                    endPicker.setStartRange(startDate);
                    endPicker.setMinDate(startDate);
                };


                var updateEndDate = function() {
                    startPicker.setEndRange(endDate);
                    startPicker.setMaxDate(endDate);
                    endPicker.setEndRange(endDate);
                };

                var caculateDays = function(){
                    var startDay = moment(startPicker.getDate());
                    var endDay   = moment(endPicker.getDate());
                    var nights   = endDay.diff(startDay, 'days');

                    if(!isNaN(nights))
                        $("#nights-reservar").val(nights);
                }

                var startPicker = new Pikaday({
                    field: document.getElementById('arrivalDate'),
                    minDate: new Date(),
                    maxDate: new Date(2090, 12, 31),
                    onSelect: function() {
                        startDate = this.getDate();
                        updateStartDate();
                        caculateDays();
                    }
                });

                var endPicker = new Pikaday({
                    field: document.getElementById('checkoutDate'),
                    minDate: new Date(),
                    maxDate: new Date(2090, 12, 31),
                    onSelect: function() {
                        endDate = this.getDate();
                        updateEndDate();
                        caculateDays();
                    }
                });


                _startDate = startPicker.getDate();
                _endDate   = endPicker.getDate();

                if (_startDate) {
                    startDate = _startDate;
                    updateStartDate();
                }

                if (_endDate) {
                    endDate = _endDate;
                    updateEndDate();
                }

                $(window).on('updateReservasiotnDate' , function(){
                    startPicker.destroy();
                    endPicker.destroy();
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
        },

        reservation: function(){
            var self = this;

            if($('.a-btn--reservation').length) {
                $('.a-btn--reservation').on('click', function(event){
                    console.log("ssa");
                    event.preventDefault();
                    $(this).addClass('a-btn--reservation--selected');

                    if($('.a-reservar').length)
                        $(".a-reservar").addClass('a-reservar--selected');
                });
            }


            if($('.a-btn--close-reservar').length) {
                 $('.a-btn--close-reservar').on('click', function(event){
                    event.preventDefault();
                    $('.a-btn--reservation').removeClass('a-btn--reservation--selected');

                    if($('.a-reservar').length)
                        $(".a-reservar").removeClass('a-reservar--selected');



                    $('.a-field-form-reserva').trigger('updateReservasiotnDate');
                    $('.a-field-form-reserva').trigger('reset');
                    self.reservaDatepicker();
                });
            }
        }

    }

    new Site();
});