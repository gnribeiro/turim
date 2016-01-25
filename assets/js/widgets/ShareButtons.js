jQuery(function($){

     letsgetitoNamespace.ShareButtons= function Tabs( elem , options){
      this.elem   =  $(elem); 
      this.options = options || {};
      this.init();
    }

    letsgetitoNamespace.ShareButtons.prototype =  {
         
         socialmedia :{
            'facebook' : {
                'href'   : "https://www.facebook.com/sharer/sharer.php?s=100",
                'querystring' : {
                    'title'   :  "&p[title]=",
                    'url'     :  "&p[url]=",
                    'image'   :  "&p[images][0]=",
                    'summary' :  "&p[summary]=",

                },
                'window_title' : 'facebook-share-dialog'  
            },

            'google' : {
                'href'   : "https://plus.google.com/share",
                'querystring' : {
                    'url'    :  "?url=",
                },
                'window_title' : 'google-share-dialog'  
            },
            
            'twitter' : {
                'href'   : "https://twitter.com/intent/tweet",
                'querystring' : {
                    'url'     :  "?url=",
                    'summary' :  "&text=",
                },
                'window_title' : 'twitter-share-dialog'  
            }
         },
         links    : undefined,
         buttons  : {}, 
         settings : {},
       
        init : function(){
           this.links = this.elem.find(" > a ");
           this.set_buttons();
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


            $(this.links).on('click' , function(event){
                event.preventDefault();
                
                var social = $(this).attr("data-share-type");
                self.createWindow(social);
             

            });
        },

        set_buttons : function(){
            for(var index  in this.socialmedia){
                
                var href = this.socialmedia[index].href;
                var node = jQuery.grep(this.links , function( elem ) {
                    if($(elem).attr("data-share-type") == index)
                        return elem;
                });
                
                for(var key  in this.socialmedia[index].querystring){

                    href +=  this.socialmedia[index].querystring[key] + $(node).attr("data-share-" + key );   
                }
                
                this.buttons[index] = {
                    'href'  : href,
                    'title' : this.socialmedia[index].window_title
                }

                
            }
        },

        createWindow :function(socialmedia){
            href = this.buttons[socialmedia].href;
            title = this.buttons[socialmedia].title;

            window.open( href , title ,  'width=626,height=436')
        }
    }

})