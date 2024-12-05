const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => { 
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});