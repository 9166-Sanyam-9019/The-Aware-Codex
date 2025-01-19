const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});

// Typing Effect
const typewriterText = "Welcome to My World";
let i = 0;
const typeSpeed = 100;

function typeEffect() {
    const typewriter = document.querySelector(".typewriter");
    if (i < typewriterText.length) {
        typewriter.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeEffect, typeSpeed);
    }
}

typeEffect();

// Parallax Effect
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#hero');
    const scrollY = window.scrollY * 0.5;
    hero.style.backgroundPosition = `center ${scrollY}px`;
});

// Smooth Scrolling
document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});