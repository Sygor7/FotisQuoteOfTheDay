const quotes = require('./quotes');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('dynamic-quote');
    if (quoteElement) {
        quoteElement.textContent = getRandomQuote();
    }
});
