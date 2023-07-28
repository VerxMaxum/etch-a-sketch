const container = document.querySelector('#container');
let divGridSize = 0;
for(let i = 0; i < 16*16; i++) {
    let divGrid = document.createElement('div');
    divGridSize = 800 / 16;
    divGrid.style.width = `${divGridSize}px`;
    divGrid.style.height = `${divGridSize}px`;
    divGrid.style.border = "1px black solid";
    divGrid.style.flex = `1 1 ${divGridSize}px`;
    divGrid.style.minHeight = "0px";
    divGrid.classList.add('div-grid');
    divGrid.style.padding = "0px";
    container.appendChild(divGrid);
}

function addColor(event) {
    event.target.classList.add('colored');
}

const divGrids = Array.from(document.getElementsByClassName('div-grid'));
divGrids.forEach(grid => {
    grid.addEventListener('mouseenter', addColor);
});