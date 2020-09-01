// const dark_colors =["#056676", "#5eaaa8", "#a3d2ca", "#e8ded2", "#faf3dd", "#c8d5b9", "#8fc0a9", "#68b0ab"];

// const dark_fonts = ["black"];



const btn = document.getElementById('btn');
const headBtn = document.getElementById('headBtn');
const book = document.getElementById('book');
// const color = document.querySelector(".color");

btn.addEventListener('click', function(){

  if(document.body.style.backgroundColor == "white")
  {
  document.body.style.backgroundColor = "#464a47" ;
  document.body.style.color = "white";
  headBtn.style.backgroundColor = "black";
  }
  else
  {
  document.body.style.backgroundColor = "white" ;
  document.body.style.color = "black";
  ribbonVertical.style.backgroundColor = "white";

  }
  
  
  
})



// book.addEventListener('click', function(){

//   document.book.style.color = dark_colors[Math.floor(Math.random() * dark_colors.length)];

// })

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
