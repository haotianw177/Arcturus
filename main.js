document.addEventListener('DOMContentLoaded', () => {
    const altar = document.querySelector('.altar');
    const links = altar.querySelectorAll('a:not(p > a)');
    const creditsText = document.getElementById('creditsInfo');

    // Shuffle the links
    for (let i = links.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        altar.insertBefore(links[j], links[i]);
    }

    // Toggle the credit info
    document.getElementById('creditsLink').onclick = event => {
        event.preventDefault();
        creditsText.style.display = creditsText.style.display === 'none' ? '' : 'none';
        Array.from(links).forEach(link => {
            if (link.id !== 'creditsLink') {
                link.style.display = creditsText.style.display === 'none' ? '' : 'none';
            }
        });
    };
});
