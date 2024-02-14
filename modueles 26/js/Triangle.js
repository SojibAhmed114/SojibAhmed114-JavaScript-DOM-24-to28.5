// Triangle calculator
function triangleCalculator() {
    // triangle-base
    const triangleBase = document.getElementById("triangle-base");
    const triangleText = triangleBase.value;
    const base = parseFloat(triangleText)

    // triangle-height
    const triangleHeight = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText);
    
    //  calculate
    const area = 0.5 * base * height;

    // show in card 
    const shows = document.getElementById("sapnArea");
    shows.innerText = area;

}


// rectangle calculator

function rectangleCalculator() {
    // whidth
    const rectangleWidth = document.getElementById("rectangle-width");
    const rectangleValue = rectangleWidth.value;
    const widths = parseFloat(rectangleValue)

    // height 
    const rectangleHeight = document.getElementById("rectangle-height");
    const rectangleValues = rectangleHeight.value;
    const height = parseFloat(rectangleValues);

    // calculator 
    const rectangles = widths * height;  
    
    // text add
    const rectangleArea = document.getElementById("rectangle-area");
    rectangleArea.innerText = rectangles;

}

