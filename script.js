const container = document.querySelector('#container');
let divGridSize = 0;
for(let i = 0; i < 16*16; i++) {
    let divGrid = document.createElement('div');
    divGridSize = 800 / 16;
    divGrid.style.width = `${divGridSize}px`;
    divGrid.style.height = `${divGridSize}px`;
    divGrid.style.border = "1px black solid";
    divGrid.style.padding = "0px";
    container.appendChild(divGrid);
}