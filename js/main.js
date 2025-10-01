// DOM helpers
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if(navToggle && nav){
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    if(nav.classList.contains('open')){
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '8px';
    } else {
      nav.style.display = '';
    }
  });
}
// Intersection observer for reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Smooth scroll for internal links (enhanced)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile nav
      if(nav && nav.classList.contains('open')){
        nav.classList.remove('open'); nav.style.display = '';
      }
    }
  });
});
// Simple contact form handler (demo only)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // basic client-side validation already handled by required attributes
    alert('Thanks! This demo form does not send messages. Replace with your backend or use Formspree / EmailJS.');
    form.reset();
  });
}


