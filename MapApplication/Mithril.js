
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
var app = document.getElementById("hello")
m.render(app, "Hello world");
//*/




//modal module
//var F = m.prop(false)

var modal = {}
modal.visible = false;
modal.view = function (body) {
    return modal.visible() ? m(".modal", body()) : ""
}

//in your other view
var myOtherView = function () {
    //this button sets the flag to true
    m("button[type=button]", { onclick: modal.visible.bind(this, true) }, "Show modal"),

        //include the modal anywhere it makes sense to
        //its visibility is taken care by the modal itself
        //positioning is controlled via CSS
        modal.view(function () {
            return m("p", "modal content goes here")
  })
}