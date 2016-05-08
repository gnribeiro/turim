jQuery(function($){

    aws.AmodalImage = function AmodalImage( elem , options){
      this.elem     = elem;
      this.options  = options || {};


      this.init();
    }
    aws.AmodalImage.prototype =  {
        init : function(){
            this.modal = new aws.Amodal();
            this.modal.addClassModal('a-modal--image')
            this.merge(this.options);
            this.events();
        },

        events:function(){
            var self    = this;

            $(this.elem).on('click' , function(){
                var url     = $(self.elem).attr("data-image");
                var content =  '<img  src="'+url+'" class="a-img-responsive" />'
                self.modal.setContent(content);
                self.modal.open();
            })
        },


        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }

          }
        }
    }

});