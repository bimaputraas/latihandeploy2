// TASK 1 START

// Assign length "data" class to new object
lenClassData = document.getElementsByClassName("data").length

// iterasi class data dan push ke array arr_textgray
let arr_textgray = []
for (let i = 0; i < lenClassData; i++) {
    arr_textgray.push(document.getElementsByClassName("data")[i].getElementsByClassName("text-gray")[0])
}

// Assignment all information data from box-profile id to new document object

let namaData = document.getElementById("box-profile").getElementsByClassName("description")[0].getElementsByTagName("h1")[0]
let roleData = document.getElementById("box-profile").getElementsByClassName("description")[0].getElementsByTagName("p")[0]
let availabilityData = arr_textgray[0]
let usiaData = arr_textgray[1]
let lokasiData = arr_textgray[2]
let experienceData = arr_textgray[3]
let emailData = arr_textgray[4]


// Assignment all tag input from input-form id to new document object

let namaInput = document.getElementById("input-form").getElementsByTagName("input")[0]
let roleInput = document.getElementById("input-form").getElementsByTagName("input")[1]
let availabilityInput = document.getElementById("input-form").getElementsByTagName("input")[2]
let usiaInput = document.getElementById("input-form").getElementsByTagName("input")[3]
let lokasiInput = document.getElementById("input-form").getElementsByTagName("input")[4]
let experienceInput = document.getElementById("input-form").getElementsByTagName("input")[5]
let emailInput = document.getElementById("input-form").getElementsByTagName("input")[6]


// Assignment all information data to each value input

namaInput.value = namaData.innerHTML
roleInput.value = roleData.innerHTML
availabilityInput.value = availabilityData.innerHTML
usiaInput.value = usiaData.innerHTML
lokasiInput.value = lokasiData.innerHTML
experienceInput.value = (experienceData.innerHTML)
emailInput.value = emailData.innerHTML


// TASK 1 END

// ---------------------------------------------------------------------------------------------

// TASK 2 START


// assignment id input-form to new variable object document
let box_profile = document.getElementById("input-form")
// setting display to none
box_profile.style.display = "none"

// assignment tag a [0] from id box-profile to new variable object document
let button_edit = document.getElementById("box-profile").getElementsByTagName("a")[0]
// add new attribut onclick with function
button_edit.setAttribute("onclick","showform()")


// declaration function for display and href
function showform() {
    if (box_profile.style.display === "none") {
        box_profile.style.display = "";
        button_edit.setAttribute("href","#input-form")
        
    }
    else {
        box_profile.style.display = "none"
    }
}


// assignment tag input [7] from id input-form to new variable object document
let buttonInput = document.getElementById("input-form").getElementsByTagName("input")[7]
// add new attribut onclick event
buttonInput.setAttribute("onclick","submit_form(event)")

// declaration function for task 2
function submit_form(event) {

    // using method preventDefault
    event.preventDefault()

    // assignment all data profile with new values inpu from user
    namaData.innerHTML = namaInput.value;
    roleData.innerHTML = roleInput.value;
    availabilityData.innerHTML = availabilityInput.value;
    usiaData.innerHTML = usiaInput.value;
    lokasiData.innerHTML = lokasiInput.value;
    experienceData.innerHTML = experienceInput.value;
    emailData.innerHTML = emailInput.value;
    
    // setting display when do event
    box_profile.style.display = "none"

}

// TASK 2 END