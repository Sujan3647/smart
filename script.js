
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusDivs(n) {
  slideIndex += n - 1; // Adjust index for next slide
  showSlides();
}

function currentDiv(n) {
  slideIndex = n - 1; // Set specific slide
  showSlides();
}
