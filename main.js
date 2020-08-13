const dark_colors =["white", "#aa9d9d", "#e8e299", "#888568", "#688881", "#da8686", "#86d2da", "#bec5c5"];

const dark_fonts = ["black"]



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

