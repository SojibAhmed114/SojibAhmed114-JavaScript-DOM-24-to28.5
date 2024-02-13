function click1() {
    const clickOne = document.getElementById("text-one");
    clickOne.innerText = "safi ahmed";
}

document.getElementById("buttonTwo").addEventListener("click", function () {
    const clickTwos = document.getElementById("text-one");
    clickTwos.innerText = "sakil";
})


//............................
document.getElementById("btn-add").addEventListener("click", function () {
    const textInput = document.getElementById("inputFild");
    const inputText = textInput.value;

    const para = document.getElementById("text-item");
    para.innerText = inputText;
    textInput.value = "";
})

// style box 
document.getElementById("add-button").addEventListener("click", function () {
    const useText = document.getElementById("textField");
    const useTextValues = useText.value;

    const useName = document.getElementById("Namefield");
    useName.innerText = useTextValues;
    useText.value = "";
})