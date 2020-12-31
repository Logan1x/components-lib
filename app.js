function darkmode() {
    var text = document.getElementById("btn-dm").innerText
    // alert(text)
    if (text == "dark mode") {
        document.querySelector("body").style.color = "white";
        document.querySelector("body").style.backgroundColor = "#1F2937";
        document.querySelector(".ow").style.color = "black";
        document.getElementById("btn-dm").innerText = "Light Mode"
    } else {
        document.querySelector("body").style.color = "Black";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".ow").style.color = "Black";
        document.getElementById("btn-dm").innerText = "Dark Mode"
    }


}