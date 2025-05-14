const container = document.querySelector(".container");

const numHegonos = 200;

const colors = ['#007bff', '28a745', 'ffc107'];

function getRandomNumber(min, max) {
    return Math.random()*(max-min) + min;
}

function createHexagon() {
    const hexagon = document.createElement('div');
    hexagon.classList.add('hexagon');

    const x = getRandomNumber(0, window.innerWidth - 50);
    const y =getRandomNumber(0, window.innerHeight - 57.735);
    hexagon.style.left = `${x}px`;
    hexagon.style.top = `´${y}px`;

    hexagon.addEventListener('mouseover', changeColor);
    container.appendChild(hexagon);
}

function changeColor(event) {
    const hexagon = event.target;
    let currentColor = hexagon.style.backgroundColor;

    if (currentColor == 'rgb(255, 255, 255)' || currentColor === '') {
        hexagon.style.backgroundColor = colors[0];
        hexagon.dataset.colorIndex = 0;
    } else {
        let currentIndex = parseInt(hexagon.dataset.colorIndex);
        let nextIndex = (currentIndex + 1) % colors.length;

    
        hexagon.style.backgroundColor = colors[nextIndex];
        hexagon.dataset.colorIndex = nextIndex;
    }
}
