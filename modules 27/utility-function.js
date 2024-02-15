function hiddenPageInId(elemetById) {
    const hiddn = document.getElementById(elemetById);
    hiddn.classList.add("hidden")
}

function showPageInId(elemetId) {
    const show = document.getElementById(elemetId);
    show.classList.remove("hidden")
}
