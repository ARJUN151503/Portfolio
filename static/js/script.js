// Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Active navigation link
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });

            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.slide-up, .slide-right, .slide-left');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.animation = `fadeIn 0.8s ease forwards, 
                                     ${element.classList.contains('slide-up') ? 'slideUp' : 
                                       element.classList.contains('slide-right') ? 'slideRight' : 
                                       'slideLeft'} 
                                     0.8s ease forwards`;
        }
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const elementTop = bar.getBoundingClientRect().top;
        const elementBottom = bar.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            bar.style.width = `${progress}%`;
        }
    });
}

// Contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message (you can customize this)
    alert('Message sent successfully!');
    contactForm.reset();
});

// Event listeners
window.addEventListener('scroll', () => {
    setActiveLink();
    animateOnScroll();
    animateSkillBars();
});

// Initial animations
window.addEventListener('load', () => {
    setActiveLink();
    animateOnScroll();
    animateSkillBars();
});