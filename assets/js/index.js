jQuery(function(a) {
    var b = (a("[data-widget]"), []);
    a("[data-a-widget]").each(function(c, d) {
        var e = a(d).attr("data-a-widget"),

        f = a(d).attr("data-a-widget-options") ? a(d).attr("data-a-widget-options") : "{}";
        f = a.parseJSON(f), "function" == typeof aws[e] && b.push(new aws[e](d, f));
    });
});