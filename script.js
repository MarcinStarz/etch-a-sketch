let drawingBoard = document.querySelector('#drawingBoard');
let sliderAmount = document.querySelector('#sliderAmount');
let label = document.querySelector('.label');
let colorPicker = document.querySelector('.color-picker');
let pickedColor = '#000000';
let resetButton = document.querySelector('.reset-button');
let square = document.createElement("div");
square.classList.add("square");
let elements = '';

// Create squares within canvas
function createElements() {
    for (let i = 0; i < elements; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        drawingBoard.appendChild(square);
    }; 
}

colorPicker.addEventListener('input', e => {
    pickedColor = e.target.value;
})

// Draw
function draw() { let colorSquare = document.querySelectorAll('.square');
for (let i = 0; i < colorSquare.length; i++) {
    colorSquare[i].addEventListener('mouseover', function(e) {
        event.target.style.backgroundColor = pickedColor;
    });
}};

// Reset buttons
resetButton.addEventListener('click', function() {
    sliderAmount.value = 16;
    reset();
    afterResetCanvas();
    createElements();
    draw();
    colorPicker.value = '#000000';
});

// Clear the drawing board function
function reset() {
    if (elements > 0) {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild)
        };
    };
};

function afterResetCanvas() {
    let inputAmount = 16;
    elements = inputAmount*inputAmount;
    label.textContent = inputAmount.toString() + " x " + inputAmount.toString();
    // Assign grid style and numbers of columns
    let gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
    drawingBoard.style.gridTemplateColumns = gridTemplateColumns;
}

// Initial canvas 16x16
let inputAmount = 16;
elements = inputAmount*inputAmount;
label.textContent = inputAmount.toString() + " x " + inputAmount.toString();
// Assign grid style and numbers of columns
let gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
drawingBoard.style.gridTemplateColumns = gridTemplateColumns;

createElements();
draw();

// Slider function: clear board and change size of the canvas
sliderAmount.addEventListener('change', function(e) {
    // Clear the drawing board
    reset();
    
    // Take the value
    inputAmount = Number(e.target.value);
    elements = inputAmount*inputAmount;
    label.textContent = inputAmount.toString() + " x " + inputAmount.toString();
    // Assign grid style and numbers of columns
    gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
    drawingBoard.style.gridTemplateColumns = gridTemplateColumns;
    
    // Create new amount of squares within canvas
    for (let i = 0; i < elements; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        drawingBoard.appendChild(square);
    };
    
    draw();
});

