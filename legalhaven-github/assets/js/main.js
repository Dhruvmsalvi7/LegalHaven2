// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
      }
    });
  }, { threshold: 0.1 }).observe(el);
});

// Nav shadow on scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});
document.addEventListener('click', e => {
  if (!toggle.contains(e.target) && !links.contains(e.target)) {
    links.classList.remove('open');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - (nav.offsetHeight || 80),
      behavior: 'smooth'
    });
  });
});

// Contact form
const form   = document.getElementById('contactForm');
const noteEl = document.getElementById('formNote');
const btn    = form.querySelector('.submit-btn');

const validate = el => {
  const v = el.value.trim();
  if (el.required && !v) { el.classList.add('error'); return false; }
  if (el.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { el.classList.add('error'); return false; }
  el.classList.remove('error');
  return true;
};

form.querySelectorAll('input, textarea, select').forEach(el => {
  el.addEventListener('blur', () => validate(el));
  el.addEventListener('input', () => el.classList.remove('error'));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('input, textarea, select').forEach(el => {
    if (!validate(el)) valid = false;
  });
  if (!valid) {
    noteEl.textContent = 'Please fill in all required fields correctly.';
    noteEl.className = 'form-note error';
    return;
  }
  btn.disabled = true;
  btn.textContent = 'Sending…';
  // Replace setTimeout below with your real form endpoint (Formspree, EmailJS, etc.)
  setTimeout(() => {
    noteEl.textContent = "✓ Request received! We'll be in touch soon.";
    noteEl.className = 'form-note success';
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Submit Request';
  }, 1400);
});
