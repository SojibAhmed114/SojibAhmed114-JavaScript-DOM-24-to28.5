// one 
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", Pink);

function Pink() {
    document.body.style.backgroundColor = "pink"
}

// two
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function Green() {
    document.body.style.backgroundColor = "Green";
})

// main system 
document.getElementById("make-Salmon").addEventListener("click", function () {
    document.body.style.backgroundColor = "Salmon";
})