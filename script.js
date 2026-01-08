// Smooth scrolling for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 0;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Update active nav on page load
window.addEventListener('load', updateActiveNav);

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typing effect for career objective
const objectiveText = "Motivated B.Tech CSIT student with hands-on experience in web and app development, internships, and real-world projects. Skilled in frontend development, MERN stack basics, Power BI, and computer architecture concepts. Actively uses AI tools like ChatGPT, Gemini, and Perplexity to enhance productivity, problem-solving, and continuous learning. Seeking opportunities to grow as a software developer and contribute to impactful projects.";
const objectiveElement = document.querySelector('#about p');
let i = 0;

function typeObjective() {
    if (i < objectiveText.length) {
        objectiveElement.innerHTML += objectiveText.charAt(i);
        i++;
        setTimeout(typeObjective, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    objectiveElement.innerHTML = '';
    typeObjective();
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name && email && message) {
        // Form will submit to Formspree
        alert('Sending your message... You will be redirected after submission.');
        // No preventDefault, let it submit
    } else {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Intersection Observer for fade-in animations
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

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Particle effect for background (simple version)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00d4ff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Skill progress bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach((item, index) => {
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        
        const bar = document.createElement('div');
        bar.style.position = 'absolute';
        bar.style.bottom = '0';
        bar.style.left = '0';
        bar.style.height = '2px';
        bar.style.background = 'linear-gradient(90deg, #00d4ff, #00ff88)';
        bar.style.width = '0%';
        bar.style.transition = 'width 1s ease';
        item.appendChild(bar);
        
        setTimeout(() => {
            bar.style.width = '100%';
        }, index * 200);
    });
}

animateSkillBars();