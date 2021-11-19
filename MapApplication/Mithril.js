
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



//modal module
var modal = {}
modal.visible = m.prop(false)
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
            return m("p, "modal content goes here")
  })
}