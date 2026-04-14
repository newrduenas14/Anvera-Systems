
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
setTimeout(() => {
  document.querySelectorAll('.page-hero .reveal').forEach(el => el.classList.add('visible'));
}, 100);
