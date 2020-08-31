const dark_colors =["white", "#d9654e", "#ed7e47", "#fabf5a", "#fabf5a", "#fabf5a", "#86d2da", "#bec5c5", "back.svg"];

const dark_fonts = ["black"];



const btn = document.getElementById('btn');
const book = document.getElementById('book');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){

  console.log("white")
  document.body.style.backgroundColor = dark_colors[Math.floor(Math.random() * dark_colors.length)];
  document.body.style.color = dark_fonts[Math.floor(Math.random() * dark_fonts.length)];
  
})

function submitButtonStyle(_this) {
  btn.style.backgroundColor = "red";
}

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
