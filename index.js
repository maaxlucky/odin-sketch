let gridNumber = prompt('Enter number 1-100 for grid size please')
const mainGrid = document.querySelector('.grid')
const btn = document.querySelector('.button-erase')
const btnSize = document.querySelector('.change-size')

let sizeOfGrid = Math.floor(500 / gridNumber * 10) / 10
function drawGrid() {
    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            const oneGrid = document.createElement('div')
            oneGrid.classList.add('grid-item')
            oneGrid.style.width = `${sizeOfGrid}` + 'px';
            oneGrid.style.height = `${sizeOfGrid}` + 'px';
            mainGrid.appendChild(oneGrid)
        }
    }
}
drawGrid()

let gridsOfMainGrid = document.querySelectorAll('.grid-item')

function mainFeatures() {
    gridsOfMainGrid.forEach((grid) =>
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = 'black';
        })
    );

    btn.addEventListener('click', () => {
        gridsOfMainGrid.forEach((grid) => {
            if (grid.style) {
                grid.style.backgroundColor = 'white';
            }
        })
    });
}

mainFeatures()

btnSize.addEventListener('click', () => {
    gridsOfMainGrid.forEach((grid) => {
        grid.remove();
    })
    gridNumber = prompt('Enter new number')
    sizeOfGrid = Math.floor(500 / gridNumber * 10) / 10
    drawGrid()
    gridsOfMainGrid = document.querySelectorAll('.grid-item')
    mainFeatures()
})


