// Function to "hide" navbar when scrolling down

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-hide").style.top = "0";
  }
  else {
    document.getElementById("navbar-hide").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}