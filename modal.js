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
const closeModalBtn = document.querySelector(".close");
// THANKS CONST
const modalBtnSubmit= document.querySelectorAll(".btn-submit");
const modalbgThanks = document.querySelector(".bgroundthanks");


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


modalBtnSubmit.addEventListener("click", function(test) {
  test.preventDefault ();
  validate();
  });



function validate() {
  modalbgThanks.style.display = "block";
}