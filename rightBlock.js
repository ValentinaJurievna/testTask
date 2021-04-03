//right-block

let buttonDocument = document.getElementById('documents-button');
let buttonCar = document.getElementById('yourCar-button');
let dropdownDocument =  document.getElementById('dropdownDocument');
let dropdownCar =  document.getElementById('dropdownCar');
let documentsTop = document.querySelector('.documents__top');
let yourCarTop = document.querySelector('.yourCar__top');
let blockDocuments = document.querySelector('.documents');
let blockCar = document.querySelector('.yourCar');

documentsTop.onclick = function() {
    dropdownDocument.classList.toggle('documents__dropdown_active');
    buttonDocument.classList.toggle('documents-button_active');
    blockDocuments.classList.toggle('documents_active');
}

yourCarTop.onclick = function() {
    dropdownCar.classList.toggle('yourCar__dropdown_active');
    buttonCar.classList.toggle('documents-button_active');
    blockCar.classList.toggle('documents_active');
}


//textarea

let textBox = document.querySelector('.textarea__textbox');
let bold = document.getElementById('boldText');
let italic = document.getElementById('italicText');
let underline = document.getElementById('underlineText');
let strikethrough = document.getElementById('strikethroughText');
let leftAlign = document.getElementById('leftAlign');
let centerAlign = document.getElementById('centerAlign');
let justifyAlign = document.getElementById('justifyAlign');
let rightAlign = document.getElementById('rightAlign');
let listNumber = document.getElementById('listNumber');
let listMarker = document.getElementById('listMarker');

bold.onclick = function() {
    textBox.classList.toggle('bold');
}

italic.onclick = function() {
    textBox.classList.toggle('italic');
}

underline.onclick = function() {
    textBox.classList.toggle('underline');
}

strikethrough.onclick = function() {
    textBox.classList.toggle('strikethrough');
}

leftAlign.onclick = function() {
    textBox.classList.add('left');
}

centerAlign.onclick = function() {
    textBox.classList.add('centerAlign');
}

rightAlign.onclick = function() {
    textBox.classList.add('rightAlign');
}

justifyAlign.onclick = function() {
    textBox.classList.add('justifyAlign');
}

listNumber.onclick = function() {
    textBox.classList.add('listNumber');
}
