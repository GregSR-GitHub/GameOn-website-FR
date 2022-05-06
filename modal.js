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

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));
// validity check event
textControl.forEach((btn) => btn.addEventListener("input", check));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate

function validate() {
  console.log("Je test !");
  event.preventDefault();

  // Verify if all inputs are valid
  let invalidInput = 0;
  textControl.forEach(e => {
    if((e.value!='')&&(e.reportValidity()==true)){
      console.log("Valid");
    }else{
      invalidInput ++;
      console.log("Invalid");
    }
  });

  console.log(invalidInput + " invalid(s) input(s)");
    
  if(invalidInput==0){
/*    modalcontent.style.display = "none";
    modalvalid.style.display = "block"; */
    console.log("Everyting is valid !");
  }else{
    console.log("Everyting isnt valid !");
  }

}

// validity input check
function check(e){
  let resultChek = e.target.reportValidity();
  if(resultChek){
    e.target.parentElement.setAttribute('data-error-visible', false);
    console.log("Valide:"+ resultChek);
  }else{
    e.target.parentElement.setAttribute('data-error-visible', true);
    console.log("Inalide"+ resultChek);
  }
}

