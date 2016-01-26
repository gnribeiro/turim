
jQuery(function($){

     aws.Ajax= function Ajax( elem , options){

        this.elem    = elem
        this.options = options || {};
        this.init();

    }

    aws.Ajax.prototype =  {
        settings : {
            action     : false,
            uploadFile : false
        },

        init : function(){
            this.merge(this.options);
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

            if(self.settings.action){
                $(this.elem).on('submit' , function(event){
                    event.preventDefault();

                    var data   = $(this).serialize();
                    var load   = $("a-loading" , this.elem);
                    var action = self.settings.action;

                    if(self.settings.uploadFile){
                        var files     = $("#"+self.settings.uploadFile)[0].files;
                        var errorFile = $("#"+self.settings.uploadFile)
                        .parent('.a-clearfix')
                        .siblings('.a-input-error');

                        errorFile.html('');

                        console.log(files );

                        if(!files.length){
                            errorFile.html('Campo Obrigatório');
                            return
                        }
                        var file     = files[0]
                        var data     = new FormData();

                        data.append('cvform' , file, file.name);
                        data.append('action' , action);
                        data.append('dados'   , $(this).serialize());
                    }
                    else{
                        data = {
                            'action' :action,
                            'data'   :data
                        }
                    }

                    load.removeClass('a-hide');

                    $.ajax ( {
                        url         :  vars_site.ajax_url,
                        type        : 'post',
                        data        : data,
                        contentType : false,
                        processData : false,

                        success : function( response ) {
                            console.log(response);
                            var output = jQuery.parseJSON(response);

                            console.log(Object.keys(output).length);
                            if(Object.keys(output).length){
                                for(var index in output){
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
                            load.addClass('a-hide');
                        }
                    });
                })
            }
        }
    }

});