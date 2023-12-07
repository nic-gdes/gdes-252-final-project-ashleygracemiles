// Modal pop up
let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// nav menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('open');
}

document.querySelector('.close-button').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.remove('open');
});

function fahrenheitToCelsius() {
    const fahrenheit = parseInt(document.getElementById('input-value').value);

    const celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById('result').innerText = celsius.toFixed(2) + ' °C';
};

function feetToMiles() {
    const feet = parseInt(document.getElementById('input-value').value);

    const miles = feet / 5280;

    document.getElementById('result').innerText = miles.toFixed(2) + ' miles';
};

function inchesToCentimeters() {
    const inches = parseInt(document.getElementById('input-value').value);

    const centimeters = inches * 2.54;

    document.getElementById('result').innerText = centimeters.toFixed(2) + ' cm';
};

// Dark mode toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}

