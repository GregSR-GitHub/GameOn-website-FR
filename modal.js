// DOM Elements
const modalbg = document.querySelector(".bground");
const modalcontent = document.querySelector(".modal-body");
const modalvalid = document.querySelector(".modal-body-valid");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const textControl = document.querySelectorAll(".text-control");
const locationControl = document.getElementsByName("location");
const checkboxControl = document.getElementById("checkbox1");
const emailControl = document.getElementById("email");
const dateControl = document.getElementById("birthdate");
const quantityControl = document.getElementById("quantity");


// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// validity check event
textControl.forEach((btn) => btn.addEventListener("change", check));
checkboxControl.addEventListener("input", check);
locationControl.forEach((btn) => btn.addEventListener("input", checkLocation));
dateControl.addEventListener("click", check);
quantityControl.addEventListener("click", check);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// responsive menu
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// change error-data visibility
function DataErrorVisible(dataTarget, dataState){
  dataTarget.parentElement.setAttribute('data-error-visible', dataState);
}

//validity email check
function checkMail(email){
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.match(mailformat)){
    return true;
  }else{
    return false;
  }
}

//validity birthdate check
function checkDate(date){
  const dateToday= new Date();
  const dateMaxRef = dateToday.getFullYear();
  const dateMinRef = dateMaxRef - 125;
  const dateInput = date.substr(0, 4);

  if((dateInput >= dateMinRef)&&(dateInput <= dateMaxRef)){
    return true;
  }else{
    return false;
  }
}

// validity test via addEventListener
function check(e){
  checkText(e.target);
}

// validity input check
function checkText(testedInput){
  let resultChek = testedInput.reportValidity();
  console.log("Test");
  if(testedInput.value==''){ 
    resultChek = false; 
  }
  if((testedInput.type=='email')&&(resultChek)){
    resultChek = checkMail(testedInput.value);
  }
  if((testedInput.type=='date')&&(resultChek)){
    resultChek = checkDate(testedInput.value);
  }
  DataErrorVisible(testedInput, !resultChek);
  console.log("Input("+ testedInput.id +") validity : "+ resultChek);
  return resultChek;
}

// validity location checkbox check
function checkLocation(){
  let locationIsChecked = false;
  locationControl.forEach(e => { if(e.checked){ locationIsChecked = true; } });
  DataErrorVisible(locationControl[0], !locationIsChecked);
  console.log("Input(location) validity : "+ locationIsChecked);
  return locationIsChecked;
}

// validate form
function validate() {
  console.log("Testing all inputs:");
  event.preventDefault();

  // verify if all texts inputs are valid
  let invalidInput = 0;
  textControl.forEach(e => {
    if(!checkText(e)){
      invalidInput ++;
    }
  });

  // verify all 'location' checkbox
  if(!checkLocation()){
    invalidInput ++;
  }

   // verify last checkbox
  if(!checkboxControl.checked){
    invalidInput ++;
    DataErrorVisible(checkboxControl, true);
  }

  console.log(invalidInput + " invalid(s) input(s)");

  //change modal if the form is valid
  if(invalidInput==0){
    modalvalid.style.height = modalcontent.offsetHeight + "px";
    modalcontent.style.display = "none";
    modalvalid.style.display = "flex"; 
    console.log("Everyting is valid !");
  }else{
    console.log("Everyting isn't valid !");
  }
}

