


jQuery(function(a) {
    $(window).on('load , hashchange', function() {
        if(location.hash === "#recrutamento") {
          if($('a[data-a-widget="Amodal"]').length){
            $('a[data-a-widget="Amodal"]').click();
          }
        }
    });

    if($('.a-tab-visibility').length)
        $('.a-tab-visibility').removeClass('a-tab-visibility');


    var b = (a("[data-widget]"), []);
    a("[data-a-widget]").each(function(c, d) {
        var e = a(d).attr("data-a-widget"),

        f = a(d).attr("data-a-widget-options") ? a(d).attr("data-a-widget-options") : "{}";
        f = a.parseJSON(f), "function" == typeof window.aws[e] && b.push(new window.aws[e](d, f));
    });
});