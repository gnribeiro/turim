jQuery(function($){
    
    letsgetitoNamespace.Exg_outstock_modal= function Exg_outstock_modal( elem , options){
        this.elem = elem;
        this.options = options || {};
        this.init();
    }

    letsgetitoNamespace.Exg_outstock_modal.prototype =  {
        modal        : undefined,
        textAccepts  :'',
        textDecline  :'',
        textContent  :'',
        modalElement : "#exg-model-outstock",
        modalContent : "#exg-model-content-outstock",
        settings     : { 
            'form' : false
        },

        init : function(){
         
            this.elem      = $(this.elem);
            this.modal     = new letsgetitoNamespace.Exg_modal('');
            var productId  = this.elem.attr("data-product");
            this.productId = productId;
            this.merge( this.options );
            
            this.modal.modalElement  = "#exg-model-outstock";
            this.modal.modalHtml     =  this.modalHtml;
            this.modal.modalContent  ="#exg-model-content-outstock";
            this.modal.init();
                
            this.modal.setContent(this.contentHtml);
            this.events(productId);
        },

        merge : function(options){

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }
                
          }
        },

        events: function(){
            var self      = this;
         
            this.elem.on('click' , function(event){
                event.preventDefault();
                  
                       
                var productId         = self.elem.attr("data-product");
                var template          = $("#template-outofstock-"+productId);
                var outofstocktext    = template.find("#outofstocktext").html();
                var outofstockaccepts = template.find("#outofstockaccepts").html();
                var outofstockdecline = template.find("#outofstockdecline").html();
                
                $(".modal_in_content").attr("data-prdid" , productId);
                $(".modal_text_content").html(outofstocktext);
                $(".modal_buttons_content .butn.accepts").html(outofstockaccepts);
                $(".modal_buttons_content .butn.decline").html(outofstockdecline);
                    
                 
                self.modal.open();
            });                 
     
            
            $("#accepts-preorder").on('click' , function(){
                           
                if( self.settings.form === "true" ){
                    $("form.cart").submit(); 
                    
                    self.modal.close();
                }
                else{
                  var productId = $(this).parents(".modal_in_content");
                  productId =   $(productId).attr("data-prdid");
                    $('.desc-prd a[data-product_id="'+ productId +'"]').click();
                    self.modal.close(); 
                }
            });

            $("#decline-preorder").on('click' , function(event){
                    event.preventDefault();
                    self.modal.close();
            });            
        },

        contentHtml : '<div class="modal_outstock_container">'+
            '<div class="modal_in_content" data-prdid=""><div class="modal_text_content">text'+
            '</div>'+
            '<div class="modal_buttons_content clearfix">'+
            '<a class="butn highlight accepts" id="accepts-preorder">textAccepts</a>'+
            '<a class="butn decline" id="decline-preorder">Decline</a>'+
            '</div></div>',

        modalHtml :'<div class="exg-model " id="exg-model-outstock">'+
            '<div class="exg-model-container">'+
                '<div class="exg-model-content">'+
                    '<span id="exg_modelclose" class="exg_modelclose"></span>'+
                    '<div class="exg-content" id="exg-model-content-outstock"></div>'+
                '</div>'+
            '</div>'+
        '</div>',
    }
})