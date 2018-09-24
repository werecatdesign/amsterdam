// Array of all the images of which the image of Amsterdam is composed
var imageArray = document.querySelectorAll("img");

// In the beginning, the image array is completely hidden because the picture still needs to be revealed
for (var i=0; i<9; i++) {
    imageArray[i].style.visibility = "hidden";
}

// Array of all the letters contained in the grey square containers
var letterArray = document.querySelectorAll(".lettercontainer h1");

// Array of all square containers
var containerArray = document.querySelectorAll(".lettercontainer");

// Array of all the forms including the "Letter X:" texts and the input forms
var formArray = document.querySelectorAll("form");
console.log(formArray[0]);

// The letters in the letter containers are invisible in the beginning because they only appear when the respective.letter is typed in correctly in the form.
for (var i = 0; i<9; i++) {
    letterArray[i].style.visibility = "hidden";
    }

// An array containing all the input fields
var inputArray = document.querySelectorAll("input");
console.log(inputArray[0]); // Only a test to see if creating the array worked

// Input values are defined. The script checks what the user has inserted. 
// could this have been realised in a less complicated way? How to retrieve all values?
var input1 = inputArray[0].value;
var input2 = inputArray[1].value;
var input3 = inputArray[2].value;
var input4 = inputArray[3].value;
var input5 = inputArray[4].value;
var input6 = inputArray[5].value;
var input7 = inputArray[6].value;
var input8 = inputArray[7].value;
var input9 = inputArray[8].value;

// Define what happens when the correct inputs are typed in the respective input fields

if (input1 == "A" || input1 =="a") {
    letterArray[0].style.visibility = "visible";
    containerArray[0].style.backgroundColor = "#00FF00";
    formArray[0].style.visibility = "hidden";
    imageArray[0].style.visibility = "visible";
}

if (input2 == "M" || input2 =="m") {
    letterArray[1].style.visibility = "visible";
    containerArray[1].style.backgroundColor = "#00FF00";
    formArray[1].style.visibility = "hidden";
    imageArray[3].style.visibility = "visible";
}

if (input3 == "S" || input3 =="s") {
    letterArray[2].style.visibility = "visible";
    containerArray[2].style.backgroundColor = "#00FF00";
    formArray[2].style.visibility = "hidden";
    imageArray[6].style.visibility = "visible";
}

if (input4 == "T" || input4 =="t") {
    letterArray[3].style.visibility = "visible";
    containerArray[3].style.backgroundColor = "#00FF00";
    formArray[3].style.visibility = "hidden";
    imageArray[1].style.visibility = "visible";
}

if (input5 == "E" || input5 =="e") {
    letterArray[4].style.visibility = "visible";
    containerArray[4].style.backgroundColor = "#00FF00";
    formArray[4].style.visibility = "hidden";
    imageArray[4].style.visibility = "visible";
}

if (input6 == "R" || input6 =="r") {
    letterArray[5].style.visibility = "visible";
    containerArray[5].style.backgroundColor = "#00FF00";
    formArray[5].style.visibility = "hidden";
    imageArray[7].style.visibility = "visible";
}

if (input7 == "D" || input7 =="d") {
    letterArray[6].style.visibility = "visible";
    containerArray[6].style.backgroundColor = "#00FF00";
    formArray[6].style.visibility = "hidden";
    imageArray[2].style.visibility = "visible";
}

if (input8 == "A" || input8 =="a") {
    letterArray[7].style.visibility = "visible";
    containerArray[7].style.backgroundColor = "#00FF00";
    formArray[7].style.visibility = "hidden";
    imageArray[5].style.visibility = "visible";
}
    
if (input9 == "M" || input9 =="m") {
    letterArray[8].style.visibility = "visible";
    containerArray[8].style.backgroundColor = "#00FF00";
    formArray[8].style.visibility = "hidden";
    imageArray[8].style.visibility = "visible";
}

// Refresh the page whenever a letter has been typed in via the keyboard.
// onkeyup is used in the HTML document to link to this function.
function refreshPage() {
    document.location.reload();
}