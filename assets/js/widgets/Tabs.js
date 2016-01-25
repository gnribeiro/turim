jQuery(function($){
    letsgetitoNamespace.Tabs= function Tabs( elem , options){
      this.elem   =  $(elem); 
      this.options = options    ;

      this.init();
    }

    letsgetitoNamespace.Tabs.prototype =  {
        
        tabs       : undefined,
        tabsParent : undefined,
        is_shop    : false,
        noShop     : false,
        settings   : {
            'tabsParent'  : "",
            'link'        : 0,
            'hover'       : 0,
            'contentTabs' : undefined,
            'hashtag'     : 0,
        },
       
        check_is_shop:function(){
            var header =  $("#site > header.main");
            this.is_shop = (header.hasClass('no-shop') == false)  ?  true : false;
        },

        init : function(){
         
             this.merge( this.options );
             this.tabs = $(this.settings.tabsParent).find(' > li');
          
           if(this.settings.hover){
                //this.check_is_shop();
                //this.eventsHover();
           }
           else{

                this.eventsClick();
           }

           if(this.settings.hashtag){
                var self = this;
                
                self.tabs.find('a[href="'+location.hash+'"] ').click();
                jQuery( window  ).on( "hashchange", function( event ) { 
					
					if(self.tabs.find('a[href="'+location.hash+'"] ').length)
						self.tabs.find('a[href="'+location.hash+'"] ').click();
			   } )
           }
           
        },

        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }
                
          }
        },


        eventsHover : function(){
            var self = this ;


            //HACK FOR TABLET EMULATIOM OF OVER
            if(Modernizr.touch){
              
                // var links = this.tabs.find("a");

                // links.on('click' , function(event){
                //     if(!$(this).hasClass("no-active-touch") )
                //         event.preventDefault();
                //     var linkSelected = self.tabs.find("a.no-active-touch");

                //     linkSelected.removeClass("no-active-touch");

                //     $(this).addClass('no-active-touch');

                // });
            }

            $(this.tabs).on('mouseover' , function(event){
                event.preventDefault();
            
                self.selectHover();
            
            })

             $(this.tabs).on('mouseout' , function(event){
                event.preventDefault();
                
              
                self.deselectHover();
             });

        },

        deselectHover : function(){
            var parentTabs = $(this.settings.tabsParent);
            var header     =  $("#site > header.main");

            if(!this.is_shop)
                 header.addClass('no-shop');

            parentTabs.removeClass('selected');  
        },

        selectHover : function(elem){
            var parentTabs = $(this.settings.tabsParent);
            var header     =  $("#site > header.main");

            if(!this.is_shop)
                header.removeClass('no-shop');

            if(!parentTabs.hasClass('selected'))
                parentTabs.addClass('selected');  
        },
        
        eventsClick : function(){
            var self = this ;

            if(this.settings.link === 1){
                this.eventLink();

            }
            else{
                this.eventDefauld();
            }

        },

        eventLink : function(){
            var self = this ;

            $(this.tabs).find('> a').each(function(index , elem){
                $(elem).on('click' , function(event){
                   
                    if(location.search  === "?created_account=true"){
                        
                          event.preventDefault();
                          var link = location.pathname + $(this).attr('href');
                         
                        window.location = link;
                    }
                    else{  
                         
                        if(self.settings.hashtag === 0)
                            event.preventDefault();

                        if( jQuery(window).width() < 753){
                            if(self.settings.hashtag !== 0){
                                var list = jQuery(".tabs-content");
                                var to   = list.position();
                                to        = to.top - 54;

                                 $('html,body').animate({ scrollTop:  to }, 'slow');
                            }
                        }
                        
                        
                        var elem = $(this).parent("li");
                        self.select(elem , index);
                    }
                 });  
            });
          
        },

        eventDefauld : function(){
            var self = this ;

            $(this.tabs).each(function(index , elem){
                $(elem).on('click' , function(event){
                    event.preventDefault();
               
                    self.select(this , index);

                });
            });
        },

        select : function(elem , index){
            var elem = $(elem);
            var parentTabs = $(this.settings.tabsParent);


                if(!parentTabs.hasClass('selected'))
                    parentTabs.addClass('selected');  

                this.tabs.removeClass('selected');
                elem.addClass('selected');


                if(this.settings.contentTabs){
                    contentTabs = $(this.settings.contentTabs);

                    contentTabs.removeClass('selected');
                    $(contentTabs[index]).addClass('selected');
                }

        }

    }; 
});