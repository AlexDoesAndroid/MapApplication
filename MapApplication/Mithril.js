
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

// some useful sample code on components 

var appstate = null
var appdata = ['left', 'middleLeft', 'middle', 'right']
var ButtonComponent = {
    view: function (vnode) {
        return m('button', {
            onclick: function (e) {
                appstate = e.target.textContent
            }
        }, vnode.attrs.lable)
    }
}

var App = {
    view: function () {
        return [
            appdata.map(function (item) {
                return m(ButtonComponent, { lable: item })
            }),
            appstate !== null && m('h2', appstate)
        ]
    }
}
m.mount(document.body, App)
    

var displayJnH = "Hey this should be a box with text in it";
var displaySS = "Hey this should be a box with text in it";
var generateDiv = {
    view: function () {
        return m('div', displayThis)
    }
}



const JnHButton = {
    view(vnode) {
        return [
            
            m("button#JnH", {
                onclick: jnhClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#JnHbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displayJnH),
            //document.getElementById('#this').display = 'none'
            
        ];
    }

};
const studentCenterButton = {
    view(vnode) {
        return [

            m("button#StudentCenter", {
                onclick: ssClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#StudentCenterbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS),
            //document.getElementById('#this').display = 'none'

        ];
    }

};
var jnhClickListener = {
    handleEvent: function (e) {
        console.log(e)
        document.getElementById('JnHbtn').style.display = 'inline-block';
        displayJnH = "This is J&H";
        //here we should have a refrence to an array or an object to be put in the div
    }
}
var ssClickListener = {
    handleEvent: function (e) {
        console.log(e)
        document.getElementById('StudentCenterbtn').style.display = 'inline-block';
        displaySS = "This is The Student Center";
        //here we should have a refrence to an array or an object to be put in the div
    }
}

m.mount(document.body, {
    view() {
        return [
            m(".bg", m(JnHButton), m(studentCenterButton))
        ];
    }
});