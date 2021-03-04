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
closeModalBtn.addEventListener("click", function(event) {
  event.preventDefault ();
  closeModal();
  });

  // close modal form
  function closeModal() {
    bground.style.display = "none";
    
  }


// CONST VALIDATION FORMULAIRE =========================================================================

const form = document.getElementById ('form');
const errorFOrm = document.querySelector("formData");
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityElt = document.getElementById ('quantity');
const cityElt = document.querySelectorAll("input[type=radio]");
const acceptCondition = document.getElementById ("checkbox1")

// REGEX ======================================================================================
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {

  if (!firstName.value.match(/(.*[a-z]){2}/i) || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2){
    errorFOrm.innerHTML = "Veuillez remplir le champ Prénom";
    return false;
  };
 
 if ((!lastName.value.match(/(.*[a-z]){2}/i) || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2)) {
  alert ("Veuillez remplir le champ Nom");
  return false;
 };

if (!emailFormat.test(eMail.value)) {
  alert("Veuillez remplir une adresse mail valide");
  return false;
};

if  (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
  alert("Veuillez remplir votre date de naissance");
  return false;
};

if (!quantityElt.value.match(/^[0-9]+$/)){
  alert("Saisir un chiffre");
  return false;
};


  if(!cityElt.value == 1) {
    alert("Merci de sélectionner une ville");
  return false;
  };



if (!acceptCondition.checked) {
  alert("Merci de lire et accepter les conditions");
  return false;
};



} 


/*
// THANKS CONST
const modalBtnSubmit= document.querySelector(".btn-submit");
const modalbgThanks = document.querySelector(".bgroundthanks");
const closeBtnThanks = document.querySelector(".closeThanks");
const btnThanks = document.querySelector(".btnthanks")
*/

// launch Thanks

// close modal event

/*
// close modal event
closeBtnThanks.addEventListener("click", function(event) {
  event.preventDefault ();
  closeModalThanks();
  });

  btnThanks.addEventListener("click", function(event) {
    event.preventDefault ();
    closeModalThanks();
    });

  // close modal form
  function closeModalThanks() {
    modalbgThanks.style.display = "none";
    
  }



    modalBtnSubmit.addEventListener("click", function(event) {
      event.preventDefault ();
      validate();
      });
    
    function validate() {
      modalbgThanks.style.display = "block";
      modalbg.style.display = "none";
    }
  */



