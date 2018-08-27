var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function colorPicker() {
    body.style.background =
        'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background + ';';
}

var btn = document.createElement('button');

function createBtn() {
    btn.appendChild(document.createTextNode('Random'));
    body.appendChild(btn);
    btn.classList.add('btn');
    btn.classList.add('btn:active');
}

function decToHex(dec) {
    var hex = dec.toString(16);
    if (hex.length === 1) {
        hex = '0' + hex;
    }

    return hex;
}

function randomColor() {
    var ran1 = Math.floor(Math.random() * 256);
    var ran2 = Math.floor(Math.random() * 256);
    var ran3 = Math.floor(Math.random() * 256);
    var ran4 = Math.floor(Math.random() * 256);
    var ran5 = Math.floor(Math.random() * 256);
    var ran6 = Math.floor(Math.random() * 256);

    color1.value = '#' + decToHex(ran1) + decToHex(ran2) + decToHex(ran3);
    color2.value = '#' + decToHex(ran4) + decToHex(ran5) + decToHex(ran6);

    btn.style.background =
        'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    body.style.background =
        'linear-gradient(to right, ' +
        'rgb(' +
        ran1 +
        ', ' +
        ran2 +
        ', ' +
        ran3 +
        '), rgb(' +
        ran4 +
        ', ' +
        ran5 +
        ', ' +
        ran6 +
        '))';
    colorPicker();
}

body.style.background = randomColor();

btn.addEventListener('click', randomColor);

createBtn();

color1.addEventListener('input', colorPicker);

color2.addEventListener('input', colorPicker);
