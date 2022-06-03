let drawingBoard = document.querySelector("#drawingBoard");
let sliderAmount = document.querySelector('#sliderAmount');
let square = '';
let elements = '';  

// Initial canvas 16x16
let inputAmount = 16;
console.log(inputAmount);
elements = inputAmount*inputAmount;
console.log(elements);
// Assign grid style and numbers of columns
let gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
drawingBoard.style.gridTemplateColumns = gridTemplateColumns;

// Create squares within canvas
for (let i = 0; i <= elements; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    drawingBoard.appendChild(square);
};

// Slider function: clear board and change size of the canvas
sliderAmount.addEventListener('change', function(e) {
    // Clear the drawing board
    if (elements > 0) {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild)
        }
    }
    // Take the value
    inputAmount = Number(e.target.value);
    console.log(inputAmount);
    elements = inputAmount*inputAmount;
    console.log(elements);
    // Assign grid style and numbers of columns
    gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
    drawingBoard.style.gridTemplateColumns = gridTemplateColumns;
    
    // Create new amount of squares within canvas
    for (let i = 0; i < elements; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        drawingBoard.appendChild(square);
    };
});