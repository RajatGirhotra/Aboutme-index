// const dark_colors =["#056676", "#5eaaa8", "#a3d2ca", "#e8ded2", "#faf3dd", "#c8d5b9", "#8fc0a9", "#68b0ab"];

// const dark_fonts = ["black"];



const btn = document.getElementById('btn');
const headBtn = document.getElementById('headBtn');
const book = document.getElementById('book');
// const color = document.querySelector(".color");



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


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);