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
    */

var displayJnH = "Hey this should be a box with text in it";
var displaySS = "Hey this should be a box with text in it";

//this is the JNH button, should always be the first button
const JnHButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#JnH", {
                onclick: jnhClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#JnHbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displayJnH),
            //document.getElementById('#this').display = 'none'
            
        ];
    }

};
//this is the Student center button
const studentCenterButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#StudentCenter", {
                onclick: ssClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#StudentCenterbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS),
            //document.getElementById('#this').display = 'none'

        ];
    }
};


//this is the JNH event handler that handles the onclick event from the buttons
var jnhClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('JnHbtn').style.display = 'inline-block';
        displayJnH = "This is J&H";
        //here we should have a refrence to an array or an object to be put in the div
    }
}
//this is the student center event handler that handles the onclick event for the button
var ssClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('StudentCenterbtn').style.display = 'inline-block';
        displaySS = "This is The Student Center";
        //here we should have a refrence to an array or an object to be put in the div
    }
}

//this puts the button on the correct div on load
m.mount(document.body, {
    view() {
        return [
            m(".bg", m(JnHButton), m(studentCenterButton))
        ];
    }
});

















class Attractions {
    constructor(location, attractName, genDirections, descrip) {
        this.attrLocation = location;
        this.attrName = attractName;
        this.attrDirections = genDirections;
        this.attrDescrip = descrip;
    }
    get TheLocation() {
        return this.attrLocation
    }
    set TheLocation(value) {
        this.attrLocation = value;
    }
    get AttractionName() {
        return this.attrName;
    }
    set AttractionName(value) {
        this.attrName = value
    }
    get AtrractionDescription() {
        return this.attrDescrip;
    }
    set AttractionDescription(value) {
        this.attrDescrip = value;
    }
    get AttractionDescription() {
        return this.attrDescrip;
    }
    set AttractionDescription(value) {
        this.attrDescrip = value;
    }
}