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