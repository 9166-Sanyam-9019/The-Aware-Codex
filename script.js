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

// Typing Effect
const typewriterText = "Welcome to My World";
let i = 0;
const typeSpeed = 100;

const typewriter = document.querySelector(".typewriter");

function typeEffect() {
    if (i < typewriterText.length) {
        typewriter.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeEffect, typeSpeed);
    }
}

typeEffect();

// Smooth Scrolling
document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});