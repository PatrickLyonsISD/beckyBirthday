// Wait until the HTML document has fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // Get the "Begin" button element by its ID
  const beginBtn = document.getElementById("beginBtn");

  // Get the current year element so the footer auto-updates
  const yearEl = document.getElementById("year");

  // Set the footer year to the current year
  yearEl.textContent = new Date().getFullYear().toString();

  // When the user clicks "Begin", scroll smoothly to the first story block
  beginBtn.addEventListener("click", () => {
    // Find the first section with the class "block"
    const firstBlock = document.querySelector(".block");

    // If it exists, scroll to it
    if (firstBlock) {
      // Smooth scroll the page to the first block
      firstBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Select every element that should reveal on scroll
  const revealElements = document.querySelectorAll(".reveal");

  // Create an IntersectionObserver to detect when elements enter the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      // Loop through all observer entries
      entries.forEach((entry) => {
        // If the element is visible on screen
        if (entry.isIntersecting) {
          // Add the visible class to trigger the CSS animation
          entry.target.classList.add("is-visible");

          // Stop observing once revealed (saves performance)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Reveal slightly before it fully enters the viewport
      root: null,
      // Add margin so it triggers earlier for a smoother feel
      rootMargin: "0px 0px -10% 0px",
      // Percentage visible before triggering
      threshold: 0.15,
    }
  );

  // Start observing each reveal element
  revealElements.forEach((el) => observer.observe(el));

  // ===== SLIDESHOW LOGIC =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);

// ===== AUDIO BUTTON LOGIC =====
const playButton = document.getElementById("playAudio");
const audio = document.getElementById("birthdayAudio");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Message";
  } else {
    audio.pause();
    playButton.textContent = "Play Message";
  }
});
});