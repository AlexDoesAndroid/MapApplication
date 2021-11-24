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
/*
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

//this is an event listener that hides all the display divs
var CloseClickListener = {
    handleEvent: function (e) {
        console.log(e);
        //this is javascript that unhides the div
        document.getElementById('JnHbtn').style.display = 'none';
        document.getElementById('StudentCenterbtn').style.display = 'none';
        document.getElementById('SERCDiv').style.display = 'none';
        document.getElementById('PalyDiv').style.display = 'none';
        document.getElementById('PresserDiv').style.display = 'none';
        //here we should have a refrence to an array or an object to be put in the div
    }
}
//this is an event listener that opens the form in a div
var addAttractionClickListener = {
    handleEvent: function (e) {
        console.log(e);
        //attractionForm;
        document.getElementById('JNHForm').style.display = 'inline-block';
        
    }
}

//this is the close button
const closeBtn = m("button#Close", { onclick: CloseClickListener }, "X");
//this is the form button
const AddAttraction = m("button#Add", { onclick: addAttractionClickListener }, "Add Nearby Attraction");

//create a component that will display a form
const attractionForm = {
    view: function () {
        return m("form", [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]"),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]"),
            m("button.button[type=button]", "Save"),
        ])
    }
}
//this create the form div
var formDiv = m('div.diplay#JNHForm', { style: { background: 'white', display: 'block', padding: '1%' } }, attractionForm.view());










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
            m('div.diplay#JnHbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displayJnH, closeBtn, AddAttraction),
            m('div.diplay#JNHForm', { style: { background: 'white', display: 'none', padding: '1%' } }, attractionForm.view()),
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

//this is the Student center button
const studentCenterButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#StudentCenter", {
                onclick: ssClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#StudentCenterbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, closeBtn),
            //document.getElementById('#this').display = 'none'

        ];
    }
};
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

//this is the SERC button
const SERCButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#SERC", {
                onclick: sercClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#SERCDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, closeBtn),
            //document.getElementById('#this').display = 'none'

        ];
    }
};
var sercClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('SERCDiv').style.display = 'inline-block';
        displaySS = "This is The SERC";
        //here we should have a refrence to an array or an object to be put in the div
    }
}

const Paley = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#PalyHall", {
                onclick: paleyClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#PalyDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, closeBtn),
            //document.getElementById('#this').display = 'none'

        ];
    }
};
var paleyClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('PalyDiv').style.display = 'inline-block';
        displaySS = "This is The Paley";
        //here we should have a refrence to an array or an object to be put in the div
    }
}

const Presser = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#PresserHall", {
                onclick: presserClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#PresserDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, closeBtn),
            //document.getElementById('#this').display = 'none'

        ];
    }
};
var presserClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('PresserDiv').style.display = 'inline-block';
        displaySS = "This is The Presser Hall";
        //here we should have a refrence to an array or an object to be put in the div
    }
}






//this puts the button on the correct div on load
m.mount(document.body, {
    view() {
        return [
            m(".bg", m(JnHButton), m(studentCenterButton), m(SERCButton), m(Paley), m(Presser))
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
//create a method that takes the form inputs and runs it through the class, also adding it to local storage


var AttractionClickListener = {
    handleEvent: function (e) {
        console.log(e)
        var atrLocate = document.getElementById(AtractLoc).value;
        var atrName = document.getElementById(AtracName).value;
        var atrGenDirec = document.getElementById(AtracDirec).value;
        var atrDescrip = document.getElementById(AtracDescrip).value;

    }
}



//create a method that pulls from local storage and places all those items in the an array or list thats refrenced by 
//a component


