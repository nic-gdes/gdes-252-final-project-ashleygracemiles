// nav menu

function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('open');
}

document.querySelector('.close-button').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.remove('open');
});

// conversions

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
    // get the input value and make sure it converts to a number value
    var inputValue = document.getElementById('input-value').value;
    inputValue = parseFloat(inputValue);

    // Get the conversion type based on the selected option
    var conversionType = document.getElementById('conversion-type').value;

    // Variable to store the result
    var result;

    // Determine which conversion to perform
    switch (conversionType) {
        case 'fahrenheit_to_celsius':
            result = fahrenheitToCelsius(inputValue);
            break;
        case 'feet_to_miles':
            result = feetToMiles(inputValue);
            break;
        case 'inches_to_centimeters':
            result = inchesToCentimeters(inputValue);
            break;
    }

    // Display the result with two decimal places
    document.getElementById('result').innerText = result.toFixed(2);
}

document.getElementById('calculate-button').addEventListener('click', performConversion);
