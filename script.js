let currentSlide = 0;
const slideInterval = 3000; // Change slide every 3 seconds

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update active class for dots
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Function to automatically change slides
function autoChangeSlide() {
  showSlide(currentSlide + 1);
}

// Initial display
showSlide(currentSlide);

// Start automatic slide change
setInterval(autoChangeSlide, slideInterval);

// Scroll event for navbar color change
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = '#555'; // Change color when scrolling down
  } else {
    navbar.style.backgroundColor = '#ff0000'; // Change back to original color when at the top
  }
});