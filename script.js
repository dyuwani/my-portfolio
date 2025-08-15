//   carousel //
let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector(".carousel-slide");
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  slideIndex += direction;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
