// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    this.reset();
});

// Adding fade-in effect to sections when they appear in the viewport
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling to the contact section
document.querySelector('.header-content .button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
