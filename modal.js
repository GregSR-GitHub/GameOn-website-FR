function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// validity check event
textControl.forEach((btn) => btn.addEventListener("change", check));
checkboxControl.addEventListener("input", check);
locationControl.forEach((btn) => btn.addEventListener("input", checkLocation));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// change error-data visibility
function DataErrorVisible(dataTarget, dataState){
  dataTarget.parentElement.setAttribute('data-error-visible', dataState);
}

// validity input check
function check(e){
  let resultChek = e.target.reportValidity();
  DataErrorVisible(e.target, !resultChek);
  console.log("Input valid ? "+ resultChek);
}

// validity location checkbox check
function checkLocation(){
  let locationIsChecked = false;
  locationControl.forEach(e => { if(e.checked){ locationIsChecked = true; } });
  DataErrorVisible(locationControl[0], !locationIsChecked);
  return locationIsChecked;
}

// validate form
function validate() {
  console.log("Testing all inputs:");
  event.preventDefault();

  // verify if all texts inputs are valid
  let invalidInput = 0;
  textControl.forEach(e => {
    if((e.value=='')||(e.reportValidity()!=true)){
      invalidInput ++;
      DataErrorVisible(e, true);
    }
  });

  // verify all 'location' checkbox
  let validLocation = checkLocation();
  if(validLocation!=true){
    invalidInput ++;
  }

  console.log(invalidInput + " invalid(s) input(s)");

  //change modal if the form is valid
  if(invalidInput==0){
    modalcontent.style.display = "none";
    modalvalid.style.display = "block"; 
    console.log("Everyting is valid !");
  }else{
    console.log("Everyting isn't valid !");
  }

}

