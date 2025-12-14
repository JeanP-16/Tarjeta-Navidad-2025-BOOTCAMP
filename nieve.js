const snowflakesCount = 50; 
const snowflakes = [];

function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    for (let i = 0; i < snowflakesCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        
        // Posición y velocidad aleatoria
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5 segundos
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px'; // 10-20px
        
        snowContainer.appendChild(snowflake);
        snowflakes.push(snowflake);
    }
}

function createSnowPile() {
    const pile = document.createElement('div');
    pile.className = 'snow-pile';
    document.body.appendChild(pile);
    
    setTimeout(() => {
        pile.style.opacity = '0';
        setTimeout(() => {
            pile.remove();
            createSnowPile(); 
        }, 1000);
    }, 6000);
}

window.addEventListener('load', () => {
    createSnowflakes();
    createSnowPile();
});