// variabler
var addCourseEl = document.getElementById("addCourse");
var addCourseButtonEl = document.getElementById("addCourseButton");
var errormessageEl = document.getElementById("errorMessage");
var courseListEl = document.getElementById("courseList");
var i;

//händelsehanterare
addCourseEl.addEventListener("keyup", checkInput, false);
addCourseButtonEl.addEventListener("click", addCourse, false);
window.onload = init;

// start-funktion
function init() {
}

// inaktivera lägg till-knappen 
addCourseButtonEl.disabled = true;

// läser in kurslista
loadCourses();

//kontrollera input 
function checkInput() {

    var input = addCourseEl.value;

      // kontroll av korrekt längd 
      if (input.length > 5) {
        errormessageEl.innerHTML = "";
        addCourseButtonEl.disabled = false;
    } else {
        errormessageEl.innerHTML = "Måste innehålla minst fem tecken!";
        addCourseButtonEl.disabled = true;
    }
}