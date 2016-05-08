jQuery(function($){
    window.aws = {};
});


jQuery(function($){
    Site = function Site( ){
      this.init();
    }

    Site.prototype =  {
        init : function(){
            this.menuClass();
            this.reservationDatepicker();
            this.uploadFile();
            this.dropkick();
            this.menu();
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                    breakpoints: {
                         767: {
                            slidesPerView: 1,
                            spaceBetweenSlides: 10
                         }
                    }
                })

                $( ".a-tabs__content:not(.a-tabs__content--selected)" ).hide();

                if($('.a-tab-visibility').length)
                    $('.a-tab-visibility').removeClass('a-tab-visibility');
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

        menuClass: function(){

            if($(".a-menu-main--footer a.current-menu-item").length > 1 &&  $(".a-menu-main--header a.current-menu-item").length > 1){
                var linkf = $(" a.current-menu-item");
                $("a.current-menu-item").removeClass('current-menu-item')


                linkf.each(function(index, el) {
                  if( el.href === location.href)
                    $(el).addClass('current-menu-item')
                });
            }

            $(".a-menu-main--footer a, .a-menu-main--header a").each(function(index ,  el) {
                if(el.href.match(/#/)){

                    $(el).on("click" , function (event) {

                        if(el.href) {
                          $("a.current-menu-item").removeClass('current-menu-item');

                          $('.a-menu-main--footer a[href="'+el.href+'"] ,
                            .a-menu-main--header a[href="'+el.href+'"]').addClass('current-menu-item');
                        }

                        var menubtn = $('.a-btn.a-btn--menu' , '.a-menu');

                        if(menubtn.hasClass('a-btn--menu--selected')){
                            menubtn.click();
                        }

                    });

                }
            });
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

        menu: function(){
            var menu    = $(".a-menu-main--header");
            var btnMenu = $(".a-btn--menu");

            if(menu.length){
                btnMenu.on('click' , function(event){
                    event.preventDefault();
                    if(btnMenu.hasClass('a-btn--menu--selected')){
                        $("header.main").removeClass('menu--selected');
                        btnMenu.removeClass('a-btn--menu--selected');
                        menu.slideUp()
                    }
                    else{
                        $("header.main").addClass('menu--selected');
                        btnMenu.addClass('a-btn--menu--selected');
                        menu.slideDown();
                    }

                });
            }
        },

        reservation: function(){
            var self = this;

            if($('.a-btn--reservation').length) {
                $('.a-btn--reservation').on('click', function(event){

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