// script.js - Portfolio Logic
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('header nav');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    if(nav.style.display === 'flex'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.right = '20px';
      nav.style.background = '#111';
      nav.style.padding = '20px';
      nav.style.borderRadius = '12px';
      nav.style.border = '1px solid rgba(255,255,255,0.1)';
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    if(window.innerWidth <= 900) nav.style.display = 'none';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .skill, .section-title').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = '0.6s ease';
  observer.observe(el);
});

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = "Message sent successfully! (Demo) - Connect with Formspree later";
  form.reset();
  setTimeout(() => formMsg.textContent = "", 4000);
});

console.log("Portfolio Loaded Successfully!");