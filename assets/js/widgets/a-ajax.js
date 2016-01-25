
jQuery(function($){

     aws.Ajax= function Ajax( elem , options){

        this.elem    = elem
        this.options = options || {};
        this.init();
        console.log($(this.elem ) , "As" )
    }

    aws.Ajax.prototype =  {
        settings : {
            action : false,
            form   : false
        },

        init : function(){
            this.merge(this.options);
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

            $(this.elem ).on('click', function(event){
                event.preventDefault();
                console.log("ajax22" , self.settings.action, self.settings.form);
            });
        }
    }

});