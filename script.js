const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize-button');

let divGridSize = 0;
for(let i = 0; i < 16*16; i++) {
    let divGrid = document.createElement('div');
    divGridSize = 640 / 16;
    divGrid.style.width = `${divGridSize}px`;
    divGrid.style.height = `${divGridSize}px`;
    divGrid.style.flex = `1 1 ${divGridSize}px`;
    divGrid.style.minHeight = "0px";
    divGrid.classList.add('div-grid');
    divGrid.style.padding = "0px";
    container.appendChild(divGrid);
}

const divGrids = Array.from(document.getElementsByClassName('div-grid'));
divGrids.forEach(grid => {
    grid.addEventListener('mouseenter', addColor);
});

function addColor(event) {
    event.target.classList.add('colored');
}

function resize() {
    const newGridSize = parseInt(prompt("Enter the new grid size (max is 100)"));

    if(newGridSize > 100 || newGridSize < 1) {
        alert("Not an appropriate size!");
        return;
    }

    const container = document.querySelector('#container');
    let hasChild = container.hasChildNodes();

    while(hasChild) {
        container.removeChild(container.lastElementChild);
        hasChild = container.hasChildNodes();
    }

    for(let i = 0; i < newGridSize**2; i++) {
        let divGrid = document.createElement('div');
        divGridSize = 640 / newGridSize;
        divGrid.style.width = `${divGridSize}px`;
        divGrid.style.height = `${divGridSize}px`;
        divGrid.style.flex = `1 1 ${divGridSize}px`;
        divGrid.style.minHeight = "0px";
        divGrid.classList.add('div-grid');
        divGrid.style.padding = "0px";
        container.appendChild(divGrid);
    }
    const divGrids = Array.from(document.getElementsByClassName('div-grid'));
    divGrids.forEach(grid => {
    grid.addEventListener('mouseenter', addColor);
    });
}

resizeButton.addEventListener('click', resize);