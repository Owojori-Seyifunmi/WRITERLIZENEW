document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const totalSlides = slides.length;
  const counter = document.querySelector('.slide-counter');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
  }

  function updateCounter(index) {
      counter.textContent = `${String(index + 1).padStart(2, '0')}/${String(totalSlides).padStart(2, '0')}`;
  }

  document.querySelector('.prev').addEventListener('click', function() {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
      showSlide(currentSlide);
      updateCounter(currentSlide);
  });

  document.querySelector('.next').addEventListener('click', function() {
      currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
      showSlide(currentSlide);
      updateCounter(currentSlide);
  });

  // Show the first slide and update counter initially
  showSlide(currentSlide);
  updateCounter(currentSlide);
});