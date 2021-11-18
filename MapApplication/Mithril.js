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