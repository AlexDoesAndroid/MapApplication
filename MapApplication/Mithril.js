
$(document).ready(function () {
    var $winwidth = $(window).width();
    $(".bg").attr({
        width: $winwidth
    });
    $(window).bind("resize", function () {
        var $winwidth = $(window).width();
        $("bg").attr({
            width: $winwidth
        });
    });
});

//comment the below out to get the map back
///*
var App = {
    view: function () {
        return "Hello, this is a component";
    }
}
m.mount(document.body, App);
//*/