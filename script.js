// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

// Trigger hero reveals immediately
setTimeout(() => {
  document.querySelectorAll('.hero .reveal, .page-hero .reveal').forEach((el) => {
    el.classList.add('visible');
  });
}, 100);

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}
