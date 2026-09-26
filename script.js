/* =========================================================
   QUOTE CONFIGURATION — to add a quote, copy one object below
   and replace the text. The chamber updates automatically.
   ========================================================= */
const quotes = [
  { quote: "The unexamined life is not worth living.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "We suffer more often in imagination than in reality.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Knowing others is wisdom; knowing yourself is enlightenment.", author: "Laozi", era: "Ancient China, Taoism" },
  { quote: "Fortune favors the bold.", author: "Virgil", era: "Ancient Rome, Poetry" },
  { quote: "Nothing endures but change.", author: "Heraclitus", era: "Ancient Greece, Philosophy" },
  { quote: "Well begun is half done.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "No man is free who is not master of himself.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "It is never too late to be what you might have been.", author: "George Eliot", era: "19th Century, Literature" },
  { quote: "The journey of a thousand miles begins with one step.", author: "Laozi", era: "Ancient China, Taoism" },
  { quote: "He who knows all the answers has not been asked all the questions.", author: "Confucius", era: "Ancient China, Philosophy" },
  { quote: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard", era: "19th Century, Philosophy" },
  { quote: "The mind is everything. What you think you become.", author: "Buddha", era: "Ancient India, Philosophy" },
  { quote: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "The greatest wealth is to live content with little.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch", era: "Ancient Greece, Philosophy" },
  { quote: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Courage is knowing what not to fear.", author: "Plato", era: "Classical Greece, Philosophy" },
     { quote: "The greatest wealth is to live content with little.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "We are what we repeatedly do.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Luck is what happens when preparation meets opportunity.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "The obstacle is the way.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "If you are pained by anything external, it is not this thing that disturbs you.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Man is condemned to be free.", author: "Jean-Paul Sartre", era: "20th Century, Existentialism" },
  { quote: "Hell is other people.", author: "Jean-Paul Sartre", era: "20th Century, Existentialism" },
  { quote: "He who has a why can bear almost any how.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "Become who you are.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "There is no great genius without some touch of madness.", author: "Seneca", era: "Ancient Rome, Philosophy" },
  { quote: "The only journey is the one within.", author: "Rainer Maria Rilke", era: "20th Century, Poetry" },
  { quote: "The wound is the place where the Light enters you.", author: "Rumi", era: "13th Century, Sufi Poetry" },
  { quote: "What you seek is seeking you.", author: "Rumi", era: "13th Century, Sufi Poetry" },
  { quote: "The future belongs to those who prepare for it today.", author: "Malcolm X", era: "20th Century, Activism" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", era: "20th Century, Science" },
  { quote: "Knowing is not enough; we must apply.", author: "Johann Wolfgang von Goethe", era: "18th–19th Century, Literature" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", era: "19th Century, Literature" },
  { quote: "We have two lives, and the second begins when we realize we have only one.", author: "Confucius", era: "Ancient China, Philosophy" },
  ];

let qi = 0;

const qText = document.getElementById('quoteText');
const qAuthor = document.getElementById('quoteAuthor');
const qEra = document.getElementById('quoteEra');
const qCount = document.getElementById('quoteCount');
const chamberQuote = document.querySelector('.chamber-quote');

const pad = n => String(n).padStart(2, '0');

function renderQuote() {
  if (!chamberQuote || !quotes.length) return;

  chamberQuote.classList.add('fading');

  setTimeout(() => {
    const q = quotes[qi];

    qText.textContent = `“${q.quote}”`;
    qAuthor.textContent = q.author;
    qEra.textContent = q.era;
    qCount.textContent = `${pad(qi + 1)} / ${pad(quotes.length)}`;

    chamberQuote.classList.remove('fading');
  }, 180);
}

/* ---------- RANDOM QUOTE ---------- */
document.getElementById('randomQuote')?.addEventListener('click', () => {

  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && newIndex === qi);

  qi = newIndex;
  renderQuote();
});

/* ---------- INITIAL QUOTE ---------- */
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
