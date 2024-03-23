document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is fully loaded
    const altar = document.querySelector('.altar'); // Select the altar div
    const links = Array.from(altar.querySelectorAll('a:not(p > a)')); // Select all a tags not in h1

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring swap
        }
    }

    shuffle(links); // Shuffle the array of links

    // Re-append shuffled links to altar
    links.forEach(link => altar.appendChild(link));
});
