const quotes = {
  science: [
    { text: "Science is the poetry of reality.", author: "Richard Dawkins" },
    {
      text: "The important thing is to never stop questioning.",
      author: "Albert Einstein",
    },
    {
      text: "Somewhere, something incredible is waiting to be known.",
      author: "Carl Sagan",
    },
  ],
  math: [
    {
      text: "The only way to learn mathematics is to do mathematics.",
      author: " Paul Halmos",
    },
    {
      text: "Pure mathematics is, in its way, the poetry of logical ideas.",
      author: " Albert Einstei",
    },
    {
      text: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.",
      author: "David Hilbert",
    },
  ],
  computer: [
    {
      text: "Computers are incredibly fast, accurate, and stupid. Humans are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.",
      author: "  Albert Einstein",
    },
    {
      text: "Software is a great combination between artistry and engineering.",
      author: "  Bill Gates",
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
  ],
};

let currentIndex = 0;
let currentCategory = "science";

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const categorySelect = document.getElementById("category");
const themeSwitch = document.getElementById("themeSwitch");
const increaseFontBtn = document.getElementById("increaseFont");
const decreaseFontBtn = document.getElementById("decreaseFont");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");
const themeLabel = document.getElementById("themeLabel");

const displayQuote = () => {
  quoteText.innerText = quotes[currentCategory][currentIndex].text;
  quoteAuthor.innerText = `— ${quotes[currentCategory][currentIndex].author}`;
};

categorySelect.addEventListener("change", (e) => {
  currentCategory = e.target.value;
  currentIndex = 0;
  displayQuote();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  displayQuote();
});

randomBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote();
});

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  themeLabel.textContent = themeSwitch.checked ? "Dark Mode" : "Light Mode";
});

increaseFontBtn.addEventListener("click", () => {
  let currentFontSize = parseInt(window.getComputedStyle(quoteText).fontSize);
  quoteText.style.fontSize = currentFontSize + 2 + "px";
});

decreaseFontBtn.addEventListener("click", () => {
  let currentFontSize = parseInt(window.getComputedStyle(quoteText).fontSize);
  quoteText.style.fontSize = currentFontSize - 2 + "px";
});
