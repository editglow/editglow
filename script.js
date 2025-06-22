// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Smooth scroll for navigation links
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

// Add hover-lift class to cards
document.querySelectorAll('.p-6.bg-gray-50').forEach(card => {
    card.classList.add('hover-lift');
});

// Mobile menu toggle (if needed)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'md:hidden text-gray-600 hover:text-indigo-600';
mobileMenuButton.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
`;

const nav = document.querySelector('nav .container');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4';
mobileMenu.innerHTML = `
    <div class="flex flex-col space-y-4 px-4">
        <a href="#features" class="hover:text-indigo-600 transition-colors">Features</a>
        <a href="#benefits" class="hover:text-indigo-600 transition-colors">Benefits</a>
        <a href="#pricing" class="hover:text-indigo-600 transition-colors">Pricing</a>
    </div>
`;

nav.appendChild(mobileMenuButton);
nav.appendChild(mobileMenu);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Add animation to pricing card
const pricingCard = document.querySelector('#pricing .max-w-md');
if (pricingCard) {
    pricingCard.classList.add('hover-lift');
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 