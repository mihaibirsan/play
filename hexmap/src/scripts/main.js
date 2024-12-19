const tileSize = 50; // Size of each hexagon
const hexRadius = Math.sqrt(3) * tileSize / 2; // Radius of the hexagon
const boardWidth = 10; // Number of hexagons in width
const boardHeight = 10; // Number of hexagons in height

const board = document.getElementById('hexagonal-board');

const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/donate/4/43/Badge-one-time.png',
    'https://upload.wikimedia.org/wikipedia/donate/4/4f/Badge-monthly.png',
    'https://upload.wikimedia.org/wikipedia/donate/d/de/Badge-workplace-giving.png',
    'https://upload.wikimedia.org/wikipedia/donate/7/73/Badge-daf.png',
    'https://upload.wikimedia.org/wikipedia/donate/6/6a/Badge-cga.png',
    'https://upload.wikimedia.org/wikipedia/donate/8/81/Badge-endowment.png'
];

function createHexagon(x, y, imageUrl) {
    const hexagon = document.createElement('div');
    hexagon.classList.add('hex');
    hexagon.style.left = `${x * hexRadius * 2}px`;
    hexagon.style.top = `${y * (tileSize * 1.5)}px`;
    hexagon.dataset.tileId = `${x}-${y}`;
    if (imageUrl) {
        hexagon.style.backgroundImage = `url(${imageUrl})`;
        hexagon.style.backgroundSize = 'cover';
        hexagon.style.backgroundPosition = 'center';
    }
    hexagon.addEventListener('click', () => {
        alert(`Tile clicked: ${hexagon.dataset.tileId}`);
    });
    return hexagon;
}

function drawBoard() {
    let imageIndex = 0;
    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            const imageUrl = imageUrls[imageIndex % imageUrls.length];
            imageIndex++;
            if (y % 2 === 1) {
                board.appendChild(createHexagon(x + 0.5, y, imageUrl));
            } else {
                board.appendChild(createHexagon(x, y, imageUrl));
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', drawBoard);