jQuery(function($){
    letsgetitoNamespace.Num_prd = function Num_prd( elem , options ){
      this.elem =  $(elem); 
      this.init();
    }

    letsgetitoNamespace.Num_prd.prototype =  {
        init : function(){

            this.elem.on('click' , function(event){
                event.preventDefault();
                
                var elem  = $(this);
                var value = elem.attr("data-widget-value");
                // var query = window.location.search;
                // var  url  = window.location.href.replace( query , '');
                
                //query = default_url.replace(/(\?|&)prd_display=-*\d*/gim, '');
                // if(query.charAt( 0 ) == "&")
                //     query =query.replace("&" , "?")
                 

                if(default_url != undefined){
                        query = (default_url.indexOf("?") == -1 ) ? '?prd_display=' + value :  '&prd_display=' + value;
                        url = default_url + query;
                        window.location = url;
                }
                 
            });
            


            
        }
    }; 
});