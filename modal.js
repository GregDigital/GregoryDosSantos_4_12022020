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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const bground = document.querySelector(".bground");
const closeModalBtn = document.querySelector(".close");

// LANCER MODAL ========================================================================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//FERMETURE MODAL =======================================================================

// close modal event
closeModalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeModal();
});

// close modal form
function closeModal() {
  bground.style.display = "none";
}

// CONST VALIDATION MANUEL FORMULAIRE =========================================================================

const form = document.getElementById("form");


const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const cityElt = document.querySelectorAll("input[type=radio]");
const acceptCondition = document.getElementById("checkbox1");
const modalBtnSubmit= document.querySelector(".btn-submit");

// REGEX ======================================================================================
const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthdayFormat = /^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/;

// ERROR =====================





// CONFIRMATION VALIDATION  =======================================================


let firstElt = false;
let lastElt = false;
let mailElt = false;
let BirthdayElt = false;
let quantElt = false;
let villeElt = false;
let acceptElt = false;


form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {

  if (
    !firstName.value.match(/(.*[a-z]){2}/i) ||
    firstName.value == " " ||
    firstName.value == null ||
    firstName.value.length < 2 
  ) {
    
    document.querySelector("#firstError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#firstError.formData").setAttribute("data-error", "Saisir deux caractères minimum *");
    
  }
    else {
   
      document.querySelector("#firstError.formData").setAttribute("data-error-visible", "false");
      firstElt = true;
    };
    
    
  if  (
    !lastName.value.match(/(.*[a-z]){2}/i) ||
    lastName.value == " " ||
    lastName.value == null ||
    lastName.value.length < 2
  ) {
    
    document.querySelector("#lastError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#lastError.formData").setAttribute("data-error", "Saisir deux caractères minimum *");
  
  }
  
  else {
    document.querySelector("#lastError.formData").setAttribute("data-error-visible", "false");
    lastElt = true;
  };
  

  if (!emailFormat.test(eMail.value)) {
    document.querySelector("#mailError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#mailError.formData").setAttribute("data-error", "Saisir une Adresse mail valide *");
   
  }
  else {
    document.querySelector("#mailError.formData").setAttribute("data-error-visible", "false");
    mailElt = true;
  }

  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    document.querySelector("#birthdayError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#birthdayError.formData").setAttribute("data-error", "Saisir une date de naissance *");
  }
  else {
    document.querySelector("#birthdayError.formData").setAttribute("data-error-visible", "false");
    BirthdayElt = true};

  if (!quantityElt.value.match(/^[0-9]+$/)) {
    document.querySelector("#numberError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#numberError.formData").setAttribute("data-error", "Saisir un chiffre *");
  }
  else {
    document.querySelector("#numberError.formData").setAttribute("data-error-visible", "false");
    quantElt = true};

  let cityCheck = false;
  for (let city of cityElt) {
    if (city.checked == true) {
      cityCheck = true;
    }
  }
  if (!cityCheck) {
    document.querySelector("#cityError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#cityError.formData").setAttribute("data-error", "Sélectionner une ville *");
  }
  else {
    document.querySelector("#cityError.formData").setAttribute("data-error-visible", "false");
    villeElt = true};

  if (!acceptCondition.checked) {
    document.querySelector("#acceptError.formData").setAttribute("data-error-visible", "true");
    document.querySelector("#acceptError.formData").setAttribute("data-error", "Merci de lire et d'accepter les conditions *");
   
  }
  else {
    document.querySelector("#acceptError.formData").setAttribute("data-error-visible", "false");
    acceptElt = true};

 
if (acceptElt === true && firstElt === true && lastElt === true && mailElt  === true && BirthdayElt === true && quantElt === true && villeElt === true ) {
  modalbg.style.display = "none";
    modalbgThanks.style.display = "block";
   // document.querySelector("#btnError.formDataBtn").setAttribute("data-error-visible", "false");
  }

//  else {
    
  //  document.querySelector("#btnError.formDataBtn").setAttribute("data-error-visible", "true");
 //   document.querySelector("#btnError.formDataBtn").setAttribute("data-error", "Merci de compléter les champs obligatoires *");
 //   };

}




// CONST Close Modal Thanks ===============================================================


const closeThanks = document.querySelector(".closeThanks")
const btnThanks = document.querySelector(".btnthanks")
const modalbgThanks = document.querySelector(".bgroundthanks");

// close modal thanks event ================================================================
btnThanks.addEventListener("click", function (event) {
  event.preventDefault();
  closeModalThanks();
});

closeThanks.addEventListener("click", function (event) {
  event.preventDefault();
  closeModalThanks();
});

// FUNCTION close modal thanks =========================================================

function closeModalThanks() {
 
  modalbgThanks.style.display = "none";
}

//=======================================================================================

// FUNCTION CORRECTION TITLE H1 WITH BR

let addBr = document.querySelector("h1.hero-headline")
let changeScreen = window.matchMedia('(max-width: 940px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
     addBr.innerHTML='Marathon <br> national <br>de jeux vidéos'
   
  } else {
    /* the viewport is more than than 600 pixels wide */
    addBr.innerHTML='Marathon national <br>de jeux vidéos'
    
  }
}

changeScreen.addEventListener('change', screenTest);

