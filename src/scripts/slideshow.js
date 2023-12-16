let slideIndex = 0;
let timer;
let startX = 0;
let endX = 0;

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
window.onload.addEventListener("load", () => {
  slides[0].style.display = "block";
  dots[0].className += " active";
  //  startSlideshow();
  showSlides();
});

// Adds touch functionality to the slideshow
// Add event listeners for touch events
/* window.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
});

window.addEventListener("touchmove", function (event) {
  endX = event.touches[0].clientX;
});

window.addEventListener("touchend", function () {
  var threshold = 100; //required min distance traveled to be considered swipe
  var direction = endX < startX ? "left" : "right";
  var dist = Math.abs(endX - startX);

  if (dist > threshold) {
    if (direction === "right") {
      slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    } else {
      slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    }
    showSlides();
  }
}); */
