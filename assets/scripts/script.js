function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('open');
}

document.querySelector('.close-button').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.remove('open');
});

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function feetToMiles(feet) {
    return feet / 5280;
}

function inchesToCentimeters(inches) {
    return inches * 2.54;
}

function performConversion() {
    // get the input value
    var inputValue = document.getElementById
}