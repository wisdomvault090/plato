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
/* =========================================================
   LOVE CATEGORY
========================================================= */

const themeQuotes = {

love: [

{
quote:"Love is composed of a single soul inhabiting two bodies.",
author:"Aristotle"
},

{
quote:"Where there is love there is life.",
author:"Mahatma Gandhi"
},

{
quote:"The giving of love is an education in itself.",
author:"Eleanor Roosevelt"
},

{
quote:"To love and be loved is to feel the sun from both sides.",
author:"David Viscott"
},

{
quote:"The greatest happiness of life is the conviction that we are loved.",
author:"Victor Hugo"
},

{
quote:"Love does not dominate; it cultivates.",
author:"Johann Wolfgang von Goethe"
},

{
quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
author:"Lao Tzu"
},

{
quote:"Love is friendship that has caught fire.",
author:"Ann Landers"
},

{
quote:"Love recognizes no barriers.",
author:"Maya Angelou"
},

{
quote:"The best thing to hold onto in life is each other.",
author:"Audrey Hepburn"
},

{
quote:"A loving heart is the truest wisdom.",
author:"Charles Dickens"
},

{
quote:"Love is the only force capable of transforming an enemy into a friend.",
author:"Martin Luther King Jr."
},

{
quote:"Love all, trust a few, do wrong to none.",
author:"William Shakespeare"
},

{
quote:"The heart has its reasons which reason knows nothing of.",
author:"Blaise Pascal"
},

{
quote:"Love cures people, both the ones who give it and the ones who receive it.",
author:"Karl Menninger"
},

{
quote:"There is always some madness in love.",
author:"Friedrich Nietzsche"
},

{
quote:"At the touch of love everyone becomes a poet.",
author:"Plato"
},

{
quote:"Love seeks not itself to please.",
author:"William Blake"
},

{
quote:"We accept the love we think we deserve.",
author:"Stephen Chbosky"
},

{
quote:"The more one judges, the less one loves.",
author:"Honoré de Balzac"
}

],
discipline: [

{
quote:"You have power over your mind, not outside events.",
author:"Marcus Aurelius"
},

{
quote:"Waste no more time arguing about what a good man should be. Be one.",
author:"Marcus Aurelius"
},

{
quote:"If it is not right, do not do it; if it is not true, do not say it.",
author:"Marcus Aurelius"
},

{
quote:"No man is free who is not master of himself.",
author:"Epictetus"
},

{
quote:"First say to yourself what you would be; and then do what you have to do.",
author:"Epictetus"
},

{
quote:"We are what we repeatedly do. Excellence, then, is not an act but a habit.",
author:"Aristotle"
},

{
quote:"Quality is not an act, it is a habit.",
author:"Aristotle"
},

{
quote:"He who conquers himself is the mightiest warrior.",
author:"Confucius"
},

{
quote:"The more we value things outside our control, the less control we have.",
author:"Epictetus"
},

{
quote:"Luck is what happens when preparation meets opportunity.",
author:"Seneca"
},

{
quote:"Difficulties strengthen the mind, as labour does the body.",
author:"Seneca"
},

{
quote:"Begin at once to live, and count each separate day as a separate life.",
author:"Seneca"
},

{
quote:"It is not that we have a short time to live, but that we waste a lot of it.",
author:"Seneca"
},

{
quote:"Discipline is choosing between what you want now and what you want most.",
author:"Abraham Lincoln"
},

{
quote:"Rule your mind or it will rule you.",
author:"Horace"
},

{
quote:"Small disciplines repeated with consistency lead to great achievements.",
author:"John C. Maxwell"
},

{
quote:"Success is nothing more than a few simple disciplines practiced every day.",
author:"Jim Rohn"
},

{
quote:"The successful person has the habit of doing the things failures do not like to do.",
author:"Albert E. N. Gray"
},

{
quote:"What lies in our power to do, lies in our power not to do.",
author:"Aristotle"
},

{
quote:"Through discipline comes freedom.",
author:"Aristotle"
}

],
success: [

{
quote:"Try not to become a man of success, but rather try to become a man of value.",
author:"Albert Einstein"
},

{
quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
author:"Winston Churchill"
},

{
quote:"The future belongs to those who believe in the beauty of their dreams.",
author:"Eleanor Roosevelt"
},

{
quote:"The only way to do great work is to love what you do.",
author:"Steve Jobs"
},

{
quote:"Innovation distinguishes between a leader and a follower.",
author:"Steve Jobs"
},

{
quote:"Stay hungry, stay foolish.",
author:"Steve Jobs"
},

{
quote:"Success usually comes to those who are too busy to be looking for it.",
author:"Henry David Thoreau"
},

{
quote:"Opportunities don't happen. You create them.",
author:"Chris Grosser"
},

{
quote:"Success is the sum of small efforts repeated day in and day out.",
author:"Robert Collier"
},

{
quote:"Do not wait. The time will never be just right.",
author:"Napoleon Hill"
},

{
quote:"Action is the foundational key to all success.",
author:"Pablo Picasso"
},

{
quote:"The secret of getting ahead is getting started.",
author:"Mark Twain"
},

{
quote:"Success is walking from failure to failure with no loss of enthusiasm.",
author:"Winston Churchill"
},

{
quote:"A goal properly set is halfway reached.",
author:"Zig Ziglar"
},

{
quote:"What you do today can improve all your tomorrows.",
author:"Ralph Marston"
},

{
quote:"The harder I work, the luckier I get.",
author:"Samuel Goldwyn"
},

{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
quote:"The best revenge is massive success.",
author:"Frank Sinatra"
},

{
quote:"Great things are done by a series of small things brought together.",
author:"Vincent van Gogh"
},

{
quote:"Success is getting what you want. Happiness is wanting what you get.",
author:"Dale Carnegie"
}

],
courage: [

{
quote:"Courage is knowing what not to fear.",
author:"Plato"
},

{
quote:"Fortune favors the bold.",
author:"Virgil"
},

{
quote:"He who is brave is free.",
author:"Seneca"
},

{
quote:"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
author:"Eleanor Roosevelt"
},

{
quote:"Do one thing every day that scares you.",
author:"Eleanor Roosevelt"
},

{
quote:"It takes courage to grow up and become who you really are.",
author:"E. E. Cummings"
},

{
quote:"The brave man is not he who does not feel afraid, but he who conquers that fear.",
author:"Nelson Mandela"
},

{
quote:"Courage is resistance to fear, mastery of fear, not absence of fear.",
author:"Mark Twain"
},

{
quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
author:"Winston Churchill"
},

{
quote:"Fear is a reaction. Courage is a decision.",
author:"Winston Churchill"
},

{
quote:"He who has a why to live can bear almost any how.",
author:"Friedrich Nietzsche"
},

{
quote:"That which does not kill us makes us stronger.",
author:"Friedrich Nietzsche"
},

{
quote:"Courage starts with showing up and letting ourselves be seen.",
author:"Brené Brown"
},

{
quote:"Only those who risk going too far can possibly find out how far one can go.",
author:"T. S. Eliot"
},

{
quote:"A ship is safe in harbor, but that is not what ships are built for.",
author:"John A. Shedd"
},

{
quote:"The best way out is always through.",
author:"Robert Frost"
},

{
quote:"Difficulties show men what they are.",
author:"Epictetus"
},

{
quote:"The obstacle is the way.",
author:"Marcus Aurelius"
},

{
quote:"When you arise in the morning, think of what a privilege it is to be alive.",
author:"Marcus Aurelius"
},

{
quote:"Courage will now be your best defence against the storm that is at hand.",
author:"J. R. R. Tolkien"
}

],
purpose: [

{
quote:"He who has a why to live can bear almost any how.",
author:"Friedrich Nietzsche"
},

{
quote:"The mystery of human existence lies not in just staying alive, but in finding something to live for.",
author:"Fyodor Dostoevsky"
},

{
quote:"Become who you are.",
author:"Friedrich Nietzsche"
},

{
quote:"To live is to suffer, to survive is to find some meaning in the suffering.",
author:"Friedrich Nietzsche"
},

{
quote:"Life can only be understood backwards; but it must be lived forwards.",
author:"Søren Kierkegaard"
},

{
quote:"The most common form of despair is not being who you are.",
author:"Søren Kierkegaard"
},

{
quote:"Purity of heart is to will one thing.",
author:"Søren Kierkegaard"
},

{
quote:"Knowing yourself is the beginning of all wisdom.",
author:"Aristotle"
},

{
quote:"The unexamined life is not worth living.",
author:"Socrates"
},

{
quote:"What we achieve inwardly will change outer reality.",
author:"Plutarch"
},

{
quote:"The only journey is the one within.",
author:"Rainer Maria Rilke"
},

{
quote:"What you seek is seeking you.",
author:"Rumi"
},

{
quote:"The wound is the place where the Light enters you.",
author:"Rumi"
},

{
quote:"We have two lives, and the second begins when we realize we have only one.",
author:"Confucius"
},

{
quote:"Act as if what you do makes a difference. It does.",
author:"William James"
},

{
quote:"It is not what we get, but who we become, that gives meaning to our lives.",
author:"Tony Robbins"
},

{
quote:"All we have to decide is what to do with the time that is given us.",
author:"J. R. R. Tolkien"
},

{
quote:"Not all those who wander are lost.",
author:"J. R. R. Tolkien"
},

{
quote:"The energy of the mind is the essence of life.",
author:"Aristotle"
},

{
quote:"Know thyself.",
author:"Delphic Maxim"
}

],
solitude: [

{
quote:"I am a cage, in search of a bird.",
author:"Franz Kafka"
},

{
quote:"The quieter you become, the more you can hear.",
author:"Rumi"
},

{
quote:"Solitude is the place of purification.",
author:"Martin Buber"
},

{
quote:"The greatest thing in the world is to know how to belong to oneself.",
author:"Michel de Montaigne"
},

{
quote:"All men's miseries derive from not being able to sit in a quiet room alone.",
author:"Blaise Pascal"
},

{
quote:"Loneliness expresses the pain of being alone, and solitude expresses the glory of being alone.",
author:"Paul Tillich"
},

{
quote:"The only journey is the one within.",
author:"Rainer Maria Rilke"
},

{
quote:"Be alone, that is the secret of invention; be alone, that is when ideas are born.",
author:"Nikola Tesla"
},

{
quote:"I restore myself when I'm alone.",
author:"Marilyn Monroe"
},

{
quote:"The monotony and solitude of a quiet life stimulates the creative mind.",
author:"Albert Einstein"
},

{
quote:"Without great solitude no serious work is possible.",
author:"Pablo Picasso"
},

{
quote:"A man can be himself only so long as he is alone.",
author:"Arthur Schopenhauer"
},

{
quote:"Talent hits a target no one else can hit; genius hits a target no one else can see.",
author:"Arthur Schopenhauer"
},

{
quote:"Whoever delights in solitude is either a wild beast or a god.",
author:"Aristotle"
},

{
quote:"The soul that sees beauty may sometimes walk alone.",
author:"Johann Wolfgang von Goethe"
},

{
quote:"One can be instructed in society, one is inspired only in solitude.",
author:"Johann Wolfgang von Goethe"
},

{
quote:"The more powerful and original a mind, the more it will incline towards solitude.",
author:"Aldous Huxley"
},

{
quote:"I never found the companion that was so companionable as solitude.",
author:"Henry David Thoreau"
},

{
quote:"To go out with the setting sun on an empty beach is to truly embrace your solitude.",
author:"Jeanne Moreau"
},

{
quote:"In solitude the mind gains strength and learns to lean upon itself.",
author:"Laurence Sterne"
}

],
wisdom: [

{
quote:"The only true wisdom is in knowing you know nothing.",
author:"Socrates"
},

{
quote:"The unexamined life is not worth living.",
author:"Socrates"
},

{
quote:"Knowing yourself is the beginning of all wisdom.",
author:"Aristotle"
},

{
quote:"Wise men speak because they have something to say.",
author:"Plato"
},

{
quote:"Knowing others is wisdom; knowing yourself is enlightenment.",
author:"Lao Tzu"
},

{
quote:"He who knows all the answers has not been asked all the questions.",
author:"Confucius"
},

{
quote:"Science is organized knowledge. Wisdom is organized life.",
author:"Immanuel Kant"
},

{
quote:"The greatest wealth is to live content with little.",
author:"Plato"
},

{
quote:"The soul becomes dyed with the color of its thoughts.",
author:"Marcus Aurelius"
},

{
quote:"Very little is needed to make a happy life.",
author:"Marcus Aurelius"
},

{
quote:"What we achieve inwardly will change outer reality.",
author:"Plutarch"
},

{
quote:"Time discovers truth.",
author:"Seneca"
},

{
quote:"Associate with people who are likely to improve you.",
author:"Seneca"
},

{
quote:"We have two ears and one mouth so that we can listen twice as much as we speak.",
author:"Epictetus"
},

{
quote:"Wealth consists not in having great possessions, but in having few wants.",
author:"Epictetus"
},

{
quote:"Character is destiny.",
author:"Heraclitus"
},

{
quote:"Nothing is permanent except change.",
author:"Heraclitus"
},

{
quote:"The important thing is not to stop questioning.",
author:"Albert Einstein"
},

{
quote:"Imagination is more important than knowledge.",
author:"Albert Einstein"
},

{
quote:"Know thyself.",
author:"Delphic Maxim"
}

],
truth: [

{
quote:"The only true wisdom is in knowing you know nothing.",
author:"Socrates"
},

{
quote:"An honest man is always a child.",
author:"Socrates"
},

{
quote:"If it is not right, do not do it; if it is not true, do not say it.",
author:"Marcus Aurelius"
},

{
quote:"Time discovers truth.",
author:"Seneca"
},

{
quote:"Truth is the beginning of every good to the gods, and of every good to man.",
author:"Plato"
},

{
quote:"The truth is rarely pure and never simple.",
author:"Oscar Wilde"
},

{
quote:"Three things cannot be long hidden: the sun, the moon, and the truth.",
author:"Buddha"
},

{
quote:"Truth never damages a cause that is just.",
author:"Mahatma Gandhi"
},

{
quote:"Rather than love, than money, than fame, give me truth.",
author:"Henry David Thoreau"
},

{
quote:"The truth will set you free, but first it will make you miserable.",
author:"James A. Garfield"
},

{
quote:"Dare to know.",
author:"Immanuel Kant"
},

{
quote:"There are no facts, only interpretations.",
author:"Friedrich Nietzsche"
},

{
quote:"To be conscious is to be in search of truth.",
author:"Søren Kierkegaard"
},

{
quote:"Silence is one of the hardest arguments to refute.",
author:"Josh Billings"
},

{
quote:"Knowing yourself is the beginning of all wisdom.",
author:"Aristotle"
},

{
quote:"Know thyself.",
author:"Delphic Maxim"
},

{
quote:"The important thing is not to stop questioning.",
author:"Albert Einstein"
},

{
quote:"Believe nothing you hear, and only one half that you see.",
author:"Edgar Allan Poe"
},

{
quote:"Character is destiny.",
author:"Heraclitus"
},

{
quote:"Truth is powerful and it prevails.",
author:"Sojourner Truth"
}

]

};

/* =========================================================
   THEME SYSTEM
========================================================= */

const themeBtns = document.querySelectorAll('.theme-btn');
const themeQuote = document.getElementById('themeQuote');
const themeAuthor = document.getElementById('themeAuthor');

themeBtns.forEach(btn => {

btn.addEventListener('click', () => {

themeBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');

const category = btn.dataset.theme;

if(!themeQuotes[category]) return;

const random =
themeQuotes[category][
Math.floor(
Math.random() *
themeQuotes[category].length
)
];

themeQuote.style.opacity = 0;
themeAuthor.style.opacity = 0;

setTimeout(() => {

themeQuote.textContent =
`"${random.quote}"`;

themeAuthor.textContent =
random.author;

themeQuote.style.opacity = 1;
themeAuthor.style.opacity = 1;

},200);

});

});
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
/* ---------- seven deadly sins ---------- */

const sinOverlay = document.getElementById('sinOverlay');
const sinClose = document.getElementById('sinClose');

const sinTitle = document.getElementById('sinChamberTitle');
const sinImage = document.getElementById('sinChamberImage');
const sinLatin = document.getElementById('sinChamberLatin');
const sinDescription = document.getElementById('sinChamberDescription');

const sinData = {

  pride: {
    title: 'Pride',
    latin: 'Superbia',
    image: '1407443630905626 (1).jpg',
    description: 'Pride blinds a man to his own flaws, until the mirror becomes his greatest enemy.'
  },

  greed: {
    title: 'Greed',
    latin: 'Avaritia',
    image: 'teymuribra_spirit_of_greed_next_to_a_pile_of_gold.jpg',
    description: 'Greed is the endless hunger for more—more wealth, more power, more possession. It convinces a person that no amount is ever enough, turning abundance into emptiness and desire into a prison.'
  },

  lust: {
    title: 'Lust',
    latin: 'Luxuria',
    image: 'lust kills.jpg',
    description: 'Lust is the uncontrolled desire for pleasure. When desire rules the mind, people begin to treat others as objects rather than souls, sacrificing wisdom, dignity, and purpose for momentary satisfaction.'
  },

  envy: {
    title: 'Envy',
    latin: 'Invidia',
    image: 'Obsession.jpg',
    description: 'Envy is the sorrow felt at another person’s success, beauty, or happiness. Instead of inspiring growth, it poisons the heart with comparison, making a person blind to their own blessings.'
  },

  gluttony: {
    title: 'Gluttony',
    latin: 'Gula',
    image: 'This relates to greed because the man in the….jpg',
    description: 'Gluttony is the excessive consumption of more than one truly needs. It is not merely hunger for food, but a refusal to practice restraint, allowing appetite to rule over reason.'
  },

  wrath: {
    title: 'Wrath',
    latin: 'Ira',
    image: 'Sin of Wrath.jpg',
    description: 'Wrath is uncontrolled anger that seeks destruction rather than justice. It blinds reason, fuels hatred, and turns a moment of rage into consequences that can last a lifetime.'
  },

  sloth: {
    title: 'Sloth',
    latin: 'Acedia',
    image: 'sin of sloth.jpg',
    description: 'Sloth is the surrender of one’s potential through laziness, apathy, and neglect. It is not mere rest, but the refusal to act when action is needed, allowing life to pass by unused.'
  }

};
document.querySelectorAll('.sin-card').forEach(button => {

  button.addEventListener('click', () => {

    const sin = button.dataset.sin;
    const data = sinData[sin];

    if (!data) return;

    sinTitle.textContent = data.title;
    sinLatin.textContent = data.latin;
    sinDescription.textContent = data.description;

    sinImage.style.backgroundImage = `url("${data.image}")`;

    sinOverlay.classList.add('open');
    sinOverlay.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';
  });

});

function closeSinOverlay(){

  sinOverlay.classList.remove('open');
  sinOverlay.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';
}

sinClose.addEventListener('click', closeSinOverlay);

sinOverlay.addEventListener('click', (e) => {

  if (e.target === sinOverlay) {
    closeSinOverlay();
  }

});

document.addEventListener('keydown', (e) => {

  if (
    e.key === 'Escape' &&
    sinOverlay.classList.contains('open')
  ) {
    closeSinOverlay();
  }

});
const brainBtn = document.getElementById("brainBtn");
const brainPopup = document.getElementById("brainPopup");
const brainClose = document.getElementById("brainClose");

brainBtn?.addEventListener("click", () => {
  brainPopup.classList.add("open");
});

brainClose?.addEventListener("click", () => {
  brainPopup.classList.remove("open");
});

brainPopup?.addEventListener("click", (e) => {
  if(e.target === brainPopup){
    brainPopup.classList.remove("open");
  }
});
/* =====================================================
   THE MIRROR — EDITORIAL EXPERIENCE
   ===================================================== */
// =====================================================
// THE MIRROR — 150 SPECIAL OUTCOMES
// 0 = FIRST OPTION
// 1 = SECOND OPTION
// 2 = THIRD OPTION
// =====================================================

const mirrorOutcomeQuotes = {

  "000000": "You choose growth without hesitation, truth without fear, meaning without applause, and certainty over the unknown. Perhaps you are not searching for yourself—you are building yourself.",
  "000001": "You choose transformation, truth, private meaning, and a known road. Even those who seek change sometimes need something certain beneath their feet.",
  "000002": "You choose growth, truth, quiet meaning, and freedom. You seem willing to become someone new without demanding that life reveal the destination first.",
  "000010": "You choose growth while protecting your peace. You value meaning that exists without an audience, and you still prefer a road you can see.",
  "000011": "You choose change without surrendering every truth to yourself. Perhaps you understand that wisdom is knowing what deserves to enter your mind.",
  "000012": "You choose growth, selective truth, private meaning, and freedom. You want to evolve without giving the world complete access to your inner world.",
  "000020": "You choose growth and truth, while leaving recognition somewhere between silence and applause. Perhaps you want your life to matter before you want it to be noticed.",
  "000021": "You face truth, value achievement, and still prefer certainty. You seem to believe that ambition means little if you do not know where you are going.",
  "000022": "You choose growth, truth, balance, and freedom. You seem comfortable walking forward without asking life to promise you an easy road.",

  "001000": "You seek growth, truth, recognition, and certainty. You want your journey to mean something—and you want to know where that meaning is taking you.",
  "001001": "You choose transformation, truth, recognition, and certainty. Perhaps ambition becomes meaningful to you when both the destination and the witness matter.",
  "001002": "You choose change, truth, recognition, and freedom. You want your life to matter without allowing recognition to own your direction.",
  "001010": "You choose growth, truth, recognition, and reflection. You do not want success to erase the lessons that shaped you.",
  "001011": "You face truth, value recognition, and keep your regrets. Perhaps you believe even painful chapters deserve a place in the story.",
  "001012": "You choose growth, truth, recognition, reflection, and freedom. You want to be seen without becoming dependent on being seen.",
  "001020": "You choose change, truth, recognition, and reflection. You want achievement without pretending the past was perfect.",
  "001021": "You face truth, value recognition, preserve your regrets, and choose certainty. You seem to prefer understanding the past rather than escaping it.",
  "001022": "You choose truth, recognition, reflection, and freedom. The past may remain part of you without being allowed to decide your future.",

  "002000": "You choose growth and truth while remaining uncertain about recognition. You still want certainty in your path, even if you are unsure how much the world should matter.",
  "002001": "You seek growth, truth, and private meaning while choosing certainty. You seem less interested in applause than in knowing your path is real.",
  "002002": "You choose growth, truth, uncertainty, and freedom. You seem comfortable admitting that some important answers cannot be settled.",
  "002010": "You choose growth, truth, uncertainty, and reflection. Perhaps you are learning that wisdom is not the same thing as knowing everything.",
  "002011": "You choose change, truth, uncertainty, and the lessons of regret. You would rather understand slowly than decide blindly.",
  "002012": "You choose transformation, truth, uncertainty, reflection, and freedom. You leave space for the person you have not become yet.",
  "002020": "You choose growth, truth, uncertainty, and reflection. Perhaps you do not need applause or certainty; you only need the courage to continue.",
  "002021": "You choose truth, uncertainty, reflection, and certainty. Contradictory perhaps—but human enough to be honest.",
  "002022": "You choose growth, truth, uncertainty, reflection, and freedom. You leave the mirror open rather than demanding a final answer.",

  "010000": "You choose growth, but you protect your peace from every truth. You value private meaning and prefer certainty. Perhaps you believe wisdom needs boundaries.",
  "010001": "You want to change, but not every truth deserves access to you. You value private meaning and still prefer certainty.",
  "010002": "You choose growth while protecting your inner peace, value private achievement, and embrace freedom. Your independence has boundaries.",
  "010010": "You choose growth, selective truth, and reflection. You are not running from the past—you are choosing how much of it to carry.",
  "010011": "You seek growth but refuse to believe every truth must be known. You value meaning, keep your regrets, and choose certainty.",
  "010012": "You choose growth, selective truth, private meaning, and freedom. Becoming wiser does not require becoming completely exposed.",
  "010020": "You choose growth, protect your peace, remain between recognition and privacy, and prefer certainty. Your ambition seems private but deliberate.",
  "010021": "You choose change, caution, balance, and certainty. You are willing to evolve, but you refuse to let the world decide how fast.",
  "010022": "You choose growth, caution, balance, and freedom. You leave the future open without giving everyone access to your inner world.",

  "011000": "You choose growth, caution, recognition, and certainty. You want to become more, but you also want the world to understand what that becoming means.",
  "011001": "You choose change, selective truth, recognition, and certainty. Your answers suggest ambition with boundaries.",
  "011002": "You choose growth, caution, recognition, and freedom. You want your achievements witnessed, but you still want ownership of your road.",
  "011010": "You choose growth, protect your peace, value recognition, and keep the lessons of regret. Success does not have to require forgetting yourself.",
  "011011": "You choose transformation, caution, recognition, reflection, and certainty. Your past matters, but it does not have to become your prison.",
  "011012": "You choose growth, caution, recognition, reflection, and freedom. You carry your history while refusing to let it decide your destination.",
  "011020": "You choose change, selective truth, recognition, and reflection. You want to be understood without pretending the past was perfect.",
  "011021": "You face only the truths you believe are worth carrying, value recognition, preserve your regrets, and choose certainty.",
  "011022": "You choose growth, caution, recognition, reflection, and freedom. You seem to want both roots and open skies.",

  "012000": "You choose growth, selective truth, uncertainty about recognition, and certainty. Not every question needs an audience.",
  "012001": "You want to become better, reveal only what you can carry, remain unsure about recognition, and choose certainty.",
  "012002": "You choose growth, caution, uncertainty, and freedom. You do not demand complete clarity before allowing yourself to move.",
  "012010": "You choose growth, selective truth, uncertainty, and reflection. Perhaps you are learning to separate wisdom from simply knowing everything.",
  "012011": "You choose change, caution, uncertainty, and the lessons of regret. You would rather understand slowly than decide blindly.",
  "012012": "You choose growth, selective truth, uncertainty, reflection, and freedom. You leave space for the person you have not become yet.",
  "012020": "You choose growth, caution, uncertainty, and reflection. Perhaps you do not need applause or certainty; you only need the courage to continue.",
  "012021": "You choose selective truth, uncertainty, reflection, and certainty. Some contradictions do not need to be solved immediately.",
  "012022": "You choose growth, caution, uncertainty, reflection, and freedom. Your answers leave the mirror open rather than finished.",

  "012100": "You choose to grow without abandoning yourself, protect your peace, remain unsure about recognition, and prefer certainty.",
  "012101": "You choose yourself, selective truth, uncertainty, reflection, and certainty. Not knowing everything does not mean knowing nothing.",
  "012102": "You choose identity, caution, uncertainty, reflection, and freedom. You allow some questions to remain unanswered.",
  "012110": "You choose yourself, protect your peace, remain unsure about recognition, and keep your regrets. You carry history without letting it speak for you.",
  "012111": "You choose identity, caution, uncertainty, and reflection while preferring certainty. Some contradictions can simply remain.",
  "012112": "You choose yourself, selective truth, uncertainty, reflection, and freedom. You are still becoming, and you are willing to admit it.",
  "012120": "You choose identity, truth carefully, uncertainty, and reflection. You search inward before asking the world for an answer.",
  "012121": "You protect your identity, protect your peace, remain unsure about recognition, and keep the past's lessons.",
  "012122": "You choose yourself, caution, uncertainty, reflection, and freedom. Perhaps the deepest answer is that you are still discovering the question.",

  "020000": "You begin with uncertainty, yet still seek truth, private meaning, and certainty. Doubt can exist beside direction.",
  "020001": "You accept uncertainty about yourself, face truth, value private meaning, and choose certainty. You may question the road while still wanting a destination.",
  "020002": "You choose uncertainty, truth, private meaning, and freedom. You seem willing to walk without demanding that life become predictable.",
  "020010": "You accept uncertainty, face truth, protect private meaning, and keep the lessons of regret. Your answers suggest reflection rather than escape.",
  "020011": "You choose uncertainty, truth, private meaning, and memory. Perhaps your regrets are reminders of how you arrived here.",
  "020012": "You choose uncertainty, truth, private meaning, reflection, and freedom. You leave the future unwritten while carrying the past honestly.",
  "020020": "You accept uncertainty, seek truth, remain between recognition and privacy, and reflect on regret. Your answers resist simple definitions.",
  "020021": "You choose uncertainty, truth, balance, and certainty. You may not know exactly what you want, but you want to understand where you stand.",
  "020022": "You choose uncertainty, truth, balance, reflection, and freedom. You have stopped demanding that every contradiction disappear.",

  "021000": "You accept uncertainty, seek truth, value recognition, and choose certainty. You want your life to matter privately and publicly.",
  "021001": "You begin with uncertainty, face truth, value recognition, and still choose certainty. You may question yourself, but you do not want to lose direction.",
  "021002": "You accept uncertainty, truth, recognition, and freedom. You want your existence to matter without surrendering your own road.",
  "021010": "You choose uncertainty, truth, recognition, and reflection. Your past matters, but regret does not get the final word.",
  "021011": "You face uncertainty and truth, value recognition, and keep your regrets. Perhaps being seen matters because your story matters.",
  "021012": "You choose uncertainty, truth, recognition, reflection, and freedom. You want to be understood without becoming dependent on understanding.",
  "021020": "You accept uncertainty, seek truth, value recognition, and reflect on regret. You are learning to make peace with complexity.",
  "021021": "You choose uncertainty, truth, recognition, and certainty while keeping your regrets. Perhaps certainty means knowing what matters, not knowing everything.",
  "021022": "You accept uncertainty, truth, recognition, reflection, and freedom. You carry the past while refusing to close the future.",

  "022000": "You accept uncertainty, face truth, remain undecided about recognition, and prefer certainty. You may not know how you want to be seen, but you want direction.",
  "022001": "You choose uncertainty, truth, balance, and certainty. You are comfortable admitting that parts of yourself remain unresolved.",
  "022002": "You choose uncertainty, truth, balance, and freedom. You would rather live with questions than accept an easy lie.",
  "022010": "You accept uncertainty, face truth, remain between recognition and privacy, and keep the lessons of regret.",
  "022011": "You choose uncertainty, truth, balance, and memory. Perhaps your regrets have taught you not what to avoid, but what matters.",
  "022012": "You choose uncertainty, truth, balance, reflection, and freedom. You leave room for the person you may become.",
  "022020": "You accept uncertainty, truth, balance, and reflection. You seem less interested in defining yourself than understanding yourself.",
  "022021": "You choose uncertainty, truth, balance, and certainty while keeping your regrets. Wanting clarity while accepting complexity is not a contradiction.",
  "022022": "You choose uncertainty, truth, balance, reflection, and freedom. Perhaps the mirror's answer is simply another question—and you are willing to keep looking.",

  "100000": "You choose to grow without abandoning yourself, seek truth, value private meaning, and choose certainty. Your identity remains your foundation.",
  "100001": "You choose yourself, truth, private meaning, and certainty. Perhaps becoming better should never require becoming someone you cannot recognize.",
  "100002": "You protect your identity, seek truth, value private meaning, and embrace freedom. Your answers suggest quiet self-possession.",
  "100010": "You choose yourself, face truth, value private meaning, and reflect on regret. Growth does not require pretending the past never happened.",
  "100011": "You choose identity, truth, private meaning, reflection, and certainty. You seem to believe even painful chapters deserve meaning.",
  "100012": "You choose yourself, truth, private meaning, reflection, and freedom. You want to evolve without abandoning the person who started the journey.",
  "100020": "You choose yourself, truth, balance, reflection, and certainty. You do not need the world to define what your journey means.",
  "100021": "You choose identity, truth, recognition, and certainty. You want to remain yourself while still allowing achievement to be seen.",
  "100022": "You choose yourself, truth, balance, and freedom. Perhaps your worth does not need to be measured by a single answer.",

  "101000": "You choose identity, truth, recognition, and certainty. You want to be seen, but never at the cost of becoming someone else.",
  "101001": "You protect your identity, face truth, value recognition, and choose certainty. Your ambition has roots.",
  "101002": "You choose yourself, truth, recognition, and freedom. You want recognition, but you refuse to let it choose your road.",
  "101010": "You choose identity, truth, recognition, and reflection. Your past is part of your story, not the whole story.",
  "101011": "You protect yourself, face truth, value recognition, and keep your regrets. You want to be seen as a whole person.",
  "101012": "You choose identity, truth, recognition, reflection, and freedom. You want to be understood without becoming defined by others.",
  "101020": "You choose yourself, truth, recognition, and reflection. You want achievement without erasing the road that built you.",
  "101021": "You protect your identity, face truth, value recognition, and keep your regrets while choosing certainty.",
  "101022": "You choose yourself, truth, recognition, reflection, and freedom. The future deserves more of your attention than the past deserves your regret.",

  "102000": "You choose identity, truth, uncertainty about recognition, and certainty. You seem to believe knowing yourself matters more than being admired.",
  "102001": "You protect your identity, seek truth, remain uncertain about recognition, and choose certainty. Your direction comes from within.",
  "102002": "You choose yourself, truth, uncertainty, and freedom. You are not searching for a perfect identity, only an honest one.",
  "102010": "You choose identity, truth, uncertainty, and reflection. You question yourself without needing to destroy yourself.",
  "102011": "You protect yourself, face truth, remain unsure about recognition, and keep the lessons of regret.",
  "102012": "You choose yourself, truth, uncertainty, reflection, and freedom. You are willing to admit that you are still becoming.",
  "102020": "You choose identity, truth, uncertainty, and reflection. Perhaps understanding yourself matters more than explaining yourself.",
  "102021": "You protect your identity, face truth, remain uncertain about recognition, and keep your regrets while choosing certainty.",
  "102022": "You choose yourself, truth, uncertainty, reflection, and freedom. You are not finished—and perhaps that is the point.",

  "110000": "You choose to remain yourself, protect your peace, value private meaning, and prefer certainty. You believe growth should have boundaries.",
  "110001": "You protect your identity, choose carefully which truths to carry, value private meaning, and seek certainty.",
  "110002": "You choose yourself, caution, private meaning, and freedom. You are willing to change, but only in ways that still feel like you.",
  "110010": "You choose identity, caution, private meaning, and reflection. You do not need to erase your past to move beyond it.",
  "110011": "You protect your identity, your peace, and the lessons of regret. Perhaps stability can be a form of strength.",
  "110012": "You choose yourself, caution, private meaning, reflection, and freedom. You want a future that still feels like yours.",
  "110020": "You choose identity, caution, balance, and reflection. You seem more interested in authenticity than applause.",
  "110021": "You protect yourself, choose your truths carefully, value balance, and prefer certainty.",
  "110022": "You choose yourself, caution, balance, reflection, and freedom. You do not need to have every answer today.",

  "111000": "You choose yourself, protect your peace, value recognition, and prefer certainty. You want to evolve without losing your identity.",
  "111001": "You choose identity, caution, recognition, reflection, and certainty. Your past matters because it helped build the person answering.",
  "111002": "You choose yourself, selective truth, recognition, reflection, and freedom. You want to be seen as the person you decide to become.",
  "111010": "You protect your identity, your peace, your ambition, and your memories. Your answers suggest controlled growth.",
  "111011": "You choose yourself, caution, recognition, and reflection while preferring certainty. You are not erasing your story—you are learning to live with it.",
  "111012": "You choose identity, caution, recognition, reflection, and freedom. You understand that the strongest identity is one that can still change.",
  "111020": "You choose yourself, truth carefully, recognition, and reflection. You stand between wanting to be understood and refusing to live for understanding.",
  "111021": "You protect your identity, your peace, and your need to be seen while keeping your regrets.",
  "111022": "You choose yourself, caution, recognition, reflection, and freedom. You want to move forward without pretending the road behind you never existed.",

  "112000": "You choose yourself, selective truth, uncertainty about recognition, and certainty. Your inner compass matters more than applause.",
  "112001": "You protect your identity, choose your truths carefully, remain unsure about recognition, and prefer certainty.",
  "112002": "You choose yourself, caution, uncertainty, and freedom. You are comfortable leaving some parts of yourself undefined.",
  "112010": "You choose identity, caution, uncertainty, and reflection. You do not need every answer immediately.",
  "112011": "You protect yourself, your peace, remain unsure about recognition, and keep your regrets. You allow yourself time.",
  "112012": "You choose yourself, selective truth, uncertainty, reflection, and freedom. You are still discovering what matters.",
  "112020": "You choose identity, caution, uncertainty, and reflection. You seem to search inward before seeking approval.",
  "112021": "You protect your identity, choose your truths carefully, remain uncertain about recognition, and keep the past's lessons.",
  "112022": "You choose yourself, caution, uncertainty, reflection, and freedom. Perhaps not knowing is sometimes the beginning of knowing.",

  "120000": "You choose yourself, seek truth, remain balanced about recognition, and prefer certainty. You want meaning without becoming dependent on applause.",
  "120001": "You protect your identity, face truth, value balance, and choose certainty. Your answers suggest quiet ambition.",
  "120002": "You choose yourself, truth, balance, and freedom. You want to be recognized without becoming controlled by recognition.",
  "120010": "You choose identity, truth, balance, and reflection. You carry the past while still allowing yourself to change.",
  "120011": "You protect yourself, face truth, value balance, and keep your regrets. Your story matters, even where it is imperfect.",
  "120012": "You choose yourself, truth, balance, reflection, and freedom. You seem comfortable holding two truths at once.",
  "120020": "You choose identity, truth, balance, and reflection. You do not need a simple definition of yourself.",
  "120021": "You protect your identity, face truth, value balance, and keep your regrets while choosing certainty.",
  "120022": "You choose yourself, truth, balance, reflection, and freedom. You are looking for an honest life rather than a perfect one.",

  "121000": "You choose yourself, protect your peace, value recognition, and choose certainty. You want to be seen without being changed by the gaze.",
  "121001": "You protect your identity, carefully choose what truths to carry, value recognition, and prefer certainty.",
  "121002": "You choose yourself, caution, recognition, and freedom. You want recognition, but you refuse to let it become your identity.",
  "121010": "You choose identity, caution, recognition, and reflection. You want your success to remember where it came from.",
  "121011": "You protect yourself, your peace, your need to be seen, and the lessons of regret.",
  "121012": "You choose yourself, caution, recognition, reflection, and freedom. You want to be seen without surrendering yourself.",
  "121020": "You choose identity, caution, recognition, and reflection. Perhaps being understood matters, but being authentic matters more.",
  "121021": "You protect your identity, choose your truths carefully, value recognition, and preserve your regrets.",
  "121022": "You choose yourself, caution, recognition, reflection, and freedom. You want the future to know the truth about the past without being ruled by it.",

  "122000": "You choose yourself, truth, uncertainty about recognition, and certainty. You trust your inner compass more than outside approval.",
  "122001": "You protect your identity, face truth, remain uncertain about recognition, and choose certainty. Your direction comes from within.",
  "122002": "You choose yourself, truth, uncertainty, and freedom. You seem willing to walk alone rather than walk falsely.",
  "122010": "You choose identity, truth, uncertainty, and reflection. You are willing to question who you are without losing yourself.",
  "122011": "You protect yourself, face truth, remain uncertain about recognition, and keep your regrets. You do not need to turn every wound into wisdom immediately.",
  "122012": "You choose yourself, truth, uncertainty, reflection, and freedom. You are still becoming, and you know it.",
  "122020": "You choose identity, truth, uncertainty, and reflection. Perhaps your greatest question is not who you are, but who you are becoming.",
  "122021": "You protect your identity, face truth, remain uncertain about recognition, and keep the lessons of regret.",
  "122022": "You choose yourself, truth, uncertainty, reflection, and freedom. The mirror does not close the story—it leaves the next page to you."
};
const mirrorFallbackQuotes = [
  "Perhaps the mirror is not here to give you an answer. Perhaps it is here to make you notice the answer you already carry.",
  "Some choices cannot define a person. They can only reveal a direction.",
  "You are not one decision. You are the space between all the decisions you make.",
  "The strange thing about looking inward is that the answer often becomes another question.",
  "Not every contradiction needs to be solved. Some simply need to be understood.",
  "A person changes quietly, long before the world notices.",
  "The life you become is built from choices nobody else can make for you.",
  "Perhaps certainty was never the destination. Perhaps understanding was.",
  "What you choose today does not have to imprison who you become tomorrow.",
  "The mirror shows a moment. You are still becoming.",
  "There are answers we choose, and answers that choose something within us.",
  "You may never completely understand yourself—and perhaps that is what keeps you searching.",
  "Some truths arrive as answers. Others arrive as questions that refuse to leave.",
  "Your choices are not a final definition. They are footprints on a road still being written.",
  "The person in the mirror is not finished. Neither is the story."
];

function getMirrorOutcomeQuote(answers) {
  const key = answers.join("");

  if (mirrorOutcomeQuotes[key]) {
    return mirrorOutcomeQuotes[key];
  }

  const fallbackIndex =
    answers.reduce((total, value, index) => {
      return total + (value + 1) * (index + 3);
    }, 0) % mirrorFallbackQuotes.length;

  return mirrorFallbackQuotes[fallbackIndex];
}
const mirrorEnter = document.getElementById("mirrorEnter");
const mirrorOverlay = document.getElementById("mirrorOverlay");
const mirrorClose = document.getElementById("mirrorClose");

const mirrorQuestion = document.getElementById("mirrorQuestion");
const mirrorQuestionImage = document.getElementById("mirrorQuestionImage");
const mirrorQuestionNumber = document.getElementById("mirrorQuestionNumber");
const mirrorCurrent = document.getElementById("mirrorCurrent");

const mirrorOption0 = document.getElementById("mirrorOption0");
const mirrorOption1 = document.getElementById("mirrorOption1");
const mirrorOption2 = document.getElementById("mirrorOption2");

const mirrorQuestionScreen = document.querySelector(".mirror-question");
const mirrorResult = document.getElementById("mirrorResult");

const mirrorResultTitle = document.getElementById("mirrorResultTitle");
const mirrorResultText = document.getElementById("mirrorResultText");
const mirrorResultQuestion = document.getElementById("mirrorResultQuestion");
const mirrorResultThought = document.getElementById("mirrorResultThought");

const mirrorRestart = document.getElementById("mirrorRestart");

let mirrorStep = 0;
let mirrorAnswers = [];


const mirrorQuestions = [

  {
    image: "Becoming the better version of myself 💫.jpg",

    question:
      "If becoming someone better meant leaving a part of yourself behind, would you still change?",

    options: [
      "YES — If I must lose a part of myself to grow, let it go.",
      "NO — I should grow without becoming a stranger to myself.",
      "MAYBE — Some parts deserve to change. Others deserve to remain."
    ]
  },

  {
    image: "866661522028272672.jpg",

    question:
      "If the truth about how others truly see you appeared before your eyes, would you read it?",

    options: [
      "YES — Even an uncomfortable truth is better than an illusion.",
      "NO — Not every truth makes a person wiser.",
      "MAYBE — I would read it, but I cannot promise it would change me."
    ]
  },

  {
    image: "1143914374084216064.jpg",

    question:
      "If you reached everything you once dreamed of, yet nobody knew you had achieved it, would it still be enough?",

    options: [
      "YES — A life does not become meaningful because it is witnessed.",
      "NO — What is achievement if nobody recognizes it?",
      "MAYBE — Recognition matters, but it should never become the meaning."
    ]
  },

  {
    image: "777152479487212546.jpg",

    question:
      "If you could erase one regret, but doing so would erase the person it helped you become, would you erase it?",

    options: [
      "YES — I would rather be free from the weight of it.",
      "NO — Some regrets become part of who we are.",
      "MAYBE — I would not erase it. I only wish it had hurt less."
    ]
  },

  {
    image: "837599230721008165.jpg",

    question:
      "If nobody could judge you, praise you, or remember your choices, what would you finally choose for yourself?",

    options: [
      "MYSELF — I would stop living through other people's eyes.",
      "THE SAME — I already know what matters to me.",
      "I DON'T KNOW — I am still learning to admit what I want."
    ]
  },

  {
    image: "913878949377761087.jpg",

    question:
      "If certainty could give you peace, but freedom required you to live without knowing what comes next, which would you choose?",

    options: [
      "CERTAINTY — I would rather know the road before I walk it.",
      "FREEDOM — I would rather choose the road while walking it.",
      "NEITHER — Perhaps a meaningful life needs both."
    ]
  }

];


function renderMirrorQuestion() {

  const q = mirrorQuestions[mirrorStep];

  const number = String(mirrorStep + 1).padStart(2, "0");

  mirrorCurrent.textContent = number;
  mirrorQuestionNumber.textContent = number;

  mirrorQuestion.textContent = q.question;

  mirrorQuestionImage.src = q.image;
  mirrorQuestionImage.alt = "The Mirror — Question " + number;

  mirrorOption0.textContent = q.options[0];
  mirrorOption1.textContent = q.options[1];
  mirrorOption2.textContent = q.options[2];

}


function openMirror() {

  mirrorStep = 0;
  mirrorAnswers = [];

  mirrorQuestionScreen.style.display = "grid";
  mirrorResult.classList.remove("active");

  renderMirrorQuestion();

  mirrorOverlay.classList.add("active");
  mirrorOverlay.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


function closeMirror() {

  mirrorOverlay.classList.remove("active");
  mirrorOverlay.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


function finishMirror() {

  mirrorQuestionScreen.style.display = "none";

  const yes = mirrorAnswers.filter(a => a === 0).length;
  const no = mirrorAnswers.filter(a => a === 1).length;
  const maybe = mirrorAnswers.filter(a => a === 2).length;

  let result;

  if (yes >= 4) {

    result = {
      title: "THE SEEKER",
      text:
        "You seem drawn toward change, truth and movement. You would rather face an uncomfortable answer than remain inside a comfortable illusion.",
      question:
        "What would you become if you stopped being afraid of becoming different?",
      thought:
        "The person you become is shaped by the questions you are willing to ask."
    };

  } else if (no >= 4) {

    result = {
      title: "THE KEEPER",
      text:
        "You seem to protect continuity. You value what experience has made of you, and you do not believe every change is worth its cost.",
      question:
        "What are you protecting — and why is it worth protecting?",
      thought:
        "Not everything old is meant to be left behind."
    };

  } else if (maybe >= 4) {

    result = {
      title: "THE BETWEEN",
      text:
        "You do not seem comfortable with simple answers. You leave room for contradiction, uncertainty and the possibility that two things can be true at once.",
      question:
        "If certainty disappeared, what would you still believe?",
      thought:
        "Some truths live quietly between two opposite answers."
    };

  } else {

    result = {
      title: "THE UNFINISHED",
      text:
        "Your answers resist a single direction. Perhaps that is the most honest result. A person is rarely one thing for long.",
      question:
        "Which version of yourself are you still becoming?",
      thought:
        "We are not finished works. We are works in progress."
    };

  }

  mirrorResultTitle.textContent = result.title;
  mirrorResultText.textContent = result.text;
  mirrorResultQuestion.textContent = result.question;
  mirrorResultThought.textContent = result.thought;

  mirrorResult.classList.add("active");

}


document.querySelectorAll(".mirror-option").forEach(button => {

  button.addEventListener("click", () => {

    const selected = Number(button.dataset.option);

    mirrorAnswers.push(selected);

    mirrorStep++;

    if (mirrorStep < mirrorQuestions.length) {

      renderMirrorQuestion();

    } else {

      finishMirror();

    }

  });

});


mirrorEnter.addEventListener("click", openMirror);

mirrorClose.addEventListener("click", closeMirror);

mirrorRestart.addEventListener("click", openMirror);


document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    mirrorOverlay.classList.contains("active")
  ) {
    closeMirror();
  }

});
