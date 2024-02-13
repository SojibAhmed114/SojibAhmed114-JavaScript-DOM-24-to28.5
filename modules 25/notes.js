// note titel : oneclick handler use function
// system one : //ata use na korai valo ba korbo na
{/* <button onclick="document.body.style.backgroundColor ='red'">make Bg red</button> */}

// system two: //ata beshi use krobo
// <button onclick="makeYellow()">make yellow</button>
// // js
// function makeYellow() {
//     document.body.style.backgroundColor = "yellow";
// }

// system three:
{/* <button id="make-blue">make blue</button>
// js
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makess;
function makess() {
    document.body.style.backgroundColor = "blue"
} */}

// system four
{/* <button class="make-dark" id="kihoilo">make dark </button>
// js
const ki = document.getElementById("kihoilo");
ki.onclick = function darks() {
    document.body.style.backgroundColor = "gray";
} */}


//..................
// titel 2: oneclick handler AddEventListener (important)
// AddEventListener মূলত একাধিক কাজ করে। যেমন: onclick , MouseEvent etc.AddEventListener লেখার সময় ("কিকাজ সেইটা", functionName or CreateFunction)এর মধ্যে দুই টা value দেয়া লাগে।

// main system :
{/* <button id="make-Salmon">make orange</button>
// js
document.getElementById("make-Salmon").addEventListener("click", function () {
    document.body.style.backgroundColor = "Salmon";
}) */}

// system two:
{/* <button id="make-pink">make pink</button>
//js
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", Pink);

function Pink() {
    document.body.style.backgroundColor = "pink"
} */}


// system three:
{/* <button id="make-green">make green</button>
//js
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function Green() {
    document.body.style.backgroundColor = "Green";
}) */}

//.........................................