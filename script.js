/**
 * Genet Tsegay Portfolio - Main Script
 * Handles navigation logic and accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle Mobile Menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            
            // Hamburger Animation
            const bars = mobileMenu.querySelectorAll('.bar');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close menu when a link is clicked (on mobile)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('is-active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Highlight active page
    const currentPath = window.location.pathname;
    const pageName = currentPath.split("/").pop() || 'index.html';
    
    navItems.forEach(link => {
        if (link.getAttribute('href') === pageName) {
            link.classList.add('active');
        }
    });

    // Form Submission Message - Local Only
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop actual form submission
            
            const successMsg = document.getElementById("successMsg");
            if (successMsg) {
                successMsg.style.display = "block";
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                contactForm.reset(); // Clear the form
            }
        });
    }

    // Scroll opacity for navbar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-soft)';
        }
    });
});
