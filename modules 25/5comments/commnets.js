document.getElementById("commnets-btn").addEventListener("click", function () {
    const commentsBox = document.getElementById("commnets-box");
    const yourComments = commentsBox.value;

    const commnetContainer = document.getElementById("commnets-container");
    const containerAdd = document.createElement("p");
    containerAdd.innerText = yourComments;

    commnetContainer.appendChild(containerAdd);

    commentsBox.value = "";
})

// more try commnets box

document.getElementById("comments-update").addEventListener("click", function () {
    const yourTextBox = document.getElementById("yourTextBox");
    const yourTextBoxValue = yourTextBox.value;

    const commnetsContainer2 = document.getElementById("commnets-container2");
    const para = document.createElement("p");
    para.innerText = yourTextBoxValue;
    
    commnetsContainer2.appendChild(para);

})

