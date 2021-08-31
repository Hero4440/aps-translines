window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var blank = document.getElementById("blank");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    blank.classList.add("blank");
  } else {
    navbar.classList.remove("sticky");
    blank.classList.remove("blank");
  }
}

// navbar
function navBar() {
  var x = document.getElementById("navbar");
  var logoDisplay = document.getElementById("nav-display");

  if (x.className === "topnav") {
    x.className += " responsive";
    logoDisplay.style.display = "none";
  } else {
    x.className = "topnav";
    logoDisplay.style.display = "block";
  }
}
