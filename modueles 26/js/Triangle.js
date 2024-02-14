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
    console.log(area); 

    // show in card 
    const shows = document.getElementById("sapnArea");
    shows.innerText = area;

}