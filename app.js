// dark theme

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
  document.body.classList.add("dark-theme");
}

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