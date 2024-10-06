let slideIndex = 0;
const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.children.length;
const slideWidth = slides.children[0].clientWidth; // Assuming all slides have the same width

// Function to update indicators
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

// Function to move the slides
function showSlides() {
    slideIndex++;

    // Move to the next image
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

    // When reaching the last slide (clone), jump back to the first slide
    if (slideIndex === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = 'none'; // Remove transition
            slides.style.transform = `translateX(0)`; // Jump back to the first slide
            slideIndex = 0; // Reset index
            updateIndicators(); // Update indicators
        }, 500); // Match the transition duration
    } else {
        updateIndicators(); // Update indicators for the current slide
    }
}

// Slide every 3 seconds
setInterval(showSlides, 3000);

// Update the slider size on window resize
window.addEventListener('resize', () => {
    const updatedSlideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-slideIndex * updatedSlideWidth}px)`;
});

// Initialize indicators on load
updateIndicators();
