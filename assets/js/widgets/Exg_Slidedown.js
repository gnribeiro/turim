jQuery(function($){
    letsgetitoNamespace.Slidedown= function Slidedown( elem , options){
      this.elem   =  $(elem);
      this.options = options;
      this.init();
    }

    letsgetitoNamespace.Slidedown.prototype =  {
         settings   : {
            'button'  :"",
            'content' : 0
        },

        init : function(){
            this.merge( this.options );
            this.settings.button = $(this.settings.button ) ;
            this.settings.content = $(this.settings.content ) ;


           this.events();
        },

        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }

          }
        },

        events : function(){
            var self = this;


            this.settings.button.on("click" , function() {
                if(self.settings.button.hasClass("selected")){
                    self.settings.button.removeClass("selected");
                }
                else{
                    self.settings.button.addClass("selected");
                }

              self.settings.content.slideToggle(  );

            });
        }
    }
});