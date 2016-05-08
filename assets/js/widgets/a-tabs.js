
jQuery(function($){

    aws.Tabs= function Tabs( elem , options){
        this.elem     =  $(elem);
        this.options  = options;
        this.settings = {
            'btns'            : undefined,
            'content'         : undefined,
            'tabsSelected'    : 'a-tabs__link--selected',
            'contentSelected' : 'a-tabs__content--selected'
        },
      this.init();
    }

    aws.Tabs.prototype =  {

        init : function(){
            this.merge( this.options );
            this.content = $(this.settings.content);
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

        events: function(){
            var self = this ;
            $(this.settings.btns).each(function(index, el) {
                $(el).on('click' , function(event){
                    event.preventDefault();
                    if($(this).hasClass(self.settings.tabsSelected))
                        return


                    if($(this).data("tab") === "reuniões & eventos" || $(this).data("tab") === "Ementa"){
                        $('section.a-dark-ligth-large')
                        .addClass('a-dark-ligth-large--dark')
                    }
                    else{
                         $('section.a-dark-ligth-large')
                         .removeClass('a-dark-ligth-large--dark')
                    }

                    self.deselect();
                    self.select(el , index);
                });
            });

        },


        deselect : function(){
           $('.'+this.settings.contentSelected).hide();
            $('.'+this.settings.tabsSelected).removeClass(this.settings.tabsSelected);
            $('.'+this.settings.contentSelected).removeClass(this.settings.contentSelected);
        },

        select : function(elem , index){
            $(elem).addClass(this.settings.tabsSelected);
            $(this.content[index]).fadeIn('slow');
            $(this.content[index]).addClass(this.settings.contentSelected);
        }
    };
});