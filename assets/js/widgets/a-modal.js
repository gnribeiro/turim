
jQuery(function($){

    aws.Amodal = function amodal( elem , options){
      this.elem     = elem;
      this.options  = options || {};
      this.settings = {
            onOpen  : function(){},
            content : false,
            form    : false,
            onClose : function(){}
        };

      this.init();
    }


    aws.Amodal.prototype =  {
        modalElement : ".a-modal__container",
        modalContent : ".a-modal__setcontent",

        init : function(){
            this.merge(this.options);
            this.create();
            this.btnClose = $('.a-model__close');
            this.events();
            if(this.settings.content){
              var html =  $(this.settings.content);
              $(html).removeClass('a-hide');
              this.setContent(html);
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

        create : function(){
            if( $(this.modalElement).length )
                return

            $("body").append(this.modalHtml);
        },

        events :function(){
          var that = this;

          $(this.elem).on('click', function(event){
             console.log("1112s");
                event.preventDefault();
                that.open();
          });

          this.btnClose.on('click', function(event){
                event.preventDefault();

                console.log("btnClose");
                that.close();
          });

          $(this.modalElement).on('click', function(event){
                event.preventDefault();
                that.close();
          });

           $(this.modalContent).on('click', function(event){

              event.stopPropagation();

          });
        },

        open : function(){
             console.log("open", this.modalElement);

            if( typeof this.settings.onOpen === "function" )
              this.settings.onOpen();

            $(this.modalElement).addClass("a-modal__container--selected");
        },

        setContent : function(html){

            $('.a-modal__setcontent').append(html) ;
        },

        close : function(){
           if( typeof this.settings.onClose === "function" )
            this.settings.onClose();

          if(this.settings.form && $(".a-field-form--modal").length){
            $(".a-field-form--modal").trigger('reset');
            $("#sucesso" , ".a-field-form--modal").html('');
            $(".a-input-error--modal" , ".a-field-form--modal").html('');
          }

          $(this.modalElement).removeClass("a-modal__container--selected");
        },


        modalHtml :'<div class="a-modal__container">'+
                '<div class="a-modal__content">'+
                    '<span  class="a-modal__close"><i class="fa fa-times"></i></span>'+
                    '<div class="a-modal__setcontent"></div>'+
                '</div>'+
            '</div>'+
        '</div>',
    }


});