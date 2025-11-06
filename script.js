// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Close mobile menu
        navMenu.classList.remove('active');
        
        // Smooth scroll to target (the observer will update active state)
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Smooth scroll for anchor links
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Add scroll animation
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

// Observe elements for animation and navigation active state
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navigation active state based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Function to update active nav link
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 150; // Offset for header height
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100; // 100px threshold

        // If near bottom of page, activate last section (contacto)
        if (isNearBottom && sections.length > 0) {
            const lastSection = sections[sections.length - 1];
            current = lastSection.getAttribute('id');
        } else {
            // Find which section is currently in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                // Check if scroll position is within this section
                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                    current = sectionId;
                }
            });
        }

        // Update active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });

        // If no section is active, activate the first one (inicio)
        const activeLink = document.querySelector('.nav-menu a.active');
        if (!activeLink && sections.length > 0) {
            const firstSection = sections[0];
            const firstSectionId = firstSection.getAttribute('id');
            const firstLink = document.querySelector(`.nav-menu a[href="#${firstSectionId}"]`);
            if (firstLink) {
                firstLink.classList.add('active');
            }
        }
    }

    // Update on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Set initial active state
    updateActiveNav();

    // Handle image loading errors and show placeholders
    const productImages = document.querySelectorAll('.product-img');
    productImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('product-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });

        // Check if image loads successfully
        img.addEventListener('load', function() {
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('product-placeholder')) {
                placeholder.style.display = 'none';
            }
        });
    });

    // Handle hero image loading
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        heroImg.addEventListener('error', function() {
            this.style.display = 'none';
            const decoration = this.nextElementSibling;
            if (decoration && decoration.classList.contains('hero-decoration')) {
                decoration.style.display = 'block';
            }
        });

        heroImg.addEventListener('load', function() {
            const decoration = this.nextElementSibling;
            if (decoration && decoration.classList.contains('hero-decoration')) {
                decoration.style.display = 'none';
            }
        });
    }
});

