// variabler
let addCourseEl = document.getElementById("newtodo");
let addCourseButtonEl = document.getElementById("newtodobutton");
let errormessageEl = document.getElementById("message");
let courseListEl = document.getElementById("todolist");
let deleteCourseButtonEl = document.getElementById("clearbutton");


//händelsehanterare
addCourseEl.addEventListener("keyup", checkInput, false);
addCourseButtonEl.addEventListener("click", addItem, false);
deleteCourseButtonEl.addEventListener("click", deleteItem, true);
window.onload = init;

// start-funktion 
function init() {

    // inaktivera lägg till-knappen 
    addCourseButtonEl.disabled = true;

    // läs in kurslista 
    loadStorage();
}

// rensar storage
function deleteItem() {
localStorage.clear();

courseListEl.innerHTML = "";

}
// kontrollera input 
function checkInput() {
    
    let input = addCourseEl.value;

    // kontroll av korrekt längd 
    if (input.length > 4) {
        errormessageEl.innerHTML = "";
        addCourseButtonEl.disabled = false;
    } else {
        errormessageEl.innerHTML = "Måste innehålla minst fem tecken!";
        addCourseButtonEl.disabled = true;
    }
}

// lägg till kurser
function addItem() {

    let input = addCourseEl.value;

    // skapar nytt element 
    let newEl = document.createElement("article");
    let newTextNode = document.createTextNode(input);
    newEl.appendChild(newTextNode);
    newEl.className = "course";

    // lägger till till listan
    courseListEl.appendChild(newEl);

    // lägg till en klickhanterare
    newEl.addEventListener("click", function (e) {
        e.target.remove();
    });

    // raderar input-fält
    addCourseEl.value = "";
    addCourseButtonEl.disabled = true;

    // anropar lagring
    storeItem()
}

// spara kurs
function storeItem() {
    console.log("lagrar kurslista...")

    // läs in kurslistan 
    let courses = document.getElementsByClassName("course");

    let tempArr = [];

    // loopar genom listan och lagrar till temporär array
    for (i = 0; i < courses.length; i++) {
        tempArr.push(courses[i].innerHTML);
    }
    //konverterar till JSON-sträng
    let jsonStr = JSON.stringify(tempArr);

    // lagra i web storage
    localStorage.setItem("courses", jsonStr);
}

// läs in kurs
function loadStorage() {
    console.log("läser in kurslista...")

    // läser in och konverterar JSON till array
    let courses = JSON.parse(localStorage.getItem("courses"));

    // loopa igenom arrayen
    for (i = 0; i < courses.length; i++) {

        // skapar nya element 
        let newEl = document.createElement("article");
        let newTextNode = document.createTextNode(courses[i]);
        newEl.appendChild(newTextNode);
        newEl.className = "course";

        // lägger till till listan
        courseListEl.appendChild(newEl);

        // lägg till en klickhanterare
        newEl.addEventListener("click", function (e) {
            e.target.remove();

            // lagra listan 
            storeItem();
        });

    }

}