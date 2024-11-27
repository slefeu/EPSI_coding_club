function drawTree(height, toggle) {
    const treeContainer = document.getElementById('tree-container');
    treeContainer.innerHTML = '';

    for (let i = 0; i < height; i++) {
        const line = document.createElement('div');
        line.className = 'tree-line';

        for (let j = 0; j < height - i - 1; j++) {
            const space = document.createElement('span');
            space.textContent = ' ';
            line.appendChild(space);
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            const span = document.createElement('span');
            span.textContent = j % 2 === 0 ? '*' : 'o';
            span.className = j % 2 === 0 ? 'star' : getRandomBulbClass(toggle);
            line.appendChild(span);
        }

        treeContainer.appendChild(line);
    }

    const trunkWidth = Math.max(5, Math.floor(height / 3));
    const trunkHeight = 2;
    for (let i = 0; i < trunkHeight; i++) {
        const trunk = document.createElement('div');
        trunk.className = 'trunk';
        trunk.textContent = ' '.repeat(height - Math.floor(trunkWidth / 2) - 1) + '|'.repeat(trunkWidth);
        treeContainer.appendChild(trunk);
    }
}

function getRandomBulbClass(toggle) {
    const colors = toggle
        ? ['bulb-red', 'bulb-green', 'bulb-blue']
        : ['bulb-yellow', 'bulb-purple', 'bulb-cyan'];
    return `bulb ${colors[Math.floor(Math.random() * colors.length)]}`;
}

function main() {
    let height = prompt("Quelle hauteur pour ton sapin ? (entre 5 et 30)");
    height = parseInt(height);

    if (isNaN(height) || height < 5 || height > 30) {
        alert("Veuillez entrer un nombre entre 5 et 30.");
        return;
    }

    let toggle = true;

    setInterval(() => {
        drawTree(height, toggle);
        toggle = !toggle;
    }, 1000);

    drawTree(height, toggle);
}

main();