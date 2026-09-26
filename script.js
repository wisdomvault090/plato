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
   { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "An honest man is always a child.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "Courage is knowing what not to fear.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "Wise men speak because they have something to say.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "Ignorance, the root and stem of all evil.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "The beginning is the most important part of the work.", author: "Plato", era: "Classical Greece, Philosophy" },
  { quote: "Quality is not an act, it is a habit.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "The whole is greater than the sum of its parts.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle", era: "Classical Greece, Philosophy" },

  { quote: "No great mind has ever existed without a touch of madness.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "Pleasure in the job puts perfection in the work.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "Patience is bitter, but its fruit is sweet.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "It is well to be up before daybreak, for such habits contribute to health.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "The energy of the mind is the essence of life.", author: "Aristotle", era: "Classical Greece, Philosophy" },
  { quote: "We are what we repeatedly do.", author: "Aristotle", era: "Classical Greece, Philosophy" },

  { quote: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "The happiness of your life depends on the quality of your thoughts.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "You have power over your mind — not outside events.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "When you arise in the morning, think of what a privilege it is to be alive.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Do every act of your life as though it were the last act of your life.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Confine yourself to the present.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "The soul becomes dyed with the colour of its thoughts.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Very little is needed to make a happy life.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },
  { quote: "Loss is nothing else but change, and change is Nature's delight.", author: "Marcus Aurelius", era: "Ancient Rome, Stoicism" },

  { quote: "Difficulties show men what they are.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "We have two ears and one mouth so that we can listen twice as much as we speak.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "Freedom is the only worthy goal in life.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "The key is to keep company only with people who uplift you.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "No man is free who is not master of himself.", author: "Epictetus", era: "Ancient Greece, Stoicism" },
  { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus", era: "Ancient Greece, Stoicism" },

  { quote: "Luck is what happens when preparation meets opportunity.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Difficulties strengthen the mind, as labour does the body.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "While we wait for life, life passes.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "A gem cannot be polished without friction.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Time discovers truth.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "We suffer more often in imagination than in reality.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "Associate with people who are likely to improve you.", author: "Seneca", era: "Ancient Rome, Stoicism" },
  { quote: "As is a tale, so is life: not how long it is, but how good it is.", author: "Seneca", era: "Ancient Rome, Stoicism" },

  { quote: "He who fears he will suffer, already suffers because he fears.", author: "Michel de Montaigne", era: "16th Century, Philosophy" },
  { quote: "My life has been filled with terrible misfortune; most of which never happened.", author: "Michel de Montaigne", era: "16th Century, Philosophy" },
  { quote: "The greatest thing in the world is to know how to belong to oneself.", author: "Michel de Montaigne", era: "16th Century, Philosophy" },
  { quote: "There is no conversation more boring than the one where everybody agrees.", author: "Michel de Montaigne", era: "16th Century, Philosophy" },

  { quote: "One cannot step twice in the same river.", author: "Heraclitus", era: "Classical Greece, Philosophy" },
  { quote: "The sun is new each day.", author: "Heraclitus", era: "Classical Greece, Philosophy" },
  { quote: "Character is destiny.", author: "Heraclitus", era: "Classical Greece, Philosophy" },
  { quote: "Nothing is permanent except change.", author: "Heraclitus", era: "Classical Greece, Philosophy" },

  { quote: "Happiness is not an ideal of reason, but of imagination.", author: "Immanuel Kant", era: "18th Century, Philosophy" },
  { quote: "Dare to know.", author: "Immanuel Kant", era: "18th Century, Philosophy" },
  { quote: "Science is organized knowledge. Wisdom is organized life.", author: "Immanuel Kant", era: "18th Century, Philosophy" },
  { quote: "Out of the crooked timber of humanity, no straight thing was ever made.", author: "Immanuel Kant", era: "18th Century, Philosophy" },

  { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "There are no facts, only interpretations.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "Become who you are.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "Without music, life would be a mistake.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "The higher we soar, the smaller we appear to those who cannot fly.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "There are more idols in the world than there are realities.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },
  { quote: "To live is to suffer, to survive is to find some meaning in the suffering.", author: "Friedrich Nietzsche", era: "19th Century, Philosophy" },

  { quote: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard", era: "19th Century, Philosophy" },
  { quote: "People demand freedom of speech as a compensation for the freedom of thought which they seldom use.", author: "Søren Kierkegaard", era: "19th Century, Philosophy" },
  { quote: "The most common form of despair is not being who you are.", author: "Søren Kierkegaard", era: "19th Century, Philosophy" },
  { quote: "Purity of heart is to will one thing.", author: "Søren Kierkegaard", era: "19th Century, Philosophy" },

  { quote: "The deepest desire in human nature is the craving to be appreciated.", author: "William James", era: "19th–20th Century, Psychology" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", era: "19th–20th Century, Philosophy" },
  { quote: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James", era: "19th–20th Century, Psychology" },

  { quote: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe", era: "19th Century, Literature" },
  { quote: "There is no exquisite beauty without some strangeness in the proportion.", author: "Edgar Allan Poe", era: "19th Century, Literature" },
  { quote: "Believe nothing you hear, and only one half that you see.", author: "Edgar Allan Poe", era: "19th Century, Literature" },
  { quote: "Those who dream by day are cognizant of many things which escape those who dream only by night.", author: "Edgar Allan Poe", era: "19th Century, Literature" },

  { quote: "We accept the love we think we deserve.", author: "Stephen Chbosky", era: "20th–21st Century, Literature" },
  { quote: "Not all those who wander are lost.", author: "J. R. R. Tolkien", era: "20th Century, Literature" },
  { quote: "All we have to decide is what to do with the time that is given us.", author: "J. R. R. Tolkien", era: "20th Century, Literature" },
  { quote: "Courage will now be your best defence against the storm that is at hand.", author: "J. R. R. Tolkien", era: "20th Century, Literature" },

  { quote: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", era: "19th Century, Literature" },
  { quote: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde", era: "19th Century, Literature" },
  { quote: "Experience is simply the name we give our mistakes.", author: "Oscar Wilde", era: "19th Century, Literature" },
  { quote: "The truth is rarely pure and never simple.", author: "Oscar Wilde", era: "19th Century, Literature" },
  { quote: "To live is the rarest thing in the world.", author: "Oscar Wilde", era: "19th Century, Literature" },

  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", era: "20th Century, Public Life" },
  { quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", era: "20th Century, Public Life" },
  { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt", era: "20th Century, Public Life" },

  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", era: "20th–21st Century, Technology" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs", era: "20th–21st Century, Technology" },
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", era: "20th–21st Century, Technology" },

  { quote: "The important thing is not to stop questioning.", author: "Albert Einstein", era: "20th Century, Science" },
  { quote: "Imagination is more important than knowledge.", author: "Albert Einstein", era: "20th Century, Science" },
  { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein", era: "20th Century, Science" },
  { quote: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein", era: "20th Century, Science" },

  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins", era: "20th–21st Century, Self-Development" },
  { quote: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins", era: "20th–21st Century, Self-Development" },
  { quote: "It is not what we get. But who we become, what we contribute, that gives meaning to our lives.", author: "Tony Robbins", era: "20th–21st Century, Self-Development" },

  { quote: "The unexamined life is not worth living.", author: "Socrates", era: "Classical Greece, Philosophy" },
  { quote: "Man is the measure of all things.", author: "Protagoras", era: "Classical Greece, Philosophy" },
  { quote: "The beginning is half of every action.", author: "Ancient Greek Proverb", era: "Classical Greece, Wisdom" },
  { quote: "Know thyself.", author: "Delphic Maxim", era: "Ancient Greece, Wisdom" },
  { quote: "Nothing in excess.", author: "Delphic Maxim", era: "Ancient Greece, Wisdom" },
  { quote: "Fortune is blind.", author: "Cicero", era: "Ancient Rome, Philosophy" },
  { quote: "If you have a garden and a library, you have everything you need.", author: "Cicero", era: "Ancient Rome, Philosophy" },
  { quote: "Silence is one of the hardest arguments to refute.", author: "Josh Billings", era: "19th Century, Humor & Philosophy" },
  { quote: "The best way out is always through.", author: "Robert Frost", era: "20th Century, Poetry" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost", era: "20th Century, Poetry" },
  { quote: "The woods are lovely, dark and deep.", author: "Robert Frost", era: "20th Century, Poetry" } ];

let qi = 0;

const qText = document.getElementById('quoteText');
const qAuthor = document.getElementById('quoteAuthor');
const qEra = document.getElementById('quoteEra');
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
