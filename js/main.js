// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Set current year dynamically
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIconOpen) menuIconOpen.classList.add('hidden');
      if (menuIconClose) menuIconClose.classList.remove('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
    contactForm.reset();
  });
}

// Scroll-triggered header shadow
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = 'var(--shadow-elevated)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

// Galería: carrousell automático al pasar el mouse
const galleryFigures = document.querySelectorAll('.gallery-figure');

galleryFigures.forEach((figure) => {
  const slides = figure.querySelectorAll('.gallery-slide');
  const dots = figure.querySelectorAll('.gallery-dot');

  // Si el item solo tiene 1 imagen, no hace falta ningún carrousell
  if (slides.length < 2) return;

  const intervalTime = parseInt(figure.dataset.interval, 10) || 3000;
  let intervalId = null;

  const nextSlide = () => {
    let idx = [...slides].findIndex((s) => s.classList.contains('is-active'));
    if (idx === -1) idx = 0;

    slides[idx].classList.remove('is-active');
    if (dots[idx]) dots[idx].classList.remove('is-active');

    idx = (idx + 1) % slides.length;

    slides[idx].classList.add('is-active');
    if (dots[idx]) dots[idx].classList.add('is-active');
  };

  figure.addEventListener('mouseenter', () => {
    if (intervalId) return;
    intervalId = setInterval(nextSlide, intervalTime);
  });

  figure.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    intervalId = null;
  });
});