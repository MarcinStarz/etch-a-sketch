let drawingBoard = document.querySelector("#drawingBoard");

// Amount of squares
let inputAmount = 16;
let gridTemplateColumns = "repeat(" + inputAmount.toString() +', 1fr)'
let elements = inputAmount*inputAmount;

function multipleSquares() {
    for (let i = 0; i < elements; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        drawingBoard.appendChild(square);
    }
}
drawingBoard.style.gridTemplateColumns = gridTemplateColumns;

multipleSquares();
