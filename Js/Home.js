// JavaScript for Mobile Toggle Menu 


const menuToggle = document.getElementById('menu-toggle');
const sideNavbar = document.getElementById('side-navbar');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    sideNavbar.classList.add('show');
    menuToggle.classList.add('menu-toggle-hidden'); // Hide menu toggle button
});

closeMenu.addEventListener('click', () => {
    sideNavbar.classList.remove('show');
    menuToggle.classList.remove('menu-toggle-hidden'); // Show menu toggle button
});

// Close the side navbar when clicking outside
document.addEventListener('click', (event) => {
    if (!sideNavbar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideNavbar.classList.remove('show');
        menuToggle.classList.remove('menu-toggle-hidden');
    }
});


// Contact Form

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closePopup = document.getElementById('close-popup');

    // Show popup on page load
    popup.style.display = 'flex';
    setTimeout(() => {
        popupContent.classList.add('show');
    }, 100); // Slight delay to ensure display is set before transition

    // Close popup
    closePopup.addEventListener('click', () => {
        popupContent.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 400); // Delay hiding overlay until transition completes
    });
});