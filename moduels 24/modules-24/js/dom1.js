// ৫ টি জিনিস দিয়ে html ফাইল থেকে Element নিতে পারি।
// 1. getElementsByTagName (এটা আমরা কম ব্যবহার করবো)
// 2. getElementById
// 3. getElementsByClassName
// 4. querySelectorAll
// 5. querySelector

// note 5: HTMLCollection মানো হলো live বা dynamic
// for of loop ব্যবহার করা যাবে।
// getElementById, getElementsByClassName দিয়ে কাজ করলে HTMLCollection পাওয়া যায়।

// nodelist মানে হলো static
// for Each  ব্যবহার করা যাবে। 
// querySelectorAll দিয়ে কাজ করলে nodelist পাওয়া যায়।


// note 1: getElementsByTagName
// document.getElementsByTagName("")  এর কাজ হলো কোনো একটা ডকুমেন্টস এর মধ্যে এক নামের সব  Elements গুলোকে ট্যাগ নাম দিয়ে খোঁজা।
// <script>
//         const  licollection = document.getElementsByTagName("li")
//         console.log(licollection);
// </script>
//     oputput : পাওয়া যাবে সবগুলো li tag কে।


// note 2: innerText মানে হলো ভেতরের লিখা গুলোকে দেখার জন্য।
// <script>
 //       const  licollection = document.getElementsByTagName("li")
 //       for (const  li of licollection){
 //           console.log(li.innerText); 
  //      }
 //   </script> 
// output হিসাবে li tag এর সমস্ত লেখা দেখা যাবে।

// note 3 .getElementById এর কাজ হলো ডকুমেন্টস এর মধ্যে id দিয়ে খুজে কাজ করা । # do not use
{/* <script>
  const chekcId = document.getElementById("place-title");
  console.log(chekcId); 
</script> */}

// কেনো কিছূ পরিবর্তন করতে চাইলে করা যাবে।
// <h1 id="People">People name</h1>
// <script>
//         const PeopleNameChage = document.getElementById("People");
//         PeopleNameChage.innerText = "People name to friend name change"
// </script>

// notes 4 : getElementsByClassName এর কাজ হলো ডকুমেন্টস এর মধ্যে class দিয়ে খুজে কাজ করা । 
// className দিয়ে খোজার সময় Element এর শেষে s থাকবে। এর মানে হলো এটা array এর মতো দিবে পুুরোপুরি array না। পরে চাইলে  for of loop চালানো সম্ভব। do not use . (dot)

{/* <script>
const placeName =   document.getElementsByClassName("place-name");
    for (const place of placeName){
        console.log(place); 
  }
</script> */}

// note 7: querySelectorAll হলো  css এর সিলেক্টর ব্যবহার করে ডাটা পাওয়া। use # or . dot
// <h1 id="allList">Lorem ipsum dolor sit amet.</h1>
// <script>
//         const find  = document.querySelectorAll ("#allList");
//         console.log(find);
// </script>

// //or
// <section class="list-container">
// <ul>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
// </ul>
// </section>
// <script>
//         const find2 = document.querySelectorAll(".list-container li");
//         for (const data of find2){
//             console.log(data.innerText);
//         }
//        </script>




// note 7: querySelector হলো  css এর সিলেক্টর ব্যবহার করে  প্রথম উপাদান খুজা।
{/* <script>
const qSelector = document.querySelector(".first li");
console.log(qSelector); 
</script> */}



// note 8: dynamic sytle
// css এর মতো javaScript দিয়ে style করা যায়।


// note 8 : change style in JavaScript
//   < h1 id = "allList" > Lorem ipsum dolor sit amet.</ >
//   <script>
//   const color = document.getElementById("allList").style.color = "red"
//   const bgcolor = document.getElementById("allList").style.backgroundColor = "yellow"
//   const texts = document.getElementById("allList").style.textAlign = "center"
//  </script>

note 9 : 