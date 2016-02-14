
jQuery(function($){

     aws.Ajax= function Ajax( elem , options){

        this.elem    = elem
        this.options = options || {};

        this.settings = {
            action     : false,
            uploadFile : false
        },

        this.init();
    }

    aws.Ajax.prototype =  {

        init : function(){
            this.merge(this.options);
            this.events();
        },

        merge : function(options){
            var options = options

          if(options !== undefined){
            for(var opt in options){
                if(this.settings.hasOwnProperty(opt ) !== undefined)
                    this.settings[opt] = options[opt];
            }

          }
        },

        events : function(){
            var self = this;

            if(self.settings.action){
                $(this.elem).on('submit' , function(event){
                    event.preventDefault();

                    $('.a-input-error').html('');

                    if(self.settings.uploadFile){
                        self.handlerUploadFile($(this).serialize() , $(this));
                    }
                    else{
                        self.handlerDefault($(this).serialize() , $(this));
                    }
                });
            }
        },


        handlerUploadFile: function(values , form){
            var self      = this;
            var load      = $(".a-loading" , this.elem);
            var action    = self.settings.action;
            var files     = $("#"+self.settings.uploadFile)[0].files;
            var errorFile = $("#"+self.settings.uploadFile)
                .parent('.a-clearfix')
                .siblings('.a-input-error');

            errorFile.html('');
            if(!files.length){
                var errorMessage = (vars_site.language_current ==='en') ? 'Required field' : 'Campo Obrigatório';
                errorFile.html(errorMessage);
                return
            }
            var file     = files[0]
            var data     = new FormData();

            data.append('cvform' , file, file.name);
            data.append('action' , action);
            data.append('dados'  , values);

            load.removeClass('a-hide');
            $.ajax ({
                url         :  vars_site.ajax_url,
                type        : 'post',
                data        : data,
                contentType : false,
                processData : false,

                success : function( response ) {
                    self.handlerAjaxSucess( response , load , form)
                }

            });
        },


        handlerDefault: function(values , form){
            var self = this;
            var load = $(".a-loading" , this.elem);
            var data = {
                'action' : self.settings.action,
                'dados'   : values
            }
             console.log(self.settings.action , "dssdsd");
            load.removeClass('a-hide');

            $.ajax ({
                url         :  vars_site.ajax_url,
                type        : 'post',
                data        : data,
                success : function( response ) {
                    self.handlerAjaxSucess(response , load, form)
                }
            });
        },

        handlerAjaxSucess: function(response , load , form){

            var output = jQuery.parseJSON(response);
            if(Object.keys(output).length){
                for(var index in output){
                    if(index ==='sucesso' || index==='sucesso-news'){
                        $('#'+index , form[0]).html(output[index]);
                        form.trigger('reset');
                    }
                    else{
                        error = $('#'+index).siblings('.a-input-error');

                        if(error.length){
                            error.html(output[index]);
                        }
                        else {


                            $('#'+index)
                            .parent('.a-clearfix')
                            .siblings('.a-input-error')
                            .html(output[index]);
                        }
                    }

                }
            }
            load.addClass('a-hide');
        }
    }
});