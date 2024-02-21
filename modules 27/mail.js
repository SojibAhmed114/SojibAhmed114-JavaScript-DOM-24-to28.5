// aivabe o kora jay kintu ai vabe na korai valo tar caite function diye kora valo ate kore code kom likha lage somoy beshe jave.

// function playBtn() {
//     const HomePageHide = document.getElementById("home-page");
//     HomePageHide.classList.add("hidden")

//     const playGroundShow = document.getElementById("play-ground");
//     playGroundShow.classList.remove("hidden")
// }

// ....................................................

function playBtn() {
    hiddenPageInId("home-page");
    showPageInId("play-ground");
    playGrounds();
}

function playGrounds() {
    const key = alphabateGame();

    const currentAlphabateElemets = document.getElementById("current-alphabate");
    currentAlphabateElemets.innerText = key;
}

