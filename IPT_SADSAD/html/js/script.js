// Wait for the DOM to load before adding functionality
document.addEventListener('DOMContentLoaded', function () {
    
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get the section ID
            const targetElement = document.getElementById(targetId); // Find the corresponding section
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for the sticky header
                behavior: 'smooth' // Smooth scrolling effect
            });
        });
    });

    // Mobile Menu Toggle for Navigation Links
    const menuToggleButton = document.getElementById('menu-toggle'); // Hamburger menu button
    const navList = document.getElementById('nav-list'); // Navigation list

    // Toggle the visibility of the navigation menu
    menuToggleButton.addEventListener('click', function () {
        navList.classList.toggle('active'); // Toggle the active class to show/hide the menu
    });

});

// Optional: Dynamic Blinker Animation for the Text
const blinker = document.querySelector('.blinker');
if (blinker) {
    setInterval(() => {
        blinker.style.visibility = blinker.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 1000);
}
