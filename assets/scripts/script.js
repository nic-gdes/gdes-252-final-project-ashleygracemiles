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

// conversion functions
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function feetToMiles(feet) {
    return feet / 5280;
}

function inchesToCentimeters(inches) {
    return inches * 2.54;
}

// perform conversion calc
function performConversion() {
    // get the input value
    var inputValue = document.getElementById('input-value').value;

    // Get the conversion type based on the selected option
    var conversionType = document.getElementById('conversion-type').value;

    // Variable to store the result and set the unit
    var result;
    var unit;

    // Determine which conversion to perform
    switch (conversionType) {
        case 'fahrenheit_to_celsius':
            result = fahrenheitToCelsius(inputValue);
            unit = ' °C';
            break;
        case 'feet_to_miles':
            result = feetToMiles(inputValue);
            unit = ' miles';
            break;
        case 'inches_to_centimeters':
            result = inchesToCentimeters(inputValue);
            unit = ' cm';
            break;
    }

    // Display the result with two decimal places and the unit based on the selection
    document.getElementById('result').innerText = result.toFixed(2) + unit;
}

document.getElementById('calculate-button').addEventListener('click', performConversion);

// Dark mode toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}

