function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('open');
}

document.querySelector('.close-button').addEventListener('click', function () {
    console.log("Close button clicked");
    var menu = document.getElementById('nav-menu');
    menu.classList.remove('open');
});