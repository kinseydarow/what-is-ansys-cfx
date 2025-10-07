// ===================================
// Mobile Navigation Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(61, 111, 244, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(61, 111, 244, 0.1)';
        }
    }
});

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .content-card, .mv-card, .value-card, ' +
        '.stat-card, .info-card, .install-card, .resource-card, ' +
        '.step-card, .faq-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ===================================
// Active Navigation Link Highlight
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentLocation)) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Form Validation (if needed in future)
// ===================================
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4444';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// ===================================
// Loading Animation (optional)
// ===================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 10);
});

// ===================================
// Copy to Clipboard for Code Blocks
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        block.style.position = 'relative';
        block.style.cursor = 'pointer';
        
        block.addEventListener('click', function() {
            const code = this.querySelector('code');
            if (code) {
                const text = code.textContent;
                
                // Copy to clipboard
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        // Show feedback
                        const feedback = document.createElement('div');
                        feedback.textContent = 'Copied!';
                        feedback.style.cssText = `
                            position: absolute;
                            top: 8px;
                            right: 8px;
                            background: #00ff88;
                            color: #1a1a1a;
                            padding: 4px 12px;
                            border-radius: 4px;
                            font-size: 12px;
                            font-weight: 600;
                            animation: fadeOut 2s ease forwards;
                        `;
                        
                        this.appendChild(feedback);
                        
                        setTimeout(() => {
                            if (feedback.parentNode) {
                                feedback.parentNode.removeChild(feedback);
                            }
                        }, 2000);
                    });
                }
            }
        });
        
        // Add hover effect
        block.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 255, 136, 0.2)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Add CSS animation for the copy feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===================================
// Parallax Effect for Hero Section (optional)
// ===================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-visual');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===================================
// Back to Top Button (optional enhancement)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #3D6FF4 0%, #5B8DF6 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 16px rgba(61, 111, 244, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 24px rgba(61, 111, 244, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(61, 111, 244, 0.3)';
    });
});

// ===================================
// Console Message (optional)
// ===================================
console.log('%c FluentBit Website ', 'background: linear-gradient(135deg, #3D6FF4 0%, #5B8DF6 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Modern Data Processing & Log Forwarding ', 'color: #3D6FF4; font-size: 14px; padding: 5px;');
