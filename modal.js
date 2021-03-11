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

const error = document.querySelector(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const cityElt = document.querySelectorAll("input[type=radio]");
const acceptCondition = document.getElementById("checkbox1");

const modalBtnSubmit= document.querySelector(".btn-submit");

// REGEX ======================================================================================
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



// CONFIRMATION VALIDATION  =======================================================


let firstElt;
let lastElt;
let mailElt;
let BirthdayElt;
let quantElt;
let villeElt;
let acceptElt;


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
    alert("Veuillez remplir le champ prenom ");
    return false;
  }
    else {firstElt = true};

  if (
    !lastName.value.match(/(.*[a-z]){2}/i) ||
    lastName.value == " " ||
    lastName.value == null ||
    lastName.value.length < 2
  ) {
    alert("Veuillez remplir le champ Nom");
    return false;
  }
  else {lastElt = true};
  

  if (!emailFormat.test(eMail.value)) {
    alert("Veuillez remplir une adresse mail valide");
    return false;
  }
  else {mailElt = true};

  if (
    !birthDate.value.match(
      /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    alert("Veuillez remplir votre date de naissance");
    return false;
  }
  else {BirthdayElt = true};

  if (!quantityElt.value.match(/^[0-9]+$/)) {
    alert("Saisir un chiffre");
    return false;
  }
  else {quantElt = true};

  let cityCheck = false;
  for (let city of cityElt) {
    if (city.checked == true) {
      cityCheck = true;
    }
  }
  if (!cityCheck) {
    alert("Merci de sélectionner une ville");
    return false;
  }
  else {villeElt = true};

  if (!acceptCondition.checked) {
    alert("Merci de lire et accepter les conditions");
    return false;
  }
  else {acceptElt = true};


  if (firstElt == true && lastElt == true && mailElt  == true && BirthdayElt == true && quantElt == true && villeElt == true && acceptElt == true) {
  modalbg.style.display = "none"
    modalbgThanks.style.display = "block";
  }


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

