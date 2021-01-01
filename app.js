// function darkmode() {
//     var text = document.getElementById("btn-dm").innerText
//     // alert(text)
//     if (text == "Dark Mode") {
//         document.querySelector("body").style.color = "white";
//         document.querySelector("body").style.backgroundColor = "#1F2937";
//         document.querySelector(".ow").style.color = "black";
//         document.getElementById("btn-dm").innerText = "Light Mode"
//     } else {
//         document.querySelector("body").style.color = "Black";
//         document.querySelector("body").style.backgroundColor = "white";
//         document.querySelector(".ow").style.color = "Black";
//         document.getElementById("btn-dm").innerText = "Dark Mode"
//     }


// }

var currentTheme = 'dark';

function changeTheme() {
    document.body.classList.toggle('dark-mode');

    if (currentTheme === 'dark') {
        document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
        currentTheme = 'sun';
    } else {
        document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';
        currentTheme = 'dark';
    }
}