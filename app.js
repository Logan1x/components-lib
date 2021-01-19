// // var currentTheme = 'dark';
// let currentTheme;
// currentTheme = localStorage.getItem('currentTheme');

// function changeTheme() {
//     document.body.classList.toggle('dark-mode');

//     if (currentTheme === 'dark') {
//         
//         // currentTheme = 'sun';
//         localStorage.setItem('currentTheme', 'dark');
//         currentTheme = localStorage.getItem('currentTheme');
        
        
//     } else {
//         
//         // currentTheme = 'dark';
//         localStorage.setItem('currentTheme', 'light');
//         currentTheme = localStorage.getItem('currentTheme');
//     }
// }


// const btn = document.querySelector(".btn-toggle");


const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
  document.body.classList.add("dark-theme");
}

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-theme");
  
//   document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';

//   let theme = "light";
//   if (document.body.classList.contains("dark-theme")) {
//     document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
//     theme = "dark";
//   }
//   localStorage.setItem("theme", theme);
// });

function changeTheme() {
    document.body.classList.toggle("dark-theme");
  
  document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
}