jQuery(function($){
    letsgetitoNamespace.Video= function Video( elem , options){
      this.elem   =  $(elem); 
      this.options = options;
      this.init();
    }

    letsgetitoNamespace.Video.prototype =  {
        video: undefined,
        settings   : {
            'videoId' : "",
            'width'   : '600px',
            'height'  : '300px',
        },
       
        init : function(){
             this.merge( this.options );
             this.setVideo();
        },

        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }
                
          }
        },

        setVideo :function(){
            self = this;

            if(!self.settings.videoId)
                return ;

            $(self.settings.videoId).mediaelementplayer({
                loop: false,
                videoWidth         : '100%',
                videoHeight        : '100%',
                enableAutosize     : true,
                features: ['playpause','volume','progress' ]
            });
        }
    }
});