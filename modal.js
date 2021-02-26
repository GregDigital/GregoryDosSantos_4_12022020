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
// THANKS CONST
const modalBtnSubmit= document.querySelector(".btn-submit");
const modalbgThanks = document.querySelector(".bgroundthanks");
const closeBtnThanks = document.querySelector(".closeThanks");
const btnThanks = document.querySelector(".btnthanks")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeModalBtn.addEventListener("click", function(event) {
  event.preventDefault ();
  closeModal();
  });

  // close modal form
  function closeModal() {
    bground.style.display = "none";
    
  }

// launch Thanks

// close modal event
modalBtnSubmit.addEventListener("click", function(event) {
  event.preventDefault ();
  validate();
  });

function validate() {
  modalbgThanks.style.display = "block";
  modalbg.style.display = "none";
}

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