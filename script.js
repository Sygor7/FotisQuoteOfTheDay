document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('dynamic-quote');
    if (quoteElement && window.quotes && window.quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * window.quotes.length);
        quoteElement.textContent = window.quotes[randomIndex];
    }
});
