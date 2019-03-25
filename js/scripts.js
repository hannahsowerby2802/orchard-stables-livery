const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);




var slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dotone");
  var dots = document.getElementsByClassName("dottwo");
  var dots = document.getElementsByClassName("dotthree");
  var dots = document.getElementsByClassName("dotfour");
  var dots = document.getElementsByClassName("dotfive");
  var dots = document.getElementsByClassName("dotsix");
  var dots = document.getElementsByClassName("dotseven");
  var dots = document.getElementsByClassName("doteight");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
