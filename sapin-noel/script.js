function drawTree(height, toggle) {
    const treeContainer = document.getElementById('tree-container');
    treeContainer.innerHTML = '';

    for (let i = 0; i < height; i++) {
        const line = document.createElement('div');
        line.className = 'tree-line';

        for (let j = 0; j < ____; j++) {
            const space = document.createElement('span');
            space.textContent = ' ';
            line.appendChild(space);
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            const span = document.createElement('span');
            span.textContent = ____ ? '*' : 'o';
            span.className = ____ ? 'star' : getRandomBulbClass(toggle);
            line.appendChild(span);
        }

        treeContainer.appendChild(line);
    }

    const trunkWidth = Math.max(5, Math.floor(height / 3));
    const trunkHeight = 2;
    for (let i = 0; i < trunkHeight; i++) {
        const trunk = document.createElement('div');
        trunk.className = 'trunk';
        trunk.textContent = ' '.repeat(____ - Math.floor(____ / 2) - 1) + '|'.repeat(____);
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
    let height = ____("Quelle hauteur pour ton sapin ? (entre 5 et 30)"); 
    height = parseInt(____);

    if (isNaN(height) || height < 5 || height > 30) {
        alert("Veuillez entrer un nombre entre 5 et 30.");
        return;
    }

    let toggle = true;

    setInterval(() => {
        drawTree(height, toggle);
        toggle = ____;
    }, 1000);

    drawTree(height, toggle);
}

main();
