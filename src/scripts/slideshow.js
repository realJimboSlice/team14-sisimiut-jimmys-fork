let slideIndex = 0;
let timer;

// The function that starts the slideshow
function startSlideshow() {
  timer = setTimeout(showSlides, 5000);
}

// The function that shows the slides
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  startSlideshow();
}

// Pauses the slideshow when hovering over dots
const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("mouseover", () => {
    clearTimeout(timer);
  });
  dots[i].addEventListener("mouseout", () => {
    startSlideshow();
  });
}

// Pauses the slideshow when hovering over the image
const slides = document.getElementsByClassName("mySlides");
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("mouseover", () => {
    clearTimeout(timer);
  });
  slides[i].addEventListener("mouseout", () => {
    startSlideshow();
  });
  slides[i].addEventListener("click", () => {
    clearTimeout(timer);
  });
}

// Makes it possible to click on the dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    slideIndex = i;
    showSlides();
    clearTimeout(timer);
  });
}

// Displays the first image immediately on page load
window.addEventListener("load", () => {
  slides[0].style.display = "block";
  dots[0].className += " active";
  //  startSlideshow();
  showSlides();
});
