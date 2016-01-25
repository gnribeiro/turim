jQuery(function($){
    letsgetitoNamespace.Accordion= function Accordion( elem , options){
      this.elem   =  elem; 
      this.options = options || {};
      this.init();
    }

    letsgetitoNamespace.Accordion.prototype =  {
        settings   : {},
       
        init : function(){
            // this.merge( this.options );
            

            var itens =  $(this.elem) .find("li");

            var self = this;


            $(itens).each(function(index , elem){

                $("div.header > h1" , elem).on('click' , function(){

                
                    if($(this).hasClass("selected")){
                       $("li.selected > div.content" , self.elem ).slideUp();
                       $("h1.selected " , self.elem ).removeClass('selected');

                    }
                    else{     

                    $("li.selected > div.content" , self.elem ).slideUp();
                    $("h1.selected " , self.elem ).removeClass('selected');
                    $("li.selected  " , self.elem ).removeClass('selected');
              
                
                    $(elem).addClass('selected');
                    $(this).addClass('selected');
                    $("> div.content" , elem).slideDown();
                    }
              
                })

            })
            
           
        },

        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }
                
          }
        },
    }
});