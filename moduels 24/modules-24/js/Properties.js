// all design system one
const sectionDesign = document.querySelectorAll("section");
for (const design of sectionDesign) {
    design.style.backgroundColor = "lightgray";
    design.style.border = "2px solid red";
    design.style.marginBottom = "5px";
    design.style.paddingLeft = "20px"
    design.style.borderRadius = "0 10px 0 10px"
}


//middle section design - use: id
const middleSection = document.getElementById("middle-section");
middleSection.style.backgroundColor = "red";
middleSection.style.borderRadius = "20px";

//  only one section design- use  - class
const oneSectionDesign = document.getElementsByClassName("last-section");
oneSectionDesign.style.backgroundColor = "gray";




