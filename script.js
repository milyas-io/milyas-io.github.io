/* =========================
   HERO TYPING ANIMATION
   (Only works if .typing exists in HTML)
========================= */

const texts = ["Frontend Developer", "ML Enthusiast","Computer Vision Enthusiast" ,"Problem Solver"];
let count = 0;
let index = 0;

function type() {
  const target = document.querySelector(".typing");

  // safety check (prevents errors if element doesn't exist)
  if (!target) return;

  if (count === texts.length) count = 0;

  const current = texts[count];
  const letter = current.slice(0, ++index);

  target.textContent = letter;

  if (letter.length === current.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause at full word
  } else {
    setTimeout(type, 120); // typing speed
  }
}

type();


/* =========================
   SMOOTH SCROLL NAVIGATION
   (Safe + fixed version)
========================= */

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


/* =========================
   DARK MODE TOGGLE (OPTIONAL)
   (Only works if button exists)
========================= */

const toggle = document.getElementById('theme-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    toggle.textContent =
      document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
  });
}