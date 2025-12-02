// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const glassPanes = document.querySelectorAll('.glass-pane');

    glassPanes.forEach((pane, index) => {
        const speed = 0.3 + (index * 0.1);
        pane.style.transform = `translateY(${scrolled * speed}px) rotate(${15 + (index * 5)}deg)`;
    });

    // Parallax for botanical decorations
    const botanicals = document.querySelectorAll('.botanical-decoration');
    botanicals.forEach((botanical, index) => {
        const speed = 0.2 + (index * 0.15);
        botanical.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate portfolio items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            portfolioObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    portfolioObserver.observe(item);
});

// Animate service cards on scroll
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    serviceObserver.observe(card);
});

// Navigation background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(74, 93, 79, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Proszę wypełnić wszystkie wymagane pola.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Proszę podać prawidłowy adres email.');
            return;
        }

        // Here you would typically send the form data to a server
        console.log('Form data:', data);

        // Show success message
        alert('Dziękuję za wiadomość! Odpiszę wkrótce.');
        contactForm.reset();
    });
}

// Add hover effect to portfolio items - cursor change
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });

    item.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});

// Lazy loading effect for images (when you add real images)
const imageFrames = document.querySelectorAll('.image-frame, .portfolio-image');
imageFrames.forEach(frame => {
    // Add a subtle hover effect
    frame.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    frame.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Botanical decorations random movement on mouse move
let mouseX = 0;
let mouseY = 0;
let botanicalTargetX = 0;
let botanicalTargetY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
});

function animateBotanicals() {
    botanicalTargetX += (mouseX - botanicalTargetX) * 0.02;
    botanicalTargetY += (mouseY - botanicalTargetY) * 0.02;

    const botanicals = document.querySelectorAll('.botanical-decoration');
    botanicals.forEach((botanical, index) => {
        const movement = 20 + (index * 10);
        const offsetX = (botanicalTargetX - 0.5) * movement;
        const offsetY = (botanicalTargetY - 0.5) * movement;

        botanical.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    requestAnimationFrame(animateBotanicals);
}

// Start the botanical animation
animateBotanicals();

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.color = 'var(--color-terracotta)';
        }
    });
});

// Add a subtle text reveal animation for about section
const aboutTexts = document.querySelectorAll('.about-text p');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
            aboutObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

aboutTexts.forEach(text => {
    text.style.opacity = '0';
    text.style.transform = 'translateY(20px)';
    text.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    aboutObserver.observe(text);
});

// Enhanced form input animations
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.querySelector('.form-label').style.color = 'var(--color-terracotta)';
        this.style.transform = 'scale(1.01)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.querySelector('.form-label').style.color = '';
        this.style.transform = 'scale(1)';
    });
});

// Add loading state to form submit button
const submitButton = document.querySelector('.contact-form button[type="submit"]');
if (submitButton) {
    submitButton.addEventListener('click', function() {
        if (contactForm.checkValidity()) {
            this.textContent = 'Wysyłanie...';
            this.disabled = true;

            // Re-enable after 2 seconds (in real app, after successful submission)
            setTimeout(() => {
                this.textContent = 'Wyślij wiadomość';
                this.disabled = false;
            }, 2000);
        }
    });
}

// Console message for developers
console.log('%cSzklane Wspomnienia', 'font-family: Cormorant Garamond, serif; font-size: 24px; color: #4A5D4F;');
console.log('%cFotografia oranżerii i botaniczna', 'font-family: Lato, sans-serif; font-size: 12px; color: #8A9B8F; letter-spacing: 2px;');
