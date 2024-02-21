function hiddenPageInId(elementById) {
    const hidden = document.getElementById(elementById);
    hidden.classList.add("hidden");
}

function showPageInId(elemetId) {
    const show = document.getElementById(elemetId);
    show.classList.remove("hidden");
}


// playGrounds 
function alphabateGame() {
    const alphabateString = "abcdefghijklmnopqrstuvwxyz";
    const alphabate = alphabateString.split("");

    // random Number
    const randomNumber = Math.random()*25;
    const Number = Math.round(randomNumber);

    const letters = alphabate[Number];
    // return letters 
}