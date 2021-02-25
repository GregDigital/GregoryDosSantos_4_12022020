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
const modalBtnSubmit= document.querySelectorAll(".btn-thanks");
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


// launch modal Thanks

modalBtnSubmit.forEach(function (btn) {
    return btn.addEventListener("click", validate);
  });

function validate() {
  modalbgThanks.style.display = "block";
}
