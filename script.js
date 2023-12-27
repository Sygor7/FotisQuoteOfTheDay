document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('dynamic-quote');
    const imageElement = document.getElementById('dynamic-image');

    if (quoteElement && imageElement && window.quotes && window.quotes.length > 0 && window.images && window.images.length > 0) {
        const randomQuoteIndex = Math.floor(Math.random() * window.quotes.length);
        const randomImageIndex = Math.floor(Math.random() * window.images.length);

        quoteElement.textContent = window.quotes[randomQuoteIndex];
        quoteElement.innerHTML = '<em>' + window.quotes[randomQuoteIndex] + '</em>';
        imageElement.src = 'images/' + window.images[randomImageIndex];
        imageElement.alt = 'Random Image';
    }
});
