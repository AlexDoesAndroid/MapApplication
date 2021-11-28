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

class Attractions {
    constructor(location, attractName, genDirections, descrip, id) {
        this.attrLocation = location;
        this.attrName = attractName;
        this.attrDirections = genDirections;
        this.attrDescrip = descrip;
        this.id = id;
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
    get AttractionID() {
        return this.ID;
    }
    set AttractionID(value) {
        this.id = value;
    }
}
//this is the array used for pulling and storing, use another one for other functions aka use a fresh copy every time you want to do something with the objects
var attractionsArr = [];
//this is a default object
const HalalTruck1 = new Attractions('Student Center', 'Halal Truck 1', "Outside door 1 across the street", 'Place to get a cheap quick lunch', 1);
attractionsArr.unshift(HalalTruck1);
const JNHFeild = new Attractions('Johnson and Hardwick', 'Points of interest: Peabody Field', "Services: Student Dormitories", 'Where iron owls are made.', 2);
attractionsArr.unshift(JNHFeild);
const JNHTest = new Attractions('Johnson and Hardwick', 'Test Object', "Around the corner", 'This is a test Object', 3);
attractionsArr.unshift(JNHTest);
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
var pulledFromStorage = [];
/*
 var SortLists = {

    onupdate: function () {
        var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
        pulledFromStorage = parseArr;
    },
    view: function () {

    },
}
*/
var JnHArray = [];
//this is my attempt at writing  a component that creates a list element
var JnHArrComponent = {
    JnHArrayComp: [],
    attrLocation: "",
    attrName: "",
    attrDirections: "",
    attrDescrip: ""
}
//this is a component with fucntions to be enacted o the above component
const actions = {
    addToJnH: function () {
        JnHArrComponent.JnHArrayComp.push(JnHArrComponent.attrLocation, JnHArrComponent.attrName, JnHArrComponent.attrDirections, JnHArrComponent.attrDescrip)
        attrLocation: ""
        attrName: ""
        attrDirections: ""
        attrDescrip: ""
    }
}
//this is a function that selects an object based on the location name and puts it in the JnH array

//var listItems;// = m('li.lists#' + ObjName, m('p', ObjName), m('p', objdirec), m('p', objDesc));
SortLocalStorage = function () {
    var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
    pulledFromStorage = parseArr;
    //for loop for getting index
    var ObjName;// = "Default";
    var objDesc;// = "Default";
    var objdirec;// = "Default";
    for (var index = 0; index < pulledFromStorage.length; index++) {
        var check = pulledFromStorage[index];
        console.log("entered loop");
        //if block to get the location
        if (check["attrLocation"] == "Johnson and Hardwick") {
            //attempts to mount the array in a list element through the component
            //m.render('li.lists', createDomElements(JnHArray));
            ObjName = check["attrName"];
            console.log(ObjName);
            objDesc = check["attrDescrip"];
            console.log(objDesc);
            objdirec = check["attrDirections"];
            console.log(objdirec);
            //ObjName.toString();
            //objDesc.toString();
            //objdirec.toString();
            //m('JnHUL', newLI);
            //adds the index to the new array at the first position
            JnHArray.unshift(check);
            actions.addToJnH();
        }
        console.log(ObjName);
        console.log(objDesc);
        console.log(objdirec);

    }
    console.log("finished sorting");
    console.log(JnHArray);
    //createListRefs();
}
//this var acn be refrenced in the dom elements
var listItems = userList(JnHArray);
//this is a components that handles the arrays
createListRefs = {
    view: function () {
        var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
        pulledFromStorage = parseArr;
        //for loop for getting index
        var ObjName;// = "Default";
        var objDesc;// = "Default";
        var objdirec;// = "Default";

        for (var index = 0; index < pulledFromStorage.length; index++) {

            var check = pulledFromStorage[index];
            console.log("entered loop");
            //if block to get the location
            if (check["attrLocation"] == "Johnson and Hardwick") {
                //attempts to mount the array in a list element through the component
                //m.render('li.lists', createDomElements(JnHArray));
                ObjName = check["attrName"];
                console.log(ObjName);
                objDesc = check["attrDescrip"];
                console.log(objDesc);
                objdirec = check["attrDirections"];
                console.log(listItems);

                console.log(objdirec);
                //ObjName.toString();
                //objDesc.toString();
                //objdirec.toString();
                //m('JnHUL', newLI);
                //adds the index to the new array at the first position
                JnHArray.unshift(check);
                return listItems[index] = m('li.lists#' + check["attrName"], m('p', check["attrName"]), m('p', check["attrDirections"]), m('p', check["attrDescrip"]));
                

            }

            console.log(ObjName);
            console.log(objDesc);
            console.log(objdirec);

        }
        console.log(listItems);
        
    }
 
}


//this should be printing all the JnH objects
function userList(users) {
    return JnHArrComponent.JnHArrayComp.map(function (u) {

       return m("li", { key: u.id }, u.attrName, u.attrDirections, u.attrDescrip) // <button>John</button>
        // <button>Mary</button>
    })
}

//m.render(document.getElementById('JnHUL'), userList(JnHArray))

//this is a function that trys to create a dom element. this could maybe be used after selecting an array index
function createDomElements(nearbyAttractions) {
    return nearbyAttractions.map(function (a) {
        return m('li.lists', m('p', a.attrName), m('p', a.attrDirections), m('p', a.attrDescrip));
    })
}




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
        
        console.log("The divs are closed");
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
const closeBtn = m("button.Close", { onclick: CloseClickListener }, "X");
//this is the form button
const AddAttraction = m("button#Add", { onclick: addAttractionClickListener }, "Add Nearby Attraction");

//these are options for the form
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
var formDiv = m('div.formDisplay#JNHForm', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, attractionForm.view());










var displayJnH = "Hey this should be a box with text in it";
var displaySS = "Hey this should be a box with text in it";
//these add UL to the divs
var JnHList = m.render(m('ul.AttractionLists#JnHUL', "Nearby Attractions: "), userList(JnHArray));
var SERCList = m('ul.AttractionLists#SercUL', "Nearby Attractions: ");
var PaleyList = m('ul.AttractionLists#PaleyUL', "Nearby Attractions: ");
var StudentCenterList = m('ul.AttractionLists#SSUL', "Nearby Attractions: ");
var PresserList = m('ul.AttractionLists#PresserUL', "Nearby Attractions: ");

//this is the JNH button, should always be the first button
const JnHButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            SortLocalStorage(),
            m("button#JnH", {
                onclick: jnhClickListener /*{ console.log(vnode); displayThis = "This is J&H"; m('div.diplay#this', { style: { display: 'inline-block' } }); }*/

            }, "Button"),
            
            m('div.diplay#JnHbtn', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displayJnH, m(createListRefs), closeBtn, AddAttraction),
            m('div.formDisplay#JNHForm', { style: { background: 'white', display: 'none', padding: '1%' } }, attractionForm.view()),
            
            //m.render(document.getElementById('JnHUL'), createDomElements(JnHArray)),
            //document.getElementById('#this').display = 'none'
            
        ]
        
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
            m('div.diplay#StudentCenterbtn', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, StudentCenterList, closeBtn),

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
            m('div.diplay#SERCDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, SERCList, closeBtn),

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
            m('div.diplay#PalyDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, PaleyList, closeBtn),
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
            m('div.diplay#PresserDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, PresserList, closeBtn),
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
        return m(".bg", m(JnHButton), m(studentCenterButton), m(SERCButton), m(Paley), m(Presser));
    }
});

















