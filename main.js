// Mobile menu functionality
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Mobile dropdown functionality
function toggleDropdown(element) {
    if (window.innerWidth <= 768) {
        const navItem = element.parentElement;
        navItem.classList.toggle('dropdown-open');
    }
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            // Don't close for dropdown toggles
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('dropdown')) {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Close all dropdowns
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
            }
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close all dropdowns
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('dropdown-open');
        });
    }
});

// Carousel functionality
let slideIndex = 1;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

// Auto-advance slides
setInterval(nextSlide, 1500);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Students Corner page function
function showStudentsPage() {
    alert('Students\' Corner page would open here. This would typically link to a separate page with student achievements, projects, and activities.');
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.info-card, .principals-message, .students-corner').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});