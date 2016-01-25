jQuery(function($){
    letsgetitoNamespace.Dropboxsubmit = function Dropboxsubmit( elem , options ){
      this.elem =  $(elem); 
      this.init();
    }

    letsgetitoNamespace.Dropboxsubmit.prototype =  {
        selects: undefined,

        init : function(){
            this.selects = this.elem.find("select") ;
            self = this; 

            this.selects.each(function(index , elem){
                $(elem).dropkick({
                    mobile: true,
                    change: function () {
                        self.elem.submit();
                    }
                });
            });
        }
    }; 
})