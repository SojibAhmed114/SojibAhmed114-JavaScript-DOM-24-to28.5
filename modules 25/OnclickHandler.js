// system two make function
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}
//  system three
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makess;
function makess() {
    document.body.style.backgroundColor = "blue";
}

// system four
// const makeDark = document.getElementsByClassName("make-dark"); //class diye kaj kre na keno?
const ki = document.getElementById("kihoilo");
ki.onclick = function darks() {
    document.body.style.backgroundColor = "gray";
}