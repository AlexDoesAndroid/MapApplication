﻿
//$(document).ready(function () {
//    var $winwidth = $(window).width();
//    $(".bg").attr({
//        width: $winwidth
//    });
//    $(window).bind("resize", function () {
//        var $winwidth = $(window).width();
//        $("bg").attr({
//            width: $winwidth
//        });
//    }); 
//});

//comment the below out to get the map back
///*


//*/




//modal module
//var F = m.prop(false)

/*
var modal = {
}
modal.visible = false;
modal.view = function (body) {
    return modal.visible() ? m.render(".modal", body()) : ""
}
//in your other view
var myOtherView = function () {
    //this button sets the flag to true
    m('button[type="button"]', { onclick: modal.visible.bind(this, true) }, "Show modal"),
        //include the modal anywhere it makes sense to
        //its visibility is taken care by the modal itself
        //positioning is controlled via CSS
        modal.view(function () {
            return m.render("p", "modal content goes here")
  })
}
document.getElementById("#modal").onclick = m.withAttr(myOtherView());
**/


var displayThis = "Hey this should be a box with text in it";
var generateDiv = {
    view: function () {
        m('div', displayThis)
    }
}

const Button = {
    view(vnode) {
        return [
            m("button", {
                onclick() {
                    console.log(vnode);
                    m(generateDiv.view);
                    displayThis = "This is J&H";

                }

            }, "Button"),
            
        ];
    }

};

m.mount(document.body, {
    view() {
        return m(".bg",
            m(Button)
        );
    }
});