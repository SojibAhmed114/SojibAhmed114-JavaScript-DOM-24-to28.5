// note titel : oneclick handler use function
// system one : //ata use na korai valo ba korbo na
{/* <button onclick="document.body.style.backgroundColor ='red'">make Bg red</button> */}

// system two: //2 star important
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

// system four ; important
{/* <button class="make-dark" id="kihoilo">make dark </button>
const ki = document.getElementById("kihoilo");
ki.onclick = function darks() {
    document.body.style.backgroundColor = "gray";
} */}


//..................
// titel 2: oneclick handler AddEventListener (important)
// AddEventListener মূলত একাধিক কাজ করে। যেমন: onclick , MouseEvent etc.AddEventListener লেখার সময় ("কিকাজ সেইটা", functionName or CreateFunction)এর মধ্যে দুই টা value দেয়া লাগে।

// main system : very very important
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
// note : text change with input and button
//     <p id="text-item">village name</p>
//     <input id="inputFild" type="text">
//     <button id="btn-add">Add</button>
//     {/* js  */}
//     document.getElementById("btn-add").addEventListener("click", function () {
//     const textInput = document.getElementById("inputFild");
//     const inputText = textInput.value;

//     const para = document.getElementById("text-item");
//     para.innerText = inputText;
//     textInput.value = "";
// })
//...............................................

// note: variableName.inneerText: p tag , h1 tag ইত্যাদি থেকে লেখা পাইতে হলে inneerText ব্যবহার করতে হবে।
// variableName.value: input , textarea থেকে লেখা পাইতে হলে variableName.value ব্যবহার করতে হবে।


// how to create comments box
// html:
{/* <div id="commnets-container"> </div>
    <textarea name="" id="commnets-box" cols="50" rows="10" placeholder="Write your commnets"></textarea>
    <button id="commnets-btn">commnets</button>

//js:

document.getElementById("commnets-btn").addEventListener("click", function () {
    const commentsBox = document.getElementById("commnets-box");
    const yourComments = commentsBox.value;

    const commnetContainer = document.getElementById("commnets-container");
    const containerAdd = document.createElement("p");
    containerAdd.innerText = yourComments;

    commnetContainer.appendChild(containerAdd);

    commentsBox.value = "";
}) */}


//..................................................