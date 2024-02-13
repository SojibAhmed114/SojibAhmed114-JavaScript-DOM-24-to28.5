৫ টি জিনিস দিয়ে html ফাইল থেকে Element নিতে পারি।
1. getElementsByTagName (এটা আমরা কম ব্যবহার করবো)
2. getElementById
3. getElementsByClassName
4. querySelectorAll
5. querySelector

note 5: HTMLCollection মানো হলো live বা dynamic
for of loop ব্যবহার করা যাবে।
getElementById, getElementsByClassName দিয়ে কাজ করলে HTMLCollection পাওয়া যায়।

nodelist মানে হলো static
for Each  ব্যবহার করা যাবে। for of use kora jay. 
querySelectorAll দিয়ে কাজ করলে nodelist পাওয়া যায়।


note 1: getElementsByTagName
document.getElementsByTagName("")  এর কাজ হলো কোনো একটা ডকুমেন্টস এর মধ্যে এক নামের সব  Elements গুলোকে ট্যাগ নাম দিয়ে খোঁজা।
<script>
        const  licollection = document.getElementsByTagName("li")
        console.log(licollection);
</script>
    oputput : পাওয়া যাবে সবগুলো li tag কে।


note 2: innerText মানে হলো ভেতরের লিখা গুলোকে দেখার জন্য।
<script>
       const  licollection = document.getElementsByTagName("li")
       for (const  li of licollection){
           console.log(li.innerText); 
       }
   </script> 
output হিসাবে li tag এর সমস্ত লেখা দেখা যাবে।

note 3 .getElementById এর কাজ হলো ডকুমেন্টস এর মধ্যে id দিয়ে খুজে কাজ করা । # do not use
<script>
  const chekcId = document.getElementById("place-title");
  console.log(chekcId); 
</script>

কেনো কিছূ পরিবর্তন করতে চাইলে করা যাবে।
 <h1 id="People">People name</h1>
 <script>
  const PeopleNameChage = document.getElementById("People");
  PeopleNameChage.innerText = "People name to friend name change"
 </script>

 getElementsByClassName এর কাজ হলো ডকুমেন্টস এর মধ্যে class দিয়ে খুজে কাজ করা । 
className দিয়ে খোজার সময় Element এর শেষে s থাকবে। এর মানে হলো এটা array এর মতো দিবে পুুরোপুরি array না। পরে চাইলে  for of loop চালানো সম্ভব। do not use . (dot)

<script>
const placeName = document.getElementsByClassName("place-name");
    for (const place of placeName){
        console.log(place); 
  }
</script>

note 7: querySelectorAll হলো  css এর সিলেক্টর ব্যবহার করে ডাটা পাওয়া। use # or . dot
<h1 id="allList">Lorem ipsum dolor sit amet.</h1>
<script>
        const find  = document.querySelectorAll ("#allList");
        console.log(find);
</script>

//or
<section class="list-container">
<ul>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
</ul>
</section>
<script>
        const find2 = document.querySelectorAll(".list-container li");
        for (const data of find2){
            console.log(data.innerText);
        }
       </script>




 note 7: querySelector হলো  css এর সিলেক্টর ব্যবহার করে  প্রথম উপাদান খুজা।
 <script>
const qSelector = document.querySelector(".first li");
console.log(qSelector); 
</script> 



// note 8: dynamic sytle
// css এর মতো javaScript দিয়ে style করা যায়।


// note 8 : change style in JavaScript
//   < h1 id = "allList" > Lorem ipsum dolor sit amet.</ >
//   <script>
//   const color = document.getElementById("allList").style.color = "red"
//   const bgcolor = document.getElementById("allList").style.backgroundColor = "yellow"
//   const texts = document.getElementById("allList").style.textAlign = "center"
//  </script>

// note 9 : getAttribute এটা দিয়ে id আর class লিস্ট পাওয়া যায়।
// <h1 id="gets" class=" header bg-red p-10">Lorem ipsum dolor sit amet.</h1>
// <script>
// const titles = document.getElementById("gets")
//     titles.getAttribute("id") //output: gets

// const titles = document.getElementById("gets")
// titles.getAttribute("class") //output: header bg-red p-10
// </script>

// note 10: classList এটা array এর মতো class list দেয়।
// <h1 id="gets" class=" header bg-red p-10">Lorem ipsum dolor sit amet.</h1>
//  <script>
//  const variableName = document.getElementById("gets");
//  variableName.classList // যতগুলো class আছে সব গুলোকে দেখাবে

//  variableName.classList.add("classAdd") // class এড করা যায়।
//  variableName.classList.remove("header") // class remove করা যাবে।
// </script>


// note 11:  setAttribute : setAttribute এ () এর মধ্যে দুটি জিনিস লিখতে হয়। ১.name । ২. কি করতে চাই তার Value.
{/* <h2 id="kire" class="painful">Programming is so painful</h2> */}
{/* <script>
  const sets = document.getElementById("kire");
  sets.setAttribute("title", "set korlam")
</script> */}


// note 12: innerHTML হলো যদি container কে innerHTML করা হয় তাহলে পুরো container মধ্যে  যা থাকবে সাব  শো করেবে। এমকি comments সহ

// const innerHtml =document.getElementsByClassName("list-container")[0].innerHTML
// console.log(innerHtml); //output: sob gula e dekhebe

// const innerHTml =document.getElementsByClassName("list-container")[0].innerHTML = "<h2>Programming is so </h2>"
// console.log(innerHTml); //output: ager sob delete hoye new h2 add hove
// </script>



//................................
// note 13: Dom Properties, Add And Remove Css style Using JS
//all section design in javaScript
// const sectionDesign = document.querySelectorAll("section");
// for (const design of sectionDesign) {
//     design.style.backgroundColor = "lightgray";
//     design.style.border = "2px solid red";
//     design.style.marginBottom = "5px";
//     design.style.paddingLeft = "20px"
//     design.style.borderRadius = "0 10px 0 10px"
// }

//one section design
//use id
// const middleSection = document.getElementById("middle-section");
// middleSection.style.backgroundColor = "red";
// middleSection.style.borderRadius = "20px";

// // use  - class
// const oneSectionDesign = document.getElementsByClassName("last-section");
// oneSectionDesign.style.backgroundColor = "gray";

//use css class
// css class

// js
// const firstSection = document.getElementById("first"); // এখানে first হলো html এর idনাম
// // firstSection.classList.add("about"); // about হলো css className যা html ফাইলে নেই। classList.add এর মাধ্যমে এড করা হয়েছে।





// title: NodeList, Htmlcollection, ParentNode, Childnodes, CreateElement
// note 14: childNodes
// childNodes মানে হলো একটি section বা file এর মধ্যে যা কিছু আছে সব শো করবে। (যেমন: all elemet, all node , commets , space)
// const palceContainer = document.getElementById("places-container")
// console.log(palceContainer.childNodes);
// or
// console.log(palceContainer.childNodes[0]);  //(index দিয়ে দেখা যাবে।).

// note 15: firstChild
// firstChild দিয়ে প্রথম টাকে পাওয়া যাবে।

// note: 16: lastChild
// lastChild দিয়ে শেষ টাকে পাওয়া যাবে।


// note 17 : NextSibling
// NextSibling = মানে হলো elemet বা tag এর পরবর্তী  কোন node আছে তা দেখা বা পাওয়া। এখানে মানে elemet, commets , space সবকিছু এক একটি নোড।
// note 18 : PreviousSibling
// PreviousSibling = মানে হলো elemet বা tag এর আগে  কোন node আছে তা দেখা বা পাওয়া। এখানে মানে elemet, commets , space সবকিছু এক একটি নোড।


// note 19: nextElementSibling
// nextElementSibling = মানে হলো পরবর্তী elemet বা tag কে আছে তা দেখা বা পাওয়া।

// note 20: createElement
// createElement মানে হলো  elemet বা tag তৈরি করা।
// const creates = document.createElement(li); output: <li></li>

// note 21: createAttribute
// createAttribute মানে হলো elemet এর মধ্যে  Attribute তৈরি করা। যেমন: <video src=""></video>এই ট্যাগ এর মধ্যে Attribute হলো src=""
// const aCreates = document.createAttribute("");

// note 22: appendchild
// append অনেকটা push এর মতো।
// কোনো Element create করার পর পুস করতে append ব্যবহার করা হয়।
// html code
{/* <section >
        <ul class="li-append">
            <li>safi</li>
            <li>safi</li>
            <li>safi</li>
        </ul>
</section>
js code: 
const liCreate = document.createElement("li");
liCreate.innerText = "new akta li add korlam r text o add korelam";
const htmlclass = document.querySelector(".li-append");
htmlclass.appendChild(liCreate) */}

//subnote: 22
// title: full section add use appendchild

// const whereToAdd = document.getElementById("main-container"); //main ar secction add korbo

// const createSection = document.createElement("section");
// const h1add = document.createElement("h1");
// h1add.innerText = "new section add in mainSection"
// createSection.appendChild(h1add);

// const ulCreate = document.createElement("ul");
// createSection.appendChild(ulCreate);

// const liCreate1 = document.createElement("li");
// liCreate1.innerText = "li one ";
// ulCreate.appendChild(liCreate1);

// const liCreate2 = document.createElement("li");
// liCreate2.innerText = "li two ";
// ulCreate.appendChild(liCreate2);

// const liCreate3 = document.createElement("li");
// liCreate3.innerText = "li three ";
// ulCreate.appendChild(liCreate3);


// whereToAdd.appendChild(createSection);

// sub note 22:
// //set innerHTML Directly:

// const whereToAddInner = document.getElementById("main-container");

// const addSecction = document.createElement("section");
//    //ক্যারেট চিহ্ন ব্যবহার করা লাগবে।
// addSecction.innerHTML = `             
// <h1>Header Create by innerHTML</h1>
// <ul>
//     <li >sojib100</li>
//     <li >sojib200</li>
//     <li >sojib300</li>
//     <li >sojib400</li>
//     <li >sojib500</li>
// </ul>
// `
// whereToAddInner.appendChild(addSecction);



// note 23: parentNode,
// parentNode মানে হলো child ar parent কে