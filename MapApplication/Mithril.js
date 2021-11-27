class Attractions {
    constructor(location, attractName, genDirections, descrip) {
        this.attrLocation = location;
        this.attrName = attractName;
        this.attrDirections = genDirections;
        this.attrDescrip = descrip;
        console.log("Constructor Initialized");
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
//this is the array used for pulling and storing, use another one for other functions aka use a fresh copy every time you want to do something with the objects
var attractionsArr = [];
//this is a default object
const HalalTruck1 = new Attractions('Student Center', 'Halal Truck 1', "Outside door 1 across the street", 'Place to get a cheap quick lunch');
attractionsArr.unshift(HalalTruck1);
const JNHFeild = new Attractions('Johnson and Hardwick', 'Peabody Feild', "Outside the front dor to the left", 'Literally a feild');
attractionsArr.unshift(JNHFeild);
localStorage.setItem('BuildingAttractions', JSON.stringify(attractionsArr));
//create a method that takes the form inputs and runs it through the class, also adding it to local storage
var AttractionClickListener = {
    handleEvent: function (e) {
        console.log(e)
        e.preventDefault();
        console.log("you got to the attraction click listener for objects")
        var atrLocate = document.getElementById('AtractLoc').value;
        var atrName = document.getElementById('AtracName').value;
        var atrGenDirec = document.getElementById('AtracDirec').value;
        var atrDescrip = document.getElementById('AtracDescrip').value;
        var obj = new Attractions(atrLocate, atrName, atrGenDirec, atrDescrip);
        localStorage.setItem(atrName, JSON.stringify(obj));
        addToLocalArray(obj);
    }
}


addToLocalArray = function (obj) {
    var arr = localStorage.getItem('BuildingAttractions');
    var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
    localStorage.clear();
    attractionsArr = parseArr;
    attractionsArr.unshift(obj);
    localStorage.setItem('BuildingAttractions', JSON.stringify(attractionsArr));
}


//create a method that pulls from local storage and places all those items in the an array or list thats refrenced by 
//a component


//alternativly write a method that creates <li> then puts them in the correct div
//this can be done with a really long if else statement to try and match the location then put it in a UL with a 
//specific id
var listelements = m("li.lists", 'a variable will go here');

var SortLists = {

    onupdate: function () {
        var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
        pulledFromStorage = parseArr;
    },
    view: function () {

    },
}
var pulledFromStorage = [];
var JnHArr = []

oncreated = function () {
    var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
    pulledFromStorage = parseArr;
    for (var index = 0; index < pulledFromStorage.length; index++) {
        var check = pulledFromStorage[index];
        if (check == "Johnson and Hardwick") {
            var newLI = m('li.lists', m('p', check[attrName]), m('p', check[atrGenDirec]), m('p', check[atrDescrip]));
            m('ul.AttractionLists#JnHUL', newLI);
            JnHArr.unshift(newLI);
        }
    }
}
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

//const { buildPathname } = require("mithril");

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
        document.getElementById('JNHForm').style.display = 'none';
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


var options = {
    view: function () {
        return [
            m("option.options[value=Johnson and Hardwick", "Johnson and Hardwick"),
            m("option.options[value=SERC", "SERC"),
        ]
    }

}
//create a component that will display a form
const attractionForm = {
    view: function () {
        return m("form", [
            m("label.label", "Location:"),
            m("select.input#AtractLoc", options.view()),

            m("label.label", "Attraction:"),
            m("input.input#AtracName[type=text][placeholder=Attraction Name]"),

            m("label.label", "General Directions:"),
            m("input.input#AtracDirec[type=text][placeholder='around the corner from door 1']"),

            m("label.label", "Description:"),
            m("textarea.input#AtracDescrip[rows=3][cols=35][placeholder='food or something']"),

            m("button.button#attrFormSubmit[type=submit]", { onclick: AttractionClickListener }, "Submit"),
            
        ])
    }
}
//this create the form div
var formDiv = m('div.formDisplay#JNHForm', { style: { background: 'white', display: 'block', padding: '1%' } }, attractionForm.view());










var displayJnH = "Hey this should be a box with text in it";
var displaySS = "Hey this should be a box with text in it";
//these add UL to the divs
var JnHList = m('ul.AttractionLists#JnHUL', "Nearby Attractions: ", m('li', JnHArr));
var SERCList = m('ul.AttractionLists#SercUL', "Nearby Attractions: ");
var PaleyList = m('ul.AttractionLists#PaleyUL', "Nearby Attractions: ");
var StudentCenterList = m('ul.AttractionLists#SSUL', "Nearby Attractions: ");
var PresserList = m('ul.AttractionLists#PresserUL', "Nearby Attractions: ");

//this is the JNH button, should always be the first button
const JnHButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#JnH", {
                onclick: jnhClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            m('div.diplay#JnHbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displayJnH, JnHList, closeBtn, AddAttraction),
            m('div.formDisplay#JNHForm', { style: { background: 'white', display: 'none', padding: '1%' } }, attractionForm.view())

            //document.getElementById('#this').display = 'none'
            
        ];
    }

};
//this is the JNH event handler that handles the onclick event from the buttons
var jnhClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        var i = 0;
        if (i % 2 == 1) { 
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
            m('div.diplay#StudentCenterbtn', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, StudentCenterList, closeBtn),

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
            m('div.diplay#SERCDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, SERCList, closeBtn),

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
            m('div.diplay#PalyDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, PaleyList, closeBtn),
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
            m('div.diplay#PresserDiv', { style: { background: 'white', display: 'none', padding: '1%' } }, displaySS, PresserList, closeBtn),
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

            //m(SortLists, oncreate()),
        ];
    },
    
});
