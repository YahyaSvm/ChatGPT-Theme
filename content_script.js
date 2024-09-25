document.addEventListener('DOMContentLoaded', function() {
    const numStars = 100; 
    const starContainer = document.createElement('div');
    starContainer.className = 'stars';
    document.body.appendChild(starContainer);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starContainer.appendChild(star);
    }

    const applyStyles = () => {

    };

    applyStyles();
});
