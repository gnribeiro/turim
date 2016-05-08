jQuery(function($){

    letsgetitoNamespace.Price_filter = function Num_prd( elem , options ){
      this.elem =  $(elem); 
      this.init();
    }


    letsgetitoNamespace.Price_filter.prototype =  {
        min_price         : 0,
        max_price         : 0,
        current_min_price : 0,
        current_max_price : 0,

        init : function(){
            if ( typeof slider_price_conf === 'undefined' ) 
                return false;

            this.setPrices();
            this.events();
            this.setSlider()
        },


        setPrices : function(){
            $( 'input#min_price, input#max_price' , this.elem ).hide();
            $( '.price_slider, .price_label'      , this.elem ).show();
           
            this.min_price = $( '.price_slider_amount #min_price' ).data( 'min' );
            this.max_price = $( '.price_slider_amount #max_price' ).data( 'max' );

            this.current_min_price = parseInt( this.min_price, 10 );
            this.current_max_price = parseInt( this.max_price, 10 );



            if ( slider_price_conf.min_price ) 
                this.current_min_price = parseInt( slider_price_conf.min_price, 10 );

            if ( slider_price_conf.max_price ) 
                this.current_max_price = parseInt( slider_price_conf.max_price, 10 );
        },


        events : function(){

            $( 'body' ).bind( 'price_slider_create price_slider_slide', function( event, min, max ) {

                if ( slider_price_conf.currency_pos === 'left' ) {

                    $( '.price_slider_amount span.from' ).html( slider_price_conf.currency_symbol + min );
                    $( '.price_slider_amount span.to' ).html( slider_price_conf.currency_symbol + max );

                } else if ( slider_price_conf.currency_pos === 'left_space' ) {

                    $( '.price_slider_amount span.from' ).html( slider_price_conf.currency_symbol + " " + min );
                    $( '.price_slider_amount span.to' ).html( slider_price_conf.currency_symbol + " " + max );

                } else if ( slider_price_conf.currency_pos === 'right' ) {

                    $( '.price_slider_amount span.from' ).html( min + slider_price_conf.currency_symbol );
                    $( '.price_slider_amount span.to' ).html( max + slider_price_conf.currency_symbol );

                } else if ( slider_price_conf.currency_pos === 'right_space' ) {

                    $( '.price_slider_amount span.from' ).html( min + " " + slider_price_conf.currency_symbol );
                    $( '.price_slider_amount span.to' ).html( max + " " + slider_price_conf.currency_symbol );

                }

                $( 'body' ).trigger( 'price_slider_updated', min, max );
            });
        },

        setSlider : function(){


           var  min_price         = this.min_price,
                max_price         = this.max_price,
                current_min_price = this.current_min_price,
                current_max_price = this.current_max_price;

            $('#price_slider' , this.elem).slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                values: [ current_min_price, current_max_price ],
                create : function( event, ui ) {

                    $( '.price_slider_amount #min_price' ).val( current_min_price );
                    $( '.price_slider_amount #max_price' ).val( current_max_price );

                    $( 'body' ).trigger( 'price_slider_create', [ current_min_price, current_max_price ] );
                },
                slide: function( event, ui ) {

                    $( 'input#min_price' ).val( ui.values[0] );
                    $( 'input#max_price' ).val( ui.values[1] );

                    $( 'body' ).trigger( 'price_slider_slide', [ ui.values[0], ui.values[1] ] );
                },
                change: function( event, ui ) {

                    $( 'body' ).trigger( 'price_slider_change', [ ui.values[0], ui.values[1] ] );

                }
            });
        }
    }

});