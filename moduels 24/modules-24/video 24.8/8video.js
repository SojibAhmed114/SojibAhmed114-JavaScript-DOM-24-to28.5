// full section add use appendchild
const whereToAdd = document.getElementById("main-container"); //main ar secction add korbo

const createSection = document.createElement("section");
const h1add = document.createElement("h1");
h1add.innerText = "new section add in mainSection"
createSection.appendChild(h1add);

const ulCreate = document.createElement("ul");
createSection.appendChild(ulCreate);

const liCreate1 = document.createElement("li");
liCreate1.innerText = "li one ";
ulCreate.appendChild(liCreate1);

const liCreate2 = document.createElement("li");
liCreate2.innerText = "li two ";
ulCreate.appendChild(liCreate2);

const liCreate3 = document.createElement("li");
liCreate3.innerText = "li three ";
ulCreate.appendChild(liCreate3);


whereToAdd.appendChild(createSection);


//set innerHTML Directly:

const whereToAddInner = document.getElementById("main-container");

const addSecction = document.createElement("section");
   //ক্যারেট চিহ্ন ব্যবহার করা লাগবে।
addSecction.innerHTML = `             
<h1>Header Create by innerHTML</h1>
<ul>
    <li >sojib100</li>
    <li >sojib200</li>
    <li >sojib300</li>
    <li >sojib400</li>
    <li >sojib500</li>
</ul>
`
whereToAddInner.appendChild(addSecction);
