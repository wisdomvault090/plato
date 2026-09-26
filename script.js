/* =========================================================
   QUOTE CONFIGURATION — to add a quote, copy one object below
   and replace the text. The chamber updates automatically.
   ========================================================= */
const quotes = [
  { quote: "The unexamined life is not worth living.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "We suffer more often in imagination than in reality.", author: "Seneca", era: "Rome, Stoicism" },
  { quote: "Knowing others is wisdom; knowing yourself is enlightenment.", author: "Laozi", era: "China, Taoism" },
  { quote: "What is done in love is done well.", author: "Vincent, after antiquity", era: "Renaissance echo" },
  { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "Fortune favors the bold.", author: "Virgil", era: "Rome, Poetry" },
  { quote: "Nothing endures but change.", author: "Heraclitus", era: "Ionia, Philosophy" },
  { quote: "Well begun is half done.", author: "Aristotle", era: "Classical Greece, Philosophy" }
];

let qi = 0;
const qText = document.getElementById('quoteText');
const qAuthor = document.getElementById('quoteAuthor');
const qEra = document.getElementById('quoteEra');
const qCount = document.getElementById('quoteCount');
const chamberQuote = document.querySelector('.chamber-quote');
const pad = n => String(n).padStart(2, '0');

function renderQuote(){
  if (!chamberQuote) return;
  chamberQuote.classList.add('fading');
  setTimeout(() => {
    const q = quotes[qi];
    qText.textContent = `\u201C${q.quote}\u201D`;
    qAuthor.textContent = q.author;
    qEra.textContent = q.era;
    qCount.textContent = `${pad(qi + 1)} / ${pad(quotes.length)}`;
    chamberQuote.classList.remove('fading');
  }, 300);
}

document.getElementById('nextQuote')?.addEventListener('click', () => {
  qi = (qi + 1) % quotes.length;
  renderQuote();
});
document.getElementById('prevQuote')?.addEventListener('click', () => {
  qi = (qi - 1 + quotes.length) % quotes.length;
  renderQuote();
});
renderQuote();

/* ---------- nav: glass background on scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- hero parallax (subtle, disabled for reduced motion) ---------- */
const heroParallax = document.getElementById('heroParallax');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (heroParallax && !prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.15;
    heroParallax.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}

/* ---------- scroll reveal for sections ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/* ---------- gallery lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
const lbImg = document.getElementById('lbImg');

function openLightbox(item){
  lbTitle.textContent = item.dataset.title || '';
  lbDesc.textContent = item.dataset.desc || '';
  const bg = item.style.getPropertyValue('--bg');
  if (bg) {
    lbImg.style.setProperty('--bg', bg);
    lbImg.style.backgroundImage = 'var(--bg)';
  }
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('click', () => openLightbox(item));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(item); }
  });
});
document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

/* ---------- loading screen safety net ---------- */
/* The loader also fades itself out via CSS animation, so the site
   never gets stuck even if this script fails to run. */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => { if (loader) loader.style.display = 'none'; }, 1800);
});
