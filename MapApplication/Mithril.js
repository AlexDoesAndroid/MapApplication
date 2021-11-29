class Attractions {
    constructor(location, attractName, genDirections, descrip, id) {
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

const JNHFeild = new Attractions('Johnson and Hardwick', 'Points of interest: Peabody Field', "Services: Student Dormitories", 'Where iron owls are made.');
attractionsArr.unshift(JNHFeild);
const JNHTest = new Attractions('Johnson and Hardwick', 'Test Object', "Around the corner", 'This is a test Object');
attractionsArr.unshift(JNHTest);
const HalalTruck1 = new Attractions('Student Center', 'Halal Trucks', 'Outside door 1 across the street', 'These three trucks are a place to get a cheap quick lunch');
attractionsArr.unshift(HalalTruck1);
const SexyGreenTruck = new Attractions('Student Center', 'Sexy green truck', 'Down W Montgomery Ave next to the student center', 'Richies on wheels but not called Richies');
attractionsArr.unshift(SexyGreenTruck);
const ChaChaTruck = new Attractions('Student Center', 'Cha Cha food truck', 'Down W Montgomery Ave next to the student center', 'Korean and Japanese');
attractionsArr.unshift(ChaChaTruck);
const BurgerTank = new Attractions('Presser Hall', 'Burger Tank', 'The Corner of Norris and 13th', 'Obviously sells burgers');
attractionsArr.unshift(BurgerTank);
const topBap = new Attractions('Presser Hall', 'Top Bap', "In front of patio on Norris", 'Great spot for simple Korean food');
attractionsArr.unshift(topBap);
const crepeTruck = new Attractions('Presser Hall', 'The Crepe Truck', 'Corner of 13th and Norris next to the Burger Tank', 'Sweet and savory crepes for sale');
attractionsArr.unshift(crepeTruck);
console.log(attractionsArr + "out of the loop");
//adds what useres input into local storage
sessionToLocalArr = function () {
    for (var i = 0; i < sessionStorage.length; i++) {
        var index = sessionStorage.key(i);
        var value = sessionStorage.getItem(index);
        var val = JSON.parse(value);
        attractionsArr.unshift(val);
        console.log("in the loop "+ attractionsArr);
    }
    localStorage.setItem('BuildingAttractions', JSON.stringify(attractionsArr));
}

var listelements = m("li.lists", 'a variable will go here');
var pulledFromStorage = [];

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

//this var can be refrenced in the dom elements
console.log(JnHArray);
var listItems = JnHArray.forEach(element => { element.attrName});
console.log(listItems);
//this is a components that handles the arrays

createListRefs = {
    view: function () {
        var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
        pulledFromStorage = parseArr;
        //for loop for getting index
        var ObjName;
        var objDesc;
        var objdirec;
        var listItem=[];
        var check = pulledFromStorage;
        var count = 0;
        for (var index = 0; index < pulledFromStorage.length; index++) {
            count++;
            
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
                //return listItems[index] = m('li.lists#' + check["attrName"], m('p', check["attrName"]), m('p', check["attrDirections"]), m('p', check["attrDescrip"]));
                listItem.unshift(m('ul.lists#' + check["attrName"], m('li', check["attrName"]), m('li', check["attrDirections"]), m('li', check["attrDescrip"])));

            }

            if (check["attrLocation"] == "Presser Hall") {
                //attempts to mount the array in a list element through the component

                ObjName = check["attrName"];
                console.log(ObjName);
                objDesc = check["attrDescrip"];
                console.log(objDesc);
                objdirec = check["attrDirections"];


                console.log(objdirec);

                JnHArray.unshift(check);

                listItem.unshift(m('ul.lists#' + check["attrName"], m('li', check["attrName"]), m('li', check["attrDirections"]), m('li', check["attrDescrip"])));

            }



        }

        console.log(listItems);
        return listItem
    }

}

//this should be printing all the JnH objects
function userList() {
    return JnHArrComponent.JnHArrayComp.map(function (u) {
       return m("li", { key: u.id }, u.attrName, u.attrDirections, u.attrDescrip) 
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
            m("option.options[value=Student Center]", "Student Center"),
            m("option.options[value=Paley Hall]", "Paley Hall"),
            m("option.options[value = Presser Hall]", "Presser Hall"),
        ]
    }
}
//create a component that will display a form
const attractionForm = {
    view: function () {
        return m("form#addForm", [
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
        sessionStorage.setItem(atrName, JSON.stringify(obj));
        addToLocalArray(obj);
        location.reload();
    }
}
//manipulates local storage
addToLocalArray = function (obj) {
    var arrTemp = []
    var parseArr = JSON.parse(localStorage.getItem('BuildingAttractions'));
    console.log("should have the array");
    localStorage.removeItem("BuildingAttractions");
    arrTemp = parseArr;
    console.log("array in local storage", arrTemp);
    arrTemp.unshift(obj);
    console.log(obj);
    localStorage.setItem("BuildingAttractions", JSON.stringify(arrTemp));
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
            //SortLocalStorage(),
            m("button#JnH", { onclick: jnhClickListener }, ""),
            m('div.diplay#JnHbtn', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displayJnH, m(createListRefs), m("button.Close#CloseJNH", { onclick: CloseClickListener }, "X"), m("button#AddJNH", { onclick: addAttractionClickListener }, "Add Nearby Attraction")),
            m('div.formDisplay#JNHForm', { style: { width: '60%', height: '55%', background: 'gray', border: 'solid 2pc #A22036', display: 'none', padding: '1%' } }, attractionForm.view()),
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
    }
}

//this is the Student center button
const studentCenterButton = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#StudentCenter", { onclick: ssClickListener }, ""),
            m('div.diplay#StudentCenterbtn', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, StudentCenterList, m("button.Close#StudentCenterClose", { onclick: CloseClickListener }, "X"), m("button#AddStudentCenterBtn", { onclick: addAttractionClickListener }, "Add Nearby Attraction")),
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
            m("button#SERC", {onclick: sercClickListener}, ""),
            m('div.diplay#SERCDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, SERCList, m("button.Close#SERCCloseBtn", { onclick: CloseClickListener }, "X")),
        ];
    }
};
var sercClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('SERCDiv').style.display = 'inline-block';
        displaySS = "This is The SERC";
    }
}

const Paley = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#PalyHall", { onclick: paleyClickListener }, ""),
            m('div.diplay#PalyDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, PaleyList, m("button.Close#PaleyCloseBtn", { onclick: CloseClickListener }, "X")),
        ];
    }
};
var paleyClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('PalyDiv').style.display = 'inline-block';
        displaySS = "This is The Paley";
    }
}

const Presser = {
    view(vnode) {
        return [
            //this creates a button and adds an event handler as well as creating a div and hiding it
            m("button#PresserHall", { onclick: presserClickListener }, ""),
            m('div.diplay#PresserDiv', { style: { background: '#A22036', display: 'none', padding: '1%', border: 'dashed 6pt gray' } }, displaySS, PresserList, m("button.Close#PresserCloseBtn", { onclick: CloseClickListener }, "X")),
        ];
    }
};

var presserClickListener = {
    handleEvent: function (e) {
        console.log(e)
        //this is javascript that unhides the div
        document.getElementById('PresserDiv').style.display = 'inline-block';
        displaySS = "This is The Presser Hall";
    }
}

//this puts the button on the correct div on load
m.mount(document.body, {
    view() {
        sessionToLocalArr();
        return m(".bg", m(JnHButton), m(studentCenterButton), m(SERCButton), m(Paley), m(Presser));
    }
});

















