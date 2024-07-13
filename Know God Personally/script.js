document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.main-content');

    function checkVisibility() {
        const rect = content.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            content.classList.add('visible');
            window.removeEventListener('scroll', checkVisibility); // Remove the event listener after the element is visible
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the element is already in view
});

// Select the element to be observed
const h1Element = document.querySelector('h1.fade-in');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the fade-in class when the element is in view
            entry.target.classList.add('fade-in');
            // After adding the class once, disconnect observer to avoid unnecessary callbacks
            observer.disconnect();
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed (0.5 means 50% of the element is visible)

// Start observing the target element
if (h1Element) {
    observer.observe(h1Element);
}
